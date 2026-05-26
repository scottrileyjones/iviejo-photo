import { QuizAnswers, StyleProfile } from '@/types'

const profiles: StyleProfile[] = [
  {
    id: 'portra-portrait',
    name: 'THE PORTRA PORTRAIT',
    description: 'warm, intimate, golden-hour-lit. for people who want to feel like themselves, just beautifully so.',
    film_stock: 'Kodak Portra 400',
    vibe_keys: ['warm & golden', 'soft & intimate'],
    location_keys: ['mountain / alpine / forest', 'at home or somewhere personal'],
    film_draw_keys: ['the warmth and grain — it feels alive', 'the honesty — nothing is retouched to perfection'],
    occasion_keys: ['a couple session', 'portraits of me'],
  },
  {
    id: 'ektar-wanderer',
    name: 'THE EKTAR WANDERER',
    description: 'big skies, utah red rock, saturated color. for the couple who wants drama and landscape as much as each other.',
    film_stock: 'Kodak Ektar 100',
    vibe_keys: ['cinematic & moody', 'bold & unexpected'],
    location_keys: ['utah canyon / red rock desert', 'salt flats or open desert'],
    film_draw_keys: ['the timelessness — it looks like another era', 'honestly, i just want something different'],
    occasion_keys: ['a couple session', 'graduation / milestone'],
  },
  {
    id: 'hp5-editorial',
    name: 'THE HP5 EDITORIAL',
    description: 'high-contrast black and white. raw, timeless, unflinching.',
    film_stock: 'Ilford HP5+',
    vibe_keys: ['raw & editorial', 'cinematic & moody'],
    location_keys: ['city streets / urban', 'utah canyon / red rock desert'],
    film_draw_keys: ['the honesty — nothing is retouched to perfection', "i'm not sure yet — show me what's possible"],
    occasion_keys: ['portraits of me', 'graduation / milestone'],
  },
  {
    id: 'gold-session',
    name: 'THE GOLD SESSION',
    description: 'urban utah. brick, concrete, golden light cutting through a city alley.',
    film_stock: 'Kodak Gold 200',
    vibe_keys: ['bold & unexpected', 'warm & golden'],
    location_keys: ['city streets / urban', 'at home or somewhere personal'],
    film_draw_keys: ['the warmth and grain — it feels alive', 'honestly, i just want something different'],
    occasion_keys: ['portraits of me', 'a couple session'],
  },
  {
    id: 'medium-format-heirloom',
    name: 'THE MEDIUM FORMAT HEIRLOOM',
    description: 'for families who want photographs that will outlast them. shot on 120 medium format for maximum richness.',
    film_stock: '120 medium format',
    vibe_keys: ['soft & intimate', 'warm & golden'],
    location_keys: ['at home or somewhere personal', 'mountain / alpine / forest'],
    film_draw_keys: ['the timelessness — it looks like another era', 'the warmth and grain — it feels alive'],
    occasion_keys: ['family photos', 'something else'],
  },
]

function score(profile: StyleProfile, answers: QuizAnswers): number {
  let total = 0

  // Vibe: 3pts
  if (answers.vibe && profile.vibe_keys.includes(answers.vibe)) total += 3

  // Location: 2pts
  if (answers.location && profile.location_keys.includes(answers.location)) total += 2

  // Film draw: 2pts
  if (answers.film_draw && profile.film_draw_keys.includes(answers.film_draw)) total += 2

  // Occasion: 1pt
  if (answers.occasion && profile.occasion_keys.includes(answers.occasion)) total += 1

  return total
}

export function matchProfile(answers: QuizAnswers): StyleProfile {
  let best = profiles[0]
  let bestScore = -1

  for (const profile of profiles) {
    const s = score(profile, answers)
    if (s > bestScore) {
      bestScore = s
      best = profile
    }
  }

  return best
}

export { profiles }
