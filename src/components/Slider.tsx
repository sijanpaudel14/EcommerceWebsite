"use client"
import React, { useEffect, useState } from 'react'
import { slides } from '@/data/slides_data'
import Link from 'next/link'
import Image from 'next/image'
import DotNavigation from './DotNavigation'

const Slider = () => {
    const [current, setCurrent] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [])

    return (
        <>
            <div className="h-[calc(100vh-80px)] overflow-hidden ">
                <div className="w-max h-full flex transition-all ease-in-out duration-1000 "
                    style={{ transform: `translateX(-${current * 100}vw)` }}
                >
                    {
                        slides.map((slide) => (
                            <div className={`${slide.bg} flex flex-col w-screen h-full gap-16 xl:flex-row relative`} key={slide.id}>
                                {/* TEXT CONTAINER */}
                                <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                                    <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.description}</h2>
                                    <h2 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.title}</h2>
                                    <Link href={slide.url}>
                                        <button className='rounded-md bg-black text-white py-3 px-4'>SHOP NOW</button>
                                    </Link>
                                </div>
                                {/* IMAGE CONTAINER */}
                                <div className=" h-1/2 xl:w-1/2 xl:h-full relative">
                                    <Image src={slide.img} alt='' layout='fill' sizes='100%' className='object-cover' />
                                </div>

                                {/* Dot Navigation */}
                                <DotNavigation current={current} setCurrent={setCurrent} slides={slides} />

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Slider