"use client"
import Image from "next/image";
import { useState } from "react";
import Header from "../Header";
import Footer from "../footer";

export default function CartItems(){

    const [quantity, setQuantity] = useState(1);

     const cartItems = [
            {id: 1, name: "Brown Dynamic", price: 39.99,  size: "L",  color: "white", image: "/image 6.svg"},
            {id: 2, name: "Long Sleeve Dress", price: 45.00, size: "M", color: "brown", image: "/image 7.svg" },
            {id: 3, name: "Bearly Awake Tee", price: 80.00, size: "XL", color: "black", image: "/image 8.svg"},
              
        ]

    return(
        <>
        <Header/>
        <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40">
        <div className="flex gap-[37.8px] pl-[128.3px] pt-[83.3px] items-center justify-start text-center ">
            <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
            <p className="text-[55.6px]">Your Cart</p>
        </div>
               
        <div className="flex flex-col items-center pl-[130px] pr-[143px]  gap-[74.11px] mb-[65.37px] mt-[39px]  ">
            
            { cartItems.map((items)=>(
                <div key={items.id} className="flex items-center justify-between bg-white gap-[49.38px]  rounded-[75.29px] p-6  w-full  shadow-sm ">
                      <div className="">
                            <Image src={items.image}  alt="Sportwear Set" width={368.35} height={372.69} className="rounded-xl object-cover" />
                        </div>

                        <div className="flex flex-col justify-between">
                            <h2 className="font-bold text-[48.94px] text-black mb-[48.94px] ">{items.name}</h2>
                            <p className="text-[60.23px] font-bold text-black ">${items.price.toFixed(2)}</p>
                            <p className="text-gray-500 text-[37.65px]">
                                Size: <span className="font-medium text-gray-600">{items.size}</span> |
                                Color: <span className="font-medium text-gray-600">{items.color}</span>
                            </p>
                        </div>

                        <div className="flex flex-col items-end gap-[109.17px] mr-[61.97px] ">
                
                            <input type="checkbox" className=" w-[68.85px] h-[75.29px] accent-[rgba(80,138,123,1)] bg-[rgb(247,247,247)] rounded-[15.06px]  " />

                            
                    
                            <div className="flex items-center justify-between border-[3.76px] border-gray-300 text-[45.17px] rounded-[75.29px] px-3 py-1 ">
                            <button
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                className="text-gray-600  text-[45.17px]"
                            >
                                –
                            </button>
                            <span className="text-gray-800 text-lg text-[45.17px] mx-[48.48px]">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="text-gray-600 text-[45.17px]"
                            >
                                +
                            </button>
                            </div>
                        </div>

                </div>
            ))}
           
        </div>


        {/* ////////////////////////////////////////////////////////////////// */}

        <div className="bg-white rounded-t-[46.68px] ml-[130px] mr-[143px] pl-[71.58px] pr-[68.46px] pt-[43.57px] pb-[81px] shadow-sm ">
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

             <button className="block mx-auto mt-[96.45px] rounded-[17px] bg-[rgba(66,48,41,1)] text-white text-[42.63px] px-[64.21px] py-[34.24px] font-bold ">Proceed to checkout</button>
        </div>
        </div>
          <Footer />
        </>
    );
}


