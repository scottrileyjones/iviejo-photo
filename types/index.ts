export interface Shoot {
  id: string
  slug: string
  title: string
  category: 'portrait' | 'couple' | 'family' | 'graduation' | 'event' | 'bw'
  location: string
  cover_image_url: string
  preview_image_url: string
  description: string
  film_stock: string
  film_format: string
  camera: string
  year: number
  featured: boolean
  published: boolean
  created_at: string
}

export interface ShootImage {
  id: string
  shoot_id: string
  image_url: string
  sort_order: number
  film_notes?: string
}

export interface Lead {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  source?: string
  quiz_answers?: Record<string, string>
  style_profile?: string
  film_stock_match?: string
  opt_in?: boolean
}

export interface InspoSubmission {
  id?: string
  name: string
  email: string
  file_urls?: string[]
  inspo_links?: string
  film_preference?: string
  notes?: string
}

export interface QuizAnswers {
  occasion?: string
  film_draw?: string
  vibe?: string
  location?: string
  timing?: string
}

export interface StyleProfile {
  id: string
  name: string
  description: string
  film_stock: string
  vibe_keys: string[]
  location_keys: string[]
  film_draw_keys: string[]
  occasion_keys: string[]
}
