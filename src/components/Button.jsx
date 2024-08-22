import React from "react"

export default function Button({paymentType,count}) {

    return (
        <div className="rounded-2xl px-4 py-1.5 text-white bg-blue-600">
            {paymentType}({count})
        </div>
    )
}