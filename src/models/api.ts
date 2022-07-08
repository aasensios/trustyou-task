export interface ReviewDistribution {
  data: Data
}

export interface Data {
  overall_score: OverallScore
  guest_type: GuestType
  guest_age: GuestAge
  guest_nationality: GuestNationality
}

export interface OverallScore {
  [rating: string]: number
  null: number
}

export interface GuestType {
  family: number
  friends: number
  business: number
  couple: number
  null: number
}

export interface GuestAge {
  [key: string]: number
  null: number
}

export interface GuestNationality {
  [key: string]: number
  null: number
}
