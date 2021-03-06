import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { Data } from '../models/api.model'
import { mapScoreToRows, renderRating } from '../utils/table.util'

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

  return (
    <div style={{ width: '100%' }}>
      <DataGrid rows={rows} columns={columns} autoHeight hideFooter />
    </div>
  )
}
