import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { Data } from '../models/api'
import { mapToRows } from '../utils/table'

export default function Table({ data }: { data: Data }) {
  const rows: GridRowsProp = mapToRows(data.overall_score)
  const columns: GridColDef[] = [
    { field: 'id', hide: true },
    { field: 'rating', headerName: 'Rating', width: 130 },
    {
      field: 'amount',
      headerName: 'Amount of reviews',
      width: 200,
      align: 'right',
    },
  ]

  return (
    <div style={{ width: '100%' }}>
      <DataGrid rows={rows} columns={columns} autoHeight pageSize={10} />
    </div>
  )
}
