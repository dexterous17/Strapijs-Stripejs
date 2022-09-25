import React from "react"
export default function Skeleton() {
    return (
        <div className="cartitem">
            <div className="cartitem-image skeleton">

            </div>
            <div className="cartitem-information-container">
                <div className="cartitem-information-1">
                    <div className="cartitem-name skeleton">

                    </div>
                    <div className="cartitem-price skeleton">

                    </div>
                </div>
                <div className="cartitem-information-2 skeleton">

                </div>
            </div>
        </div>
    )
}