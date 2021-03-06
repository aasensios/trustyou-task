import { nullKeyLabel } from '../constants/app.constant'
import { OverallScore } from '../models/api.model'
import { PieSlice } from '../models/app.model'

function hue(rating: string): number {
  const numericRating = isNaN(Number(rating)) ? 50 : Number(rating)
  return 250 + 50 * numericRating
}

export function mapScoreToPieSlice(score: OverallScore): PieSlice[] {
  return Object.entries(score)
    .map(([rating, amount]) => ({
      id: rating,
      label: rating,
      value: amount,
      color: `hsl(${hue(rating)}, 70%, 60%)`,
    }))
    .sort((a, b) => Number(b.label) - Number(a.label))
}

export function renderLabel(value: string): string {
  return isNaN(Number(value)) ? nullKeyLabel : value
}
