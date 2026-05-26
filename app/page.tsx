import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import FilmManifesto from '@/components/home/FilmManifesto'
import FeaturedGalleries from '@/components/home/FeaturedGalleries'
import FilmStocks from '@/components/home/FilmStocks'
import AboutTeaser from '@/components/home/AboutTeaser'
import Testimonials from '@/components/home/Testimonials'
import QuizCTA from '@/components/home/QuizCTA'

export const metadata: Metadata = {
  title: 'iviejo photo — analog film photography, utah',
  description: 'utah-based analog film photographer specializing in portraits, couples, families & milestones. shot on 35mm and medium format. developed in-house.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FilmManifesto />
      <FeaturedGalleries />
      <FilmStocks />
      <AboutTeaser />
      <Testimonials />
      <QuizCTA />
    </>
  )
}
