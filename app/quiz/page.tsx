import type { Metadata } from 'next'
import QuizFlow from '@/components/quiz/QuizFlow'

export const metadata: Metadata = {
  title: 'style quiz',
  description: 'find your film session match. answer 5 questions and we\'ll recommend the right film, location, and session type.',
}

export default function QuizPage() {
  return <QuizFlow />
}
