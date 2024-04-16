'use client';

import CarCard from './CarCard';
import { useState } from 'react';

import BookingModal from '@/components/CarBooking/BookingModal';

interface CarsListProps {
    cars: []
}


const CarsList = (props: any) => {

    const [selectedCar, setSelectedCar] = useState<any>({})

    const selectCar = (car: any) => {
        (window as any).my_modal_4.showModal();
        setSelectedCar(car);
    }

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                props.cars?.map((car: any) => (
                    <div key={car.name} onClick={() => selectCar(car)}>
                        <CarCard car={car} />
                    </div>
                ))
            }
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_4" className="modal">
                <BookingModal car={selectedCar} />
            </dialog>
        </div>
    )
}

export default CarsList