import { ReactNode } from 'react'
import RatingStars from '../components/RatingStars'
import { OverallScore } from '../models/api'
import { Score } from '../models/app'

export function mapScoreToRows(score: OverallScore): Score[] {
  return Object.entries(score)
    .map(([rating, amount]) => ({
      id: rating,
      rating,
      amount,
    }))
    .sort((a, b) => Number(b.rating) - Number(a.rating))
}

export function renderRating(value: unknown): ReactNode {
  return isNaN(Number(value)) ? (
    'Without rating'
  ) : (
    <RatingStars value={Number(value)} />
  )
}
