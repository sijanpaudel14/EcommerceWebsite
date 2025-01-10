"use client"
import React from 'react'
import Image from 'next/image'

const CartModal = () => {

  const cartItems = true
  return (
    <div className='absolute w-max p-4 rounded-md flex flex-col gap-6 shadow-sm  right-0 top-12 z-20'>
      {!cartItems ? (

        <div className="">Cart is Empty</div>
      ) : (
        <>


          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM 1 */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-sm"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className='font-semibold'>Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm ">$49</div>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500 ">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className='text-gray-500'>Qty. 2</span>
                  <span className='text-blue-500'>Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM 1 */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-sm"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className='font-semibold'>Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>


                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500 ">available</div>

                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className='text-gray-500'>Qty. 2</span>
                  <span className='text-blue-500'>Remove</span>
                </div>
              </div>
            </div>
          </div>


          {/* TOTAL SECTION*/}
          <div className="">
            {/* TOP */}
            <div className="flex items-center justify-between font-semibold p-1">
              <span className=''>Subtotal</span>
              <span className="">$40.5</span>
            </div>
            {/* description */}
            <p className="text-sm text-gray-500 mt-2 mb-4">Shipping and taxes are calculated at checkout.</p>
          </div>
          {/* BUTTONS */}
          <div className="flex justify-between text-sm">
            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
            <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
          </div>
        </>
      )}
    </div>

  )
}

export default CartModal