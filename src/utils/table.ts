import { OverallScore } from '../models/api'
import { Score } from '../models/app'

export function mapToRows(score: OverallScore): Score[] {
  return Object.entries(score)
    .map(([rating, amount]) => ({
      id: rating,
      rating,
      amount,
    }))
    .sort((a, b) => Number(b.rating) - Number(a.rating))
}
