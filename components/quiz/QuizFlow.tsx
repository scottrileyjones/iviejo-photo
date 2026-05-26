'use client'

import { useState } from 'react'
import { QuizAnswers } from '@/types'
import { matchProfile, profiles } from '@/lib/quiz-logic'
import LeadCaptureForm from './LeadCaptureForm'
import QuizResult from './QuizResult'
import Link from 'next/link'

const steps = [
  {
    id: 'occasion',
    question: "what's the occasion?",
    options: [
      'a couple session',
      'portraits of me',
      'family photos',
      'graduation / milestone',
      'something else',
    ],
  },
  {
    id: 'film_draw',
    question: 'what draws you to film photography?',
    options: [
      'the warmth and grain — it feels alive',
      'the timelessness — it looks like another era',
      'the honesty — nothing is retouched to perfection',
      'honestly, i just want something different',
      "i'm not sure yet — show me what's possible",
    ],
  },
  {
    id: 'vibe',
    question: 'what vibe feels most like you?',
    options: [
      'cinematic & moody',
      'warm & golden',
      'raw & editorial',
      'soft & intimate',
      'bold & unexpected',
    ],
    visual: true,
  },
  {
    id: 'location',
    question: 'where do you picture the shoot?',
    options: [
      'utah canyon / red rock desert',
      'mountain / alpine / forest',
      'salt flats or open desert',
      'city streets / urban',
      'at home or somewhere personal',
      'wherever you think is right',
    ],
  },
  {
    id: 'timing',
    question: 'when are you thinking?',
    options: [
      'within the next month',
      '1–3 months',
      '3–6 months',
      'just exploring for now',
    ],
  },
]

const vibeImages: Record<string, string> = {
  'cinematic & moody': 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80',
  'warm & golden': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
  'raw & editorial': 'https://images.unsplash.com/photo-1523264766099-e4c6aff2e2cf?w=600&q=80',
  'soft & intimate': 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&q=80',
  'bold & unexpected': 'https://images.unsplash.com/photo-1502252430442-aac78f397426?w=600&q=80',
}

export default function QuizFlow() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [showLead, setShowLead] = useState(false)
  const [result, setResult] = useState<ReturnType<typeof matchProfile> | null>(null)

  const totalSteps = steps.length + 1 // +1 for lead form
  const progress = step / totalSteps

  const currentStep = steps[step]

  function selectOption(value: string) {
    const key = currentStep.id as keyof QuizAnswers
    const next = { ...answers, [key]: value }
    setAnswers(next)
    setTimeout(() => {
      if (step < steps.length - 1) {
        setStep(step + 1)
      } else {
        setShowLead(true)
      }
    }, 200)
  }

  function handleLeadSubmit() {
    const profile = matchProfile(answers)
    setResult(profile)
  }

  if (result) {
    const profile = profiles.find((p) => p.id === result.id) ?? result
    return <QuizResult profile={profile} />
  }

  if (showLead) {
    return (
      <LeadCaptureForm
        answers={answers}
        profile={matchProfile(answers)}
        onSubmit={handleLeadSubmit}
        progress={1}
      />
    )
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bone)',
      }}
    >
      {/* Progress bar */}
      <div style={{ height: 2, backgroundColor: 'var(--putty)', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${progress * 100}%`,
            backgroundColor: 'var(--forest)',
            transition: 'width 400ms var(--ease-out)',
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 20px',
        }}
      >
        <div style={{ width: '100%', maxWidth: 640 }}>
          {/* Step counter */}
          <p className="t-caption" style={{ marginBottom: 32, textAlign: 'center' }}>
            {step + 1} of {steps.length}
          </p>

          {/* Question */}
          <h2
            className="t-h1"
            style={{ textAlign: 'center', marginBottom: 48 }}
          >
            {currentStep.question}
          </h2>

          {/* Options */}
          {currentStep.visual ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 12,
              }}
            >
              {currentStep.options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => selectOption(opt)}
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    position: 'relative',
                    aspectRatio: '3/2',
                    overflow: 'hidden',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={vibeImages[opt]}
                    alt={opt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="photo"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(26, 23, 20, 0.4)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: 16,
                      transition: 'background 300ms var(--ease-out)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 13,
                        fontWeight: 500,
                        color: 'var(--bone)',
                        letterSpacing: 0,
                      }}
                    >
                      {opt}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {currentStep.options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => selectOption(opt)}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--putty)',
                    borderRadius: 'var(--r-1)',
                    padding: '16px 24px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    color: 'var(--ink)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'border-color 150ms var(--ease-out), background 150ms var(--ease-out)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--stone)'
                    e.currentTarget.style.background = 'var(--linen)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--putty)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="t-link"
              style={{ marginTop: 40, display: 'block', textAlign: 'center', background: 'none', border: 'none' }}
            >
              ← back
            </button>
          )}

          {step === 0 && (
            <div style={{ marginTop: 40, textAlign: 'center' }}>
              <Link href="/" className="t-link">
                ← back to home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
