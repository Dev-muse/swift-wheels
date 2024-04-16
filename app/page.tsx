
'use client';

import { useEffect, useState } from 'react';

import Hero from '@/components/home/Hero';
import SearchInput from '@/components/home/SearchInput';
import CarFilterOptions from '@/components/home/CarFilterOptions';
import CarsList from '@/components/home/CarsList';

import { getCarList } from '@/services'
import ToastMsg from '../components/home/ToastMsg';
import { BookingContext } from '../context/BookingContext';



export default function Home() {
  const [carsList, setCarsList] = useState<any>([])
  const [carsOrgList, setCarsOrgList] = useState<any>([])

  const [showToastMsg, setShowToastMsg] = useState<any>(false)





  useEffect(() => {
    const getCars = async () => {
      const result: any = await getCarList();
      setCarsList(result?.carLists)
      setCarsOrgList(result?.carLists)
    }
    getCars()

  }, [])


  useEffect(() => {
    if (showToastMsg) {
      setTimeout(() => {
        setShowToastMsg(false)
      }, 5000);
    }


  }, [showToastMsg])


  const filteredCarList = (brand: string) => {
    const filterCars = carsOrgList.filter((item: any) => item.carBrand === brand)

    setCarsList(filterCars)
  }

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) => order == -1 ? a.price - b.price : b.price - a.price)
    setCarsList(sortedData);
  }




  return (
    <main className='p-5 sm:px-10 md:px-20'>
      <BookingContext.Provider value={{ showToastMsg, setShowToastMsg }} >
        <Hero />
        <SearchInput />
        <CarFilterOptions carsList={carsOrgList}
          orderCarList={(value: string) => orderCarList(value)}
          setBrand={(value: string) => filteredCarList(value)} />
        <CarsList cars={carsList} />
        {showToastMsg && <ToastMsg message={'Booking created successfully'} />}
      </BookingContext.Provider>
    </main>
  );
}
