import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "../Compenent/Cartitem";
import Cartitem_skeleton from "../Compenent/Cartitem_skeleton";

export default function Cart() {

    const Cartitems = useSelector(state => state.itemId)

    return (
        <>
        <Cartitem_skeleton/>
            {
                Cartitems.map((item,_) => {
                    return (<Cartitem key={_} Product_Id={item}/>)
                })
            }
        </>
    )
}