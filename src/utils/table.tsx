import { Box } from '@mui/material'
import { ReactNode } from 'react'
import RatingStars from '../components/RatingStars'
import { nullKeyLabel } from '../constants/app'
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

export function renderRating(value: any): ReactNode {
  return isNaN(Number(value)) ? (
    nullKeyLabel
  ) : (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <RatingStars value={Number(value)} />
      <Box sx={{ ml: 2 }}>{value}</Box>
    </Box>
  )
}
