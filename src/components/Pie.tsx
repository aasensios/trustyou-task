import { ResponsivePie } from '@nivo/pie'
import { Data } from '../models/api'
import { mapScoreToPieSlice } from '../utils/pie'

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
