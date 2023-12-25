import React from 'react'
import { TabsDemo } from './tabs'

const Page = (
    { searchParams: { publicId }, }: {
        searchParams: { publicId: string }
    }) => {

    return (
        <>
            <div className='py-4 px-5'>
                <h2 className="mb-2 px-4 text-3xl font-semibold tracking-tight">
                    Edit Pictures
                </h2>
            </div>
            <TabsDemo
             src={publicId} />
        </>
    )
}

export default Page