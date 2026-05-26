'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxImage {
  src: string
  alt: string
  film_notes?: string
}

interface GalleryLightboxProps {
  images: LightboxImage[]
}

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, prev, next])

  return (
    <>
      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 8,
        }}
      >
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => { setIndex(i); setOpen(true) }}
            style={{ all: 'unset', cursor: 'zoom-in', display: 'block', aspectRatio: '4/5', overflow: 'hidden' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="img-hover photo"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(26, 23, 20, 0.96)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              background: 'none',
              border: 'none',
              color: 'var(--stone)',
              cursor: 'pointer',
              zIndex: 201,
            }}
            aria-label="close"
          >
            <X size={24} strokeWidth={1.25} strokeLinecap="square" />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            style={{
              position: 'absolute',
              left: 24,
              background: 'none',
              border: 'none',
              color: 'var(--stone)',
              cursor: 'pointer',
              zIndex: 201,
              padding: 16,
            }}
            aria-label="previous"
          >
            <ChevronLeft size={32} strokeWidth={1.25} strokeLinecap="square" />
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '80vw',
              maxHeight: '80vh',
              boxShadow: '0 24px 60px -20px rgba(40,30,20,0.18)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[index].src}
              alt={images[index].alt}
              style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }}
              className="photo"
            />
            {images[index].film_notes && (
              <p className="t-caption" style={{ color: 'var(--slate)', marginTop: 12, textAlign: 'center' }}>
                {images[index].film_notes}
              </p>
            )}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            style={{
              position: 'absolute',
              right: 24,
              background: 'none',
              border: 'none',
              color: 'var(--stone)',
              cursor: 'pointer',
              zIndex: 201,
              padding: 16,
            }}
            aria-label="next"
          >
            <ChevronRight size={32} strokeWidth={1.25} strokeLinecap="square" />
          </button>

          {/* Thumbnail strip */}
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              display: 'flex',
              gap: 4,
              overflowX: 'auto',
              maxWidth: '80vw',
              padding: '0 8px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  flexShrink: 0,
                  width: 48,
                  height: 48,
                  overflow: 'hidden',
                  opacity: i === index ? 1 : 0.4,
                  transition: 'opacity 200ms var(--ease-out)',
                  outline: i === index ? '1px solid var(--stone)' : 'none',
                }}
                aria-label={`go to image ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <div
            style={{ position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="t-caption" style={{ color: 'var(--slate)' }}>
              {index + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  )
}
