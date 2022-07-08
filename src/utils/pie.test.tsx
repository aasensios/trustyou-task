import { OverallScore } from '../models/api'
import { PieSlice } from '../models/app'
import { mapScoreToPieSlice } from '../utils/pie'
import { describe, expect, it } from 'vitest'

describe('mapScoreToPieSlice function', () => {
  it('receives non-zero number as value', async () => {
    const score: OverallScore = {
      '5': 1,
      null: 2,
    }
    const pieSlices: PieSlice[] = [
      {
        id: '5',
        label: '5',
        value: 1,
        color: 'hsl(500, 70%, 60%)',
      },
      {
        id: 'null',
        label: 'null',
        value: 2,
        color: 'hsl(2750, 70%, 60%)',
      },
    ]
    expect(pieSlices).toEqual(mapScoreToPieSlice(score))
  })
})
