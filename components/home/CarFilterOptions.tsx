import { useState, useEffect } from 'react'

const CarFilterOptions = ({ carsList, setBrand, orderCarList }: any) => {

    const [brandList, setBrandList] = useState<any>([]);

    const brandSet = new Set();

    useEffect(() => {
        if (carsList) {
            filterCarsList()
        }

    }, [carsList])



    const filterCarsList = () => {

        carsList.forEach((car: any) => {
            brandSet.add(car.carBrand)
        })

        setBrandList(Array.from(brandSet))
    }

    return (
        <div className="mt-10 flex items-center justify-between">
            <div  >
                <h2 className='text-2xl font-bold'>Our Catalog</h2>
                <p>Explore our range of cars on offer.</p>
            </div>
            <div className="flex space-x-4 font-medium">
                <select className="select select-bordered w-full max-w-xs"
                    onChange={(e) => orderCarList(e.target.value)}>
                    <option disabled defaultValue='Price'>Price</option>
                    <option value={-1} >Lowest</option>
                    <option value={1}>Highest</option>
                </select>
                <select className="hidden md:block select select-bordered w-full max-w-xs"
                    onChange={(e) => setBrand(e.target.value)}>
                    <option disabled selected defaultValue='Manufacturer'>Manufacturer</option>
                    {/* car brands from server */}
                    {
                        brandList && brandList?.map((brand: string, index: number) => {
                            return (
                                <option key={index} value={brand} > {brand}</option>
                            )
                        })

                    }


                </select>
            </div>
        </div >
    )
}

export default CarFilterOptions