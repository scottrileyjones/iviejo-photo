import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const film_preference = formData.get('film_preference') as string
    const inspo_links = formData.get('inspo_links') as string
    const notes = formData.get('notes') as string
    const files = formData.getAll('files') as File[]

    if (!email) {
      return NextResponse.json({ error: 'email is required' }, { status: 400 })
    }

    const file_urls: string[] = []

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createServiceClient()

      for (const file of files) {
        const buffer = Buffer.from(await file.arrayBuffer())
        const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`
        const { data } = await supabase.storage.from('inspo-uploads').upload(path, buffer, {
          contentType: file.type,
        })
        if (data) {
          const { data: publicUrl } = supabase.storage.from('inspo-uploads').getPublicUrl(path)
          file_urls.push(publicUrl.publicUrl)
        }
      }

      await supabase.from('inspo_submissions').insert({
        name,
        email,
        file_urls,
        inspo_links,
        film_preference,
        notes,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('upload error:', err)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}
