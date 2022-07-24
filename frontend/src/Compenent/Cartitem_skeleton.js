import React from "react";
import '../Style/Cartitem_skeleton.css'

export default function Cartitem_skeleton() {
    return (
        <div className="cartitem">
            <div className="cartitem-image skeleton">

            </div>
            <div className="cartitem-container">
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