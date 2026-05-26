import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'
import { sendLeadNotification, sendLeadConfirmation } from '@/lib/resend'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      first_name,
      last_name,
      email,
      phone,
      source,
      quiz_answers,
      style_profile,
      film_stock_match,
      opt_in = true,
    } = body

    if (!email) {
      return NextResponse.json({ error: 'email is required' }, { status: 400 })
    }

    // Insert to Supabase
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const supabase = createServiceClient()
      await supabase.from('leads').insert({
        first_name,
        last_name,
        email,
        phone,
        source,
        quiz_answers,
        style_profile,
        film_stock_match,
        opt_in,
      })
    }

    // Send emails
    if (process.env.RESEND_API_KEY && process.env.PHOTOGRAPHER_EMAIL) {
      await Promise.allSettled([
        sendLeadNotification({ first_name, last_name, email, phone, source, style_profile, film_stock_match, quiz_answers }),
        sendLeadConfirmation({ first_name, email, style_profile, film_stock_match }),
      ])
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('leads error:', err)
    return NextResponse.json({ error: 'internal error' }, { status: 500 })
  }
}
