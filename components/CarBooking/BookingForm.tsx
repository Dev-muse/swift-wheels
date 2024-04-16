'use client';

import { useContext, useEffect, useState } from 'react'
import { createBooking, getStoreLocations } from '@/services/index'
import { BookingContext } from '../../context/BookingContext';




const BookingForm = ({ car }: any) => {
    const [storeLocation, setStoreLocation] = useState<any>([]);
    const [formValue, setFormValue] = useState({
        location: '',
        pickupDate: '',
        dropoffDate: '',
        pickupTime: '',
        dropoffTime: '',
        contactNumber: '',
        userName: 'Rahman Muse',
        carId: ''
    })

    const { showToastMsg, setShowToastMsg } = useContext(BookingContext)
    const getStores = async () => {
        const result: any = await getStoreLocations()

        setStoreLocation(result?.storesLocations)
    }

    useEffect(() => {
        getStores()
        console.log("storeLocation", storeLocation)

    }, [])

    useEffect(() => {
        if (car) {
            setFormValue({
                ...formValue, carId: car.id
            })
        }


    }, [car])


    const handleChange = (event: any) => {
        setFormValue({
            ...formValue, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async () => {
        console.log(formValue)
        const response = await createBooking(formValue)
        if (response) {
            setShowToastMsg(true)
        }
    }


    return (
        <div className="">
            <div className="flex flex-col w-full mb-5 ">
                <label htmlFor="pickup-location" className='text-gray-400'>Pickup Location</label>
                <select id='pickup-location' onChange={handleChange} name='location' className="input input-bordered w-full max-w-lg">
                    <option value="pickup location" selected disabled>Pickup Location?</option>

                    {
                        storeLocation.map((store: any, index: number) => (

                            <option key={store.address} value={store.address}>{store.address}</option>
                        ))
                    }
                </select>
            </div>

            <div className="flex flex-col md:flex-row gap-5 mb-5">
                <div className="flex flex-col w-full  ">
                    <label htmlFor="pickup-date" className='text-gray-400'>Pickup Date</label>
                    <input onChange={handleChange} id='pickup-date' name='pickupDate' type="date" className="input input-bordered w-full max-w-lg" />
                </div>

                <div className="flex flex-col w-full  ">
                    <label htmlFor="dropoff-date" className='text-gray-400'>Dropoff Date</label>
                    <input onChange={handleChange} id='dropoff-date' name='dropoffDate' type="date" className="input input-bordered w-full max-w-lg" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5  mb-5">
                <div className="flex flex-col w-full  ">
                    <label htmlFor="pickup-time" className='text-gray-400'>Pickup Time</label>
                    <input onChange={handleChange} id='pickup-time' name='pickupTime' type="time" className="input input-bordered w-full max-w-lg" />
                </div>

                <div className="flex flex-col w-full  ">
                    <label htmlFor="drop-time" className='text-gray-400'>Dropoff time</label>
                    <input onChange={handleChange} id='drop-time' name='dropoffTime' type="time" className="input input-bordered w-full max-w-lg" />
                </div>
            </div>
            <div className="flex flex-col w-full mb-5 ">
                <label htmlFor="contact-num" className='text-gray-400'>Contact Number</label>
                <input onChange={handleChange} id='contact-num' name='contactNumber' type='text' placeholder='Enter number' className="input input-bordered w-full max-w-lg" />

            </div>
            <div className="modal-action">
                <form method="dialog" className='space-x-4'>
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                    <button onClick={handleSubmit} className="btn bg-blue-500 hover:bg-blue-700 transition:all 
                    duration-300 text-white px-5 p-2">Save</button>
                </form>
            </div>
        </div>
    )
}

export default BookingForm