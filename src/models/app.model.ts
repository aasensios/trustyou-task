export type Score = {
  id: string
  rating: number
  amount: number
}

export interface PieSlice {
  id: string
  label: string
  value: number
  color?: string
}
