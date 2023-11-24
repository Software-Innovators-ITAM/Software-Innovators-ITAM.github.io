import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import CoffeImage from '../../../public/images/coffee-cup.png'

export interface CoffeCardProps {
  imgSrc: string
  name: string
  price: number
}

export default function CoffeCard(props: CoffeCardProps) {
  return (
    <Card sx={{ maxWidth: 'auto' }} >
      <CardMedia
        component='img'
        sx={{ height: 140, objectFit: 'contain' }}
        image={props.imgSrc}
        alt={props.name}
        className='bg-cream'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.name}
        </Typography>
        <Typography variant='body2'>
          Precio: {props.price}
        </Typography>
      </CardContent>
    </Card>
  )
}
