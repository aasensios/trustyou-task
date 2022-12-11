import { useEffect, useState } from 'react'
import Table from './components/Table'
import { ReviewDistribution } from './models/api.model'
import { fetchReviewDistribution } from './services/api.service'
import Pie from './components/Pie'
import { Stack, Typography } from '@mui/material'

export default function App() {
  const [reviewDistribution, setReviewDistribution] =
    useState<ReviewDistribution>()

  useEffect(() => {
    async function fetchReviewDistributionEffect() {
      setReviewDistribution(await fetchReviewDistribution())
    }
    fetchReviewDistributionEffect()
  }, [])

  return (
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
        {reviewDistribution && <Table data={reviewDistribution.data} />}
      </Stack>
      <Stack sx={{ height: '420px' }}>
        <Typography variant="h6" component="h3">
          Pie Chart
        </Typography>
        {reviewDistribution && <Pie data={reviewDistribution.data} />}
      </Stack>
    </Stack>
  )
}
