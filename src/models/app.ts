import { ReactNode } from 'react'

export type Score = {
  id: string
  rating: string
  amount: number
}

export interface PieSlice {
  id: string
  label: string
  value: number
  color?: string
}
