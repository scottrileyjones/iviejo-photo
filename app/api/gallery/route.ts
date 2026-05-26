import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')
  const featured = searchParams.get('featured')

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return NextResponse.json({ shoots: [] })
  }

  const supabase = createServiceClient()
  let query = supabase.from('shoots').select('*').eq('published', true).order('created_at', { ascending: false })

  if (category && category !== 'all') query = query.eq('category', category)
  if (featured === 'true') query = query.eq('featured', true)

  const { data, error } = await query

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ shoots: data })
}
