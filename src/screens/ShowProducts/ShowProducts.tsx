"use client"
import CoffeCard from "@/components/CoffeCard/CoffeCard";
import { ArrowDownCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
//import '../css/ShowProducts.css'

export default function ShowProducts() {
	const [showWarmDrinks, setShowWarmDrinks] = useState(true)

	const handleWarmDrinksClick = () => {
		setShowWarmDrinks(!showWarmDrinks)
	}

	const warmDrinksArrowDisplay = () => {
		if (showWarmDrinks) {
			return (
				<ArrowDownCircleIcon className="w-6 h-6 col-span-2" />
			)
		}
		else {
			return (
				<ArrowRightCircleIcon className="w-6 h-6 col-span-2" />
			)
		}
	}

	return (
		<>
			<div className="grid grid-cols-12">
				<div className="col-span-5 sm:col-span-3 lg:col-span-2">
					<a
						className="grid grid-cols-12 text-gray"
						onClick={handleWarmDrinksClick}
					>
						{warmDrinksArrowDisplay()}
						<div className="col-span-10">
							<span className="text-[0.8rem]">Bebidas Calientes</span>
						</div>
					</a>
				</div>
				<div className="col-span-7 sm:col-span-9 lg:col-span-10 flex items-center">
					<hr className="min-w-full text-gray" />
				</div>
			</div>
			<div

			>
				<CoffeCard />
				<CoffeCard />
				<CoffeCard />
			</div>
		</>
	)
}