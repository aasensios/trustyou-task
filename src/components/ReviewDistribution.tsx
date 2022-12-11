import { useQuery } from '@tanstack/react-query'
import { Stack, Typography } from '@mui/material'
import { getReviewDistribution } from '../services/api.service'
import Table from './Table'
import Pie from './Pie'

export default function ReviewDistribution() {
  const { data, isSuccess } = useQuery({
    queryKey: ['review-distribution'],
    queryFn: getReviewDistribution,
  })

  return isSuccess ? (
    <Stack spacing={2} sx={{ width: '420px', padding: '3vh' }}>
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
      <Stack sx={{ height: '420px' }}>
        <Typography variant="h6" component="h3">
          Pie Chart
        </Typography>
        <Pie data={data?.data} />
      </Stack>
    </Stack>
  ) : null
}
