import { ReactNode } from 'react'
import { Box, Rating, Stack } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { LABEL_FOR_NULL } from '../constants/app.constant'
import { Data, OverallScore } from '../models/api.model'
import { Score } from '../models/app.model'

export default function Table({ data }: { data: Data }) {
  const rows: GridRowsProp = mapScoreToRows(data.overall_score)
  const columns: GridColDef[] = [
    { field: 'id', hide: true },
    {
      field: 'rating',
      headerName: 'Rating',
      renderCell: ({ value }) => renderRating(value),
      width: 200,
    },
    {
      field: 'amount',
      headerName: 'Amount of reviews',
      width: 200,
      align: 'right',
    },
  ]

  return <DataGrid rows={rows} columns={columns} autoHeight hideFooter />
}

function mapScoreToRows(score: OverallScore): Score[] {
  return Object.entries(score)
    .map(([rating, amount]) => ({
      id: rating,
      rating: isNaN(Number(rating)) ? 0 : Number(rating),
      amount,
    }))
    .sort((a, b) => b.rating - a.rating)
}

function renderRating(value: number): ReactNode {
  return value === 0 ? (
    LABEL_FOR_NULL
  ) : (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Rating value={value} precision={0.5} readOnly />
      <Box>{value}</Box>
    </Stack>
  )
}
