"use client"
import Image from "next/image";
import { useState } from "react";
import Header from "../Header";
import Footer from "../footer";

export default function CartItems(){

    const [quantity, setQuantity] = useState(1)

    return(
        <>
        <Header/>
        <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40">
        <div className="flex gap-[37.8px] pl-[128.3px] pt-[83.3px] items-center justify-start text-center ">
            <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
            <p className="text-[55.6px]">Your Cart</p>
        </div>
             
       <div className="flex items-center w-full justify-between ml-[130px] mr-[140px] bg-white border border-[#D1C4F7] rounded-2xl p-4 shadow-sm">

            <div className="flex-shrink-0">
                <Image
                src="/image 6.svg" 
                alt="Sportwear Set"
                width={120}
                height={120}
                className="rounded-xl object-cover"
                />
            </div>

    
            <div className="flex-1 ml-4">
                <h2 className="font-semibold text-lg text-gray-900">Sportwear Set</h2>
                <p className="text-2xl font-bold text-gray-900 mt-1">$ 80.00</p>
                <p className="text-gray-500 mt-1">
                Size: <span className="font-medium text-gray-600">L</span> |
                Color: <span className="font-medium text-gray-600">Cream</span>
                </p>
            </div>

      
                <div className="flex flex-col items-center gap-3">
                
                    <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                    
                    <input type="checkbox" className="bg-[rgb(247,247,247)] border-none outline-none" />
                    </div>

                    
                    <div className="flex items-center justify-between border border-gray-300 rounded-full px-3 py-1 w-[90px]">
                    <button
                        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                        className="text-gray-600 text-lg"
                    >
                        –
                    </button>
                    <span className="text-gray-800 text-lg">{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-gray-600 text-lg"
                    >
                        +
                    </button>
                    </div>
                </div>

                </div>

        <div className="bg-white rounded-t-[46.68px] ml-[130px] mr-[143px] pl-[71.58px] pr-[68.46px] pt-[43.57px] pb-[81px] ">
             <div  className="flex justify-between text-[43.57px]">
                <span className="text-gray-400">Product price</span>
                <span>$110</span>
             </div>

             <div className="w-full h-[3.11px] bg-gray-400 mt-[74.69px] mb-[62.24px] "></div>

             <div  className="flex justify-between text-[43.57px]">
                <span className="text-gray-400">Shipping</span>
                <span>Freeship</span>
             </div>

             <div className="w-full h-[3.11px] bg-gray-400 mt-[74.69px] mb-[62.24px] "></div>

             <div  className="flex justify-between text-[43.57px]">
                <span className="text-gray-400">Subtotal</span>
                <span className="font-bold">$110</span>
             </div>

             <button className=" ml-[295px] mt-[96.45px] rounded-[17px] bg-[rgba(66,48,41,1)] text-white text-[42.63px] px-[64.21px] py-[34.24px] font-bold ">Proceed to checkout</button>
        </div>
        </div>
          <Footer />
        </>
    );
}


