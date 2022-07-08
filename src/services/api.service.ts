import { REVIEW_DISTRIBUTION_ENDPOINT } from '../constants/api.constant'
import { ReviewDistribution } from '../models/api.model'

export async function fetchReviewDistribution(): Promise<ReviewDistribution> {
  const response = await fetch(REVIEW_DISTRIBUTION_ENDPOINT)
  return await response.json()
}
