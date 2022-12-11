import { Box, Rating, Stack } from '@mui/material'
import { ReactNode } from 'react'
import { LABEL_FOR_NULL } from '../constants/app.constant'
import { OverallScore } from '../models/api.model'
import { Score } from '../models/app.model'

export function mapScoreToRows(score: OverallScore): Score[] {
  return Object.entries(score)
    .map(([rating, amount]) => ({
      id: rating,
      rating: isNaN(Number(rating)) ? 0 : Number(rating),
      amount,
    }))
    .sort((a, b) => b.rating - a.rating)
}

export function renderRating(value: number): ReactNode {
  return value === 0 ? (
    LABEL_FOR_NULL
  ) : (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Rating value={value} precision={0.5} readOnly />
      <Box>{value}</Box>
    </Stack>
  )
}
