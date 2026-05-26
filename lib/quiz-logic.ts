import { QuizAnswers, StyleProfile } from '@/types'

const profiles: StyleProfile[] = [
  {
    id: 'warm-portrait',
    name: 'THE WARM PORTRAIT',
    description: 'warm, intimate, golden-hour-lit. for people who want to feel like themselves, just beautifully so.',
    film_stock: 'warm & golden',
    vibe_keys: ['warm & golden', 'soft & intimate'],
    location_keys: ['mountain / alpine / forest', 'at home or somewhere personal'],
    film_draw_keys: ['the warmth and grain — it feels alive', 'the honesty — nothing is retouched to perfection'],
    occasion_keys: ['a couple session', 'portraits of me'],
  },
  {
    id: 'vivid-wanderer',
    name: 'THE VIVID WANDERER',
    description: 'big skies, utah red rock, saturated color. for the couple who wants drama and landscape as much as each other.',
    film_stock: 'vivid & saturated',
    vibe_keys: ['cinematic & moody', 'bold & unexpected'],
    location_keys: ['utah canyon / red rock desert', 'salt flats or open desert'],
    film_draw_keys: ['the timelessness — it looks like another era', 'honestly, i just want something different'],
    occasion_keys: ['a couple session', 'graduation / milestone'],
  },
  {
    id: 'editorial-bw',
    name: 'THE EDITORIAL',
    description: 'high-contrast black and white. raw, timeless, unflinching.',
    film_stock: 'editorial b&w',
    vibe_keys: ['raw & editorial', 'cinematic & moody'],
    location_keys: ['city streets / urban', 'utah canyon / red rock desert'],
    film_draw_keys: ['the honesty — nothing is retouched to perfection', "i'm not sure yet — show me what's possible"],
    occasion_keys: ['portraits of me', 'graduation / milestone'],
  },
  {
    id: 'golden-session',
    name: 'THE GOLDEN SESSION',
    description: 'urban utah. brick, concrete, golden light cutting through a city alley.',
    film_stock: 'warm & golden',
    vibe_keys: ['bold & unexpected', 'warm & golden'],
    location_keys: ['city streets / urban', 'at home or somewhere personal'],
    film_draw_keys: ['the warmth and grain — it feels alive', 'honestly, i just want something different'],
    occasion_keys: ['portraits of me', 'a couple session'],
  },
  {
    id: 'heirloom-session',
    name: 'THE HEIRLOOM SESSION',
    description: 'for families who want photographs that will outlast them. rich, warm, timeless.',
    film_stock: 'warm & golden',
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
