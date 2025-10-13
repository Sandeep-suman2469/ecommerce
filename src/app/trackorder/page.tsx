
"use client";
import Link from "next/link";
import Footer from "../footer";
import Header from "../Header";
import Image from "next/image";

import { FaTruck } from "react-icons/fa";

import { useState } from "react";


export default function TrackOrder(){
     
    const trackingData = [
    { id: 1, event: "Sender is preparing to ship your order", date: "15 May" },
    { id: 2, event: "Sender has shipped your parcel", date: "16 May" },
    { id: 3, event: "Parcel is in transit", date: "17 May" },
    { id: 4, event: "Parcel is received at delivery Branch", date: "17 May" },
    { id: 5, event: "Parcel is out for delivery", date: "18 May" },
    { id: 6, event: "Parcel is successfully delivered", date: "20 May" },
  ];
  
    return(
         <>
            <Header />
            <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40 pb-[92px]">

            
                <div className="flex gap-[37.8px] ml-[94px] pt-[47px] items-center justify-start text-center ">
                    <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
                    <p className="text-[55.6px] font-bold "> Orders #1524 </p>
                </div>

                <div className="flex justify-between text-center items-center text-white ml-[97px] mr-[91px] mt-[46px] pl-[56px] pr-[57px] pt-[50px] pb-[37px] rounded-[17px] gap-[132.89px]  bg-[rgba(164,96,73,1)] ">
                    <div className="flex flex-1 flex-col gap-[30px] max-w-[804px] ">
                        
                        <div className="flex justify-between">
                            <p>Order Number</p>
                            <p>#1524</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Tracking Number</p>
                            <p>IK287368838</p>
                        </div>
                        
                    </div>
                    <Image  src="/deliveryIcon.svg" alt="profile" width={146.11} height={94} />
                </div>

                <div className=" mx-auto  text-[27px] mt-[55px] ml-[97px] mr-[91px] px-[52px] py-[43px] bg-white shadow rounded-xl">
                    
                   
                    {trackingData.map((item, index) => (
                         <div
                            key={item.id}
                            className="relative pl-8 pb-8 last:pb-0 border-l-3 border-dotted border-[#C56E33]"
                            >
                          
                            <span className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-2 border-[#C56E33] rounded-full flex items-center justify-center">
                                <span className="w-2 h-2 bg-[#C56E33] rounded-full"></span>
                            </span>

                    
                            <div className="flex justify-between items-start">
                                <p className="text-gray-800 text-sm md:text-base">{item.event}</p>
                                <span className="text-gray-400 text-sm md:text-base">
                                {item.date}
                                </span>
                            </div>
                         </div>
                        ))}
                        

               
                </div>
            
                   
                 <div className="flex justify-between mt-[54px] mr-[90.75px] ml-[94px] ">
                     <div className="flex  text-center items-center rounded-[17px] py-[28px] pl-[36px] pr-[59px]  bg-white shadow-lg ">
                         <Image  src="/rating.svg" alt="profile" width={118} height={115} />
                         <div className="flex  flex-col  max-w-[804px] ">
                             <h1 className="font-semibold text-[27px]">Don't Forget to rate</h1>
                             <p>Rate product to get 5 points for collect</p>
                         </div>
                     </div>
                       <button className="flex max-h-[65px] text-white text-[32.5px] border-1 border-gray-300 rounded-[17px] px-[68.96px] py-[9.29px] bg-[rgba(66,48,41,1)] ">Continue Shopping</button>
                 </div>

               

             </div>

            
             <Footer />
             </>
     );
 }



