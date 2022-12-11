import { Box, Rating, Stack } from '@mui/material'
import { ReactNode } from 'react'
import { nullKeyLabel } from '../constants/app.constant'
import { OverallScore } from '../models/api.model'
import { Score } from '../models/app.model'

export function mapScoreToRows(score: OverallScore): Score[] {
  return Object.entries(score)
    .map(([rating, amount]) => ({
      id: rating,
      rating: Number(rating),
      amount,
    }))
    .sort((a, b) => b.rating - a.rating)
}

export function renderRating(value: any): ReactNode {
  return isNaN(Number(value)) ? (
    nullKeyLabel
  ) : (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Rating value={Number(value)} precision={0.5} readOnly />
      <Box>{value}</Box>
    </Stack>
  )
}
