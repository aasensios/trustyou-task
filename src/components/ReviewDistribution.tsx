import { useQuery } from '@tanstack/react-query'
import { Stack, Typography } from '@mui/material'
import {
  getMockReviewDistribution,
  getReviewDistribution,
} from '../services/api.service'
import Table from './Table'
import Pie from './Pie'

export default function ReviewDistribution() {
  const { data } = useQuery({
    queryKey: ['review-distribution'],
    queryFn: getReviewDistribution,
    // queryFn: getMockReviewDistribution,
  })

  if (!data) return

  return (
    <Stack spacing={2} sx={{ maxWidth: 530, padding: 3 }}>
      <Typography variant="h4" component="h1">
        TrustYou Probation Task
      </Typography>
      <Typography variant="h5" component="h2">
        Review Distribution
      </Typography>
      <Stack>
        <Typography variant="h6" component="h3">
          Table
        </Typography>
        <Table data={data?.data} />
      </Stack>
      <Stack sx={{ height: 420 }}>
        <Typography variant="h6" component="h3">
          Pie Chart
        </Typography>
        <Pie data={data?.data} />
      </Stack>
    </Stack>
  )
}
