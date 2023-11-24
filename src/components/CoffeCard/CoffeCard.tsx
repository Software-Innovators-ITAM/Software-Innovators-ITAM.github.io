import { Card, CardContent, CardMedia } from '@mui/material'
import CoffeImage from '../../../public/images/coffee-cup.png'
import Image from 'next/image'

export default function CoffeCard() {
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component='img'
        sx={{ height: 140 }}
        image={CoffeImage.src}
        alt='Vaso de café'
        title='Vaso de café'
      />
      <CardContent>

      </CardContent>
    </Card>
  )
}
