import { OverallScore } from '../models/api'
import { PieSlice } from '../models/app'

const COLOR = {
  '5': 'green',
  '4.5': 'green',
  '4': 'yellow',
  '3.5': 'yellow',
  '3': 'lightyellow',
  '2.5': 'lightyellow',
  '2': 'orange',
  '1.5': 'orange',
  '1': 'lightgray',
  '0.5': 'lightgray',
  null: 'red',
}

export function mapToPieSlice(score: OverallScore): PieSlice[] {
  return Object.entries(score)
    .map(([rating, amount]) => ({
      id: rating,
      label: rating,
      value: amount,
      // color: COLOR[rating],
    }))
    .sort((a, b) => Number(b.label) - Number(a.label))
}
