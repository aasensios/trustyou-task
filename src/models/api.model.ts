export interface Nullable {
  null: number
}

export interface ReviewDistribution {
  data: Data
}

export interface Data {
  overall_score: OverallScore
  guest_type: GuestType
  guest_age: GuestAge
  guest_nationality: GuestNationality
}

export interface OverallScore extends Nullable {
  [rating: string]: number
}

export interface GuestType extends Nullable {
  family: number
  friends: number
  business: number
  couple: number
}

export interface GuestAge extends Nullable {
  [key: string]: number
}

export interface GuestNationality extends Nullable {
  [key: string]: number
}
