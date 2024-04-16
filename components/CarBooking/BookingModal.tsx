import React from 'react'
import CarCard from '../home/CarCard'
import BookingForm from './BookingForm'

const BookingModal = ({ car }: any) => {
    return (
        <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-semibold my-4 text-xl text-center text-gray-500">Car Booking</h3>

            <div className="grid md:gap-x-4 grid-cols-1 md:grid-cols-2">
                <div className="">
                    <CarCard showButton={false} car={car} />
                </div>
                <div>
                    <BookingForm car={car} />
                </div>
            </div>

        </div>
    )
}

export default BookingModal