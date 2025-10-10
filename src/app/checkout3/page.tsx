


"use client"
import Link from "next/link";
import Footer from "../footer";
import Header from "../Header";
import Image from "next/image";

import { useState } from "react";


export default function CheckOut3(){

   

    return(

        <>
        <Header />
        <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40 pb-[142px]">

            <div className="flex gap-[37.8px] pl-[151px] pt-[106px] items-center justify-start text-center ">
                <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
                <p className="text-[55.6px] font-bold ">Check out </p>
            </div>
                
            <div className="bg-white rounded-[24.42px] mt-[48px] mx-[151px] pb-[90.07px] shadow-lg ">
                   <Image className="mx-[176px] pt-[71px] "
                          src="/checkout3.svg" alt="checkout1" width={785} height={64.92} />

                    <div className="flex flex-col px-[68px] mt-[60.08px] mb-[145.78px] ">
                        <p className="text-[21.02px] font-normal">STEP 3</p>
                        <h1 className="text-[47.78px] font-bold">Order Completed</h1>  
                            
                    </div >
                
                    <div className=" flex flex-col justify-center items-center text-center px-[68px]">

                        <Image className=" "
                          src="/Completed_order.svg" alt="checkout1" width={201.35} height={219} />
                        <p className="mt-[53px] text-[37px] text-[rgba(51,48,46,1)] ">Thank you for your purchase. <br></br>
                           You can view your order in ‘My Orders’ section.</p>
                        <button className="block mx-auto mt-[88px] rounded-[17px] bg-[rgba(66,48,41,1)] text-white text-[42.63px] px-[64.21px] py-[34.24px] font-bold ">Continue Shopping</button>
                    </div>
            </div>

         </div>

        <Footer />
        </>
    );
}