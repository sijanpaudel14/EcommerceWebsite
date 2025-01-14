import React from 'react'

const Filter = () => {
    return (
        <>
            <div className="mt-12 flex justify-between">
                <div className="flex gap-6 flex-wrap">
                    <select
                        name="type"
                        id=""
                        className='py-2 px-4 rounded-2xl font-medium text-xs bg-[#ebeded]'
                    >
                        <option>Type</option>
                        <option value="physical">Physical</option>
                        <option value="digital">Digital</option>
                    </select>

                    <select
                        name="size"
                        id=""
                        className='py-2 px-4 rounded-2xl font-medium text-xs bg-[#ebeded]'
                    >
                        <option>Size</option>
                        <option value="physical">Size</option>
                    </select>

                    <input
                        type="text"
                        name='min'
                        placeholder='min price'
                        className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
                    />
                    <input
                        type="text"
                        name='max'
                        placeholder='max price'
                        className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
                    />

                    <select
                        name="color"
                        id=""
                        className='py-2 px-4 rounded-2xl font-medium text-xs bg-[#ebeded]'
                    >
                        <option>Color</option>
                        <option value="physical">Test</option>
                    </select>
                    <select
                        name="ribbon"
                        id=""
                        className='py-2 px-4 rounded-2xl font-medium text-xs bg-[#ebeded]'
                    >
                        <option>Category</option>
                        <option value="physical">New Arrival</option>
                        <option value="digital">Popular</option>
                    </select>
                    <select
                        name=""
                        id=""
                        className='py-2 px-4 rounded-2xl font-medium text-xs bg-[#ebeded]'
                    >
                        <option>All Filters</option>
                    </select>
                </div>
                <div className="">
                    <select
                        name="type"
                        id=""
                        className='py-2 px-4 rounded-2xl font-medium text-xs bg-[#ebeded] ring-1 ring-gray-400'
                    >
                        <option>Sort By</option>
                        <option value="asc price">Price (low to high)</option>
                        <option value="desc price">Price (high to low)</option>
                        <option value="asc lastUpdated">Newest</option>
                        <option value="desc lastUpdated">Oldest</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filter