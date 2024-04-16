'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image';
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";




const CarCard = ({ car, showButton = true }: any) => {
    const [carData, setCarData] = useState(car)

    useEffect(
        () => {
            if (car) {
                setCarData(car)
            }
        }, [car]
    )


    return (
        <div className='group bg-gray-50 p-2 sm:p-4
        hover:bg-white hover:border-[1px] cursor-pointer duration-300 rounded-lg border-blue-500'
        >
            <h2 className="font-medium text-3xl mb-2">{carData.name}</h2>
            <h2 className="text-3xl font-bold mb-2">
                <span className="text-sm font-light mb-2">$</span>
                {carData.price}
                <span className="text-sm font-light mb-2">/day</span>
            </h2>
            <Image src={carData.image?.url}
                alt={carData.name} width={220} height={200}
                className=' mx-auto w-[250px] h-[150px] object-contain
                mb-3' />

            <div className={`flex justify-around ${showButton ? 'group-hover:hidden' : ''}`}>
                <div className="text-center text-gray-500">
                    <GiSteeringWheel className="w-full text-xl mb-2" />
                    <h2 className="line-clamp-5 text-sm font-light">{carData.carType}</h2>
                </div>
                <div className="text-center text-gray-500">
                    <MdAirlineSeatReclineNormal className="w-full text-xl mb-2" />
                    <h2 className="line-clamp-5 text-sm font-light">{carData.seat} Seat</h2>
                </div>
                <div className="text-center text-gray-500">
                    <FaGasPump className="w-full text-2xl mb-2" />
                    <h2 className="line-clamp-5 text-sm font-light">{carData.carAvg} MPG</h2>
                </div>

            </div>
            {showButton && (<button className="hidden w-full bg-gradient-to-r from-blue-400 via-blue-700 to-blue-700 group-hover:flex items-center justify-between px-5 p-2 rounded-lg text-white">
                <span className="bg-transparent">Rent Now</span>
                <span className="bg-blue-500 rounded-lg p-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </span>

            </button>)}

        </div>
    )
}

export default CarCard