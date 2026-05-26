import { NextRequest, NextResponse } from 'next/server'
import { getFileBuffer } from '@/lib/drive'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ fileId: string }> }
) {
  const { fileId } = await params
  try {
    const { data, contentType } = await getFileBuffer(fileId)
    return new NextResponse(data as unknown as BodyInit, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch {
    return new NextResponse('image not found', { status: 404 })
  }
}
