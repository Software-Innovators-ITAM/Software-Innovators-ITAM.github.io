import Image from 'next/image'
import CoffeImage from '../../../public/images/coffee-cup.png'

export default function CoffeCard() {
    return (
        <div className="rounded-lg bg-white py-2 px-3 h-20">
            <div className="rounded-md">
                <Image src={CoffeImage} alt="Vaso de Café" />
            </div>
        </div>
    )
}
