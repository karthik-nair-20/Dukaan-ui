import React from "react"
import RevnueComponent from "./Revenuecomponent"

export default function Overview() {

    return (
        <div className="grid gap-5">
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-medium'>Overview</div>
                <div className='flex items-center border border-gray-400 pl-3.5 pr-3.5 h-9 rounded'>
                    This Month
                    <div className='pl-2.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-Linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <RevnueComponent
                    paymentType="Next payout"
                    count="23"
                    price="2,312.23"
                />
                <RevnueComponent
                    paymentType="Amount Pending"
                    count="15"
                    price="92,321"
                />
                <RevnueComponent
                    paymentType="Amount Processed"
                    price="23,92,312.19"
                />
            </div>
        </div>
    )
}