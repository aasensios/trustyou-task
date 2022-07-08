import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'

export default function RatingStars({ value }: { value: number }) {
  console.log(value)

  return (
    <Rating
      name="half-rating-read"
      value={value}
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      readOnly
    />
  )
}
