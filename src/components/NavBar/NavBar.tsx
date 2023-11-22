import { PencilSquareIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function NavBar() {
    return (
        <nav className='bg-green text-white h-10 min-w-screen'>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div className='flex justify-start'>
                    <span className='ml-2 py-2'>ITAM CoffeeShop</span>
                </div>
                <div className='flex justify-end py-1 md:col-span-2'>
                    <div className="grid grid-cols-3">
                        <a href="#">
                            <ShoppingBagIcon className="w-6 h-6 mr-2" />
                            <span>Carrito</span>
                        </a>
                        <PencilSquareIcon className="w-6 h-6 mr-2" />
                        <UserIcon className="w-6 h-6 mr-2" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
