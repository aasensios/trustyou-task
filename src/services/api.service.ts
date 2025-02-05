import { REVIEW_DISTRIBUTION_ENDPOINT } from '../constants/api.constant'
import { ReviewDistribution } from '../models/api.model'

export async function getReviewDistribution(): Promise<ReviewDistribution> {
  const response = await fetch(REVIEW_DISTRIBUTION_ENDPOINT)
  return response.json()
}

export async function getMockReviewDistribution(): Promise<ReviewDistribution> {
  return {
    data: {
      overall_score: {
        '1': 5,
        '2': 3,
        '3': 8,
        '4': 22,
        '5': 10,
        null: 13,
        '3.5': 14,
        '4.5': 23,
        '2.5': 1,
        '0.5': 1,
      },
      guest_type: {
        null: 92,
        family: 3,
        friends: 2,
        business: 2,
        couple: 1,
      },
      guest_age: {
        '22': 1,
        '23': 2,
        '25': 2,
        '32': 1,
        null: 94,
      },
      guest_nationality: {
        null: 86,
        DE: 1,
        BY: 2,
        BD: 1,
        BS: 2,
        AU: 1,
        AT: 1,
        AR: 5,
        FR: 1,
      },
    },
  }
}
