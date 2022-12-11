import { ResponsivePie } from '@nivo/pie'
import { Data } from '../models/api.model'
import { LABEL_FOR_NULL } from '../constants/app.constant'
import { OverallScore } from '../models/api.model'
import { PieSlice } from '../models/app.model'

export default function Pie({ data }: { data: Data }) {
  const pieSlices = mapScoreToPieSlice(data.overall_score)

  return (
    <ResponsivePie
      data={pieSlices}
      valueFormat={(value) => `${value} reviews`}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabel={(value) => renderLabel(value.label as string)}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      colors={{ datum: 'data.color' }}
    />
  )
}

export function mapScoreToPieSlice(score: OverallScore): PieSlice[] {
  return Object.entries(score)
    .map(([rating, amount]) => ({
      id: rating,
      label: isNaN(Number(rating)) ? '0' : rating,
      value: amount,
      color: `hsl(${hue(rating)}, 70%, 60%)`,
    }))
    .sort((a, b) => Number(b.label) - Number(a.label))
}

function hue(rating: string): number {
  const numericRating = isNaN(Number(rating)) ? 50 : Number(rating)
  return 250 + 50 * numericRating
}

function renderLabel(value: string): string {
  return value === '0' ? LABEL_FOR_NULL : value
}
