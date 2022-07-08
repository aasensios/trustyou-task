import Rating from '@mui/material/Rating'

export default function RatingStars({ value }: { value: number }) {
  return (
    <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
  )
}
