import React from "react"
import Button from "./Button"

export default function Transaction() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <p className='text-xl font-medium'>Transactions | This Month</p>
            </div>
            <div className="flex gap-4 text-sm ">
                <Button paymentType="Payouts" count="22" />
                <Button paymentType="Refunds" count="6" />
            </div>
        </div>
    )
}