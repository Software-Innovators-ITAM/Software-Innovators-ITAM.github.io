"use client"
import CoffeCard, { CoffeCardProps } from "@/components/CoffeCard/CoffeCard";
import { ArrowDownCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { ReactElement, useState } from "react";
import CoffeImage from '../../../public/images/coffee-cup.png'
import { Box, Grid } from "@mui/material";

let warmDrinks: CoffeCardProps[] = [
  {
    name: 'Americano Chico',
    imgSrc: CoffeImage.src,
    price: 20.5
  },
  {
    name: 'Americano Mediano',
    imgSrc: CoffeImage.src,
    price: 25
  },
  {
    name: 'Americano Grande',
    imgSrc: CoffeImage.src,
    price: 30.2
  },
  {
    name: 'Capuchino Chico',
    imgSrc: CoffeImage.src,
    price: 23.0
  },
  {
    name: 'Capuchino Mediano',
    imgSrc: CoffeImage.src,
    price: 25.2
  },
  {
    name: 'Capuchino Grande',
    imgSrc: CoffeImage.src,
    price: 32.5
  },
  {
    name: 'Latte Chico',
    imgSrc: CoffeImage.src,
    price: 22.5
  },
  {
    name: 'Latte Mediano',
    imgSrc: CoffeImage.src,
    price: 22.5
  },
  {
    name: 'Latte Grande',
    imgSrc: CoffeImage.src,
    price: 22.5
  },
]

let coldDrinks: CoffeCardProps[] = [
  {
    name: 'Cold brew Chico',
    imgSrc: CoffeImage.src,
    price: 25.5
  },
  {
    name: 'Cold brew Mediano',
    imgSrc: CoffeImage.src,
    price: 29.5
  },
  {
    name: 'Cold brew Grande',
    imgSrc: CoffeImage.src,
    price: 36.5
  },
]

let frappeDrinks: CoffeCardProps[] = [
  {
    name: 'Mokachino Frappé',
    imgSrc: CoffeImage.src,
    price: 45.5
  },
  {
    name: 'Frappé de temporada',
    imgSrc: CoffeImage.src,
    price: 50.00
  },
]

export default function ShowProducts() {
  return (
    <>
      {/* Warm Drinks */}
      <div className="grid grid-cols-12 mb-4">
        <div className="col-span-5 sm:col-span-4 lg:col-span-2">
          <span className="text-lg font-bold">Bebidas Calientes</span>
        </div>
        <div className="col-span-7 sm:col-span-8 lg:col-span-10 flex items-center">
          <hr className="min-w-full text-gray" />
        </div>
      </div>
      <Box sx={{ width: '100%' }} >
        <Grid
          container
          spacing={1}
          sx={{ width: 'inherit', margin: 0 }}
        >
          {warmDrinks.map((drink, index) => (
            <Grid xs={12} sm={4} lg={2} key={index} className="mb-4 md:mb-8 lg:pr-4">
              <CoffeCard
                name={drink.name}
                imgSrc={drink.imgSrc}
                price={drink.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Cold Drinks */}
      <div className="grid grid-cols-12 mb-4">
        <div className="col-span-5 sm:col-span-4 lg:col-span-2">
          <span className="text-lg font-bold">Bebidas Frías</span>
        </div>
        <div className="col-span-7 sm:col-span-8 lg:col-span-10 flex items-center">
          <hr className="min-w-full text-gray" />
        </div>
      </div>
      <Box sx={{ width: '100%' }} >
        <Grid
          container
          spacing={1}
          sx={{ width: 'inherit', margin: 0 }}
        >
          {coldDrinks.map((drink, index) => (
            <Grid xs={12} sm={4} lg={2} key={index} className="mb-4 md:mb-8 lg:pr-4">
              <CoffeCard
                name={drink.name}
                imgSrc={drink.imgSrc}
                price={drink.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Frappés Drinks */}
      <div className="grid grid-cols-12 mb-4">
        <div className="col-span-5 sm:col-span-4 lg:col-span-2">
          <span className="text-lg font-bold">Frappés</span>
        </div>
        <div className="col-span-7 sm:col-span-8 lg:col-span-10 flex items-center">
          <hr className="min-w-full text-gray" />
        </div>
      </div>
      <Box sx={{ width: '100%' }} >
        <Grid
          container
          spacing={1}
          sx={{ width: 'inherit', margin: 0 }}
        >
          {frappeDrinks.map((drink, index) => (
            <Grid xs={12} sm={4} lg={2} key={index} className="mb-4 md:mb-8 lg:pr-4">
              <CoffeCard
                name={drink.name}
                imgSrc={drink.imgSrc}
                price={drink.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}