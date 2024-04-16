import Image from 'next/image'
import Link from 'next/link'



const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="gap-8">
                <h2 className="text-3xl md:text-5xl font-extrabold
                leading-6">
                    Rent with Ease<br /> <span className="text-blue-500">
                        Drive with Confidence </span>
                </h2>
                <p className=" text-md font-light my-8">
                    SwiftWheels makes renting a vehicle simple and stress-free. Browse our diverse fleet of cars and start your journey today. Whether it's a weekend getaway or daily commute, we've got you covered.

                </p>
                <Link href={'/'} className="px-8 p-4
                rounded-full bg-blue-500 text-white
                hover:bg-transparent text-lg
                hover:text-blue-500 hover:font-bold">
                    Get Started
                </Link>
            </div>
            <div className="relative">
                <Image alt='hero image of a blue BMW car'
                    src='/hero-img.png' fill className='w-full object-contain align-middle' />
            </div>
        </div>
    )
}

export default Hero