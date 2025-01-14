import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
    return (
        <>
            <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
                <Link href='/' className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className="relative w-full h-80">

                        <Image src="https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=''
                            fill
                            sizes='25vw'
                            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'

                        />
                        <Image src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=''
                            fill
                            sizes='25vw'
                            className='absolute object-cover rounded-md'
                        />
                    </div>
                    <div className="flex justify-between ">
                        <span className='font-medium'>Product Name</span>
                        <span className='font-semibold'>$49</span>
                    </div>
                    <div className=" text-sm text-gray-500">My descriptions</div>
                    <button className='w-max rounded-2xl ring-1 ring-sijan text-sijan py-2 px-4 text-xs hover:bg-sijan hover:text-white '>Add to carts</button>


                </Link>
                <Link href='/' className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className="relative w-full h-80">

                        <Image src="https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=''
                            fill
                            sizes='25vw'
                            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'

                        />
                        <Image src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=''
                            fill
                            sizes='25vw'
                            className='absolute object-cover rounded-md'
                        />
                    </div>
                    <div className="flex justify-between ">
                        <span className='font-medium'>Product Name</span>
                        <span className='font-semibold'>$49</span>
                    </div>
                    <div className=" text-sm text-gray-500">My descriptions</div>
                    <button className='w-max rounded-2xl ring-1 ring-sijan text-sijan py-2 px-4 text-xs hover:bg-sijan hover:text-white '>Add to carts</button>


                </Link>
                <Link href='/' className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className="relative w-full h-80">

                        <Image src="https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=''
                            fill
                            sizes='25vw'
                            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'

                        />
                        <Image src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=''
                            fill
                            sizes='25vw'
                            className='absolute object-cover rounded-md'
                        />
                    </div>
                    <div className="flex justify-between ">
                        <span className='font-medium'>Product Name</span>
                        <span className='font-semibold'>$49</span>
                    </div>
                    <div className=" text-sm text-gray-500">My descriptions</div>
                    <button className='w-max rounded-2xl ring-1 ring-sijan text-sijan py-2 px-4 text-xs hover:bg-sijan hover:text-white '>Add to carts</button>


                </Link>
                <Link href='/' className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className="relative w-full h-80">

                        <Image src="https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=''
                            fill
                            sizes='25vw'
                            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'

                        />
                        <Image src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=''
                            fill
                            sizes='25vw'
                            className='absolute object-cover rounded-md'
                        />
                    </div>
                    <div className="flex justify-between ">
                        <span className='font-medium'>Product Name</span>
                        <span className='font-semibold'>$49</span>
                    </div>
                    <div className=" text-sm text-gray-500">My descriptions</div>
                    <button className='w-max rounded-2xl ring-1 ring-sijan text-sijan py-2 px-4 text-xs hover:bg-sijan hover:text-white '>Add to carts</button>


                </Link>


            </div>

        </>
    )
}

export default ProductList