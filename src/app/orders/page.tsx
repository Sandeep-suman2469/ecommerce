"use client"
import Image from "next/image";

import { useState } from "react";
import Header from "../Header";
import Footer from "../footer";

export default function Orders(){

    const [filter , setFilter] = useState("");
    
    const ordersData = [
  {
    id: 1, image: "/image 6.svg", orderNumber: "1524", trackingNumber: "IK24464463", quantity: 2, subtotal: 110, date: "24/09/2025",
    status: "Pending",
  },
  {
    id: 2, image: "/image 7.svg", orderNumber: "1525", trackingNumber: "IK24467773", quantity: 3, subtotal: 70, date: "22/09/2025",
    status: "Delivered",
  },
  {
    id: 3, image: "/image 8.svg", orderNumber: "1526", trackingNumber: "IK24469998", quantity: 4, subtotal: 150, date: "20/09/2025",
    status: "Delivered",
  },
  {
    id: 4, image: "/image 9.svg", orderNumber: "1527", trackingNumber: "IK24468893", quantity: 1, subtotal: 120, date: "25/09/2025",
    status: "Pending",
  },
   {
    id: 5, image: "/image 10.svg", orderNumber: "1528", trackingNumber: "IK24468881", quantity: 2, subtotal: 120, date: "19/09/2025",
    status: "Delivered",
  },
   {
    id: 6, image: "/image 6.svg", orderNumber: "1529", trackingNumber: "IK24468873", quantity: 1, subtotal: 120, date: "25/09/2025",
    status: "cancelled",
  },
   {
    id: 7, image: "/image 7.svg", orderNumber: "1530", trackingNumber: "IK24468884", quantity: 2, subtotal: 120, date: "18/09/2025",
    status: "Pending",
  },
   {
    id: 8, image: "/image 8.svg", orderNumber: "1531", trackingNumber: "IK24468885", quantity: 1, subtotal: 120, date: "18/09/2025",
    status: "cancelled",
  },
];

    
    const filteredOrders =
      filter === "" ? ordersData : ordersData.filter((o) => o.status.toLowerCase() === filter.toLowerCase());


    return(
        
           <>
                 <Header />
                 <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40 pb-[193px]">
         
                    
                     <div className="flex gap-[37.8px] ml-[94px] pt-[50px] items-center justify-start text-center ">
                         <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
                         <p className="text-[55.6px] font-bold ">My Orders </p>
                     </div>

                     {/* <div className="flex font-normal text-[32.5px] ml-[94px] gap-[41.79px]">
                         <button className="bg-white py-[8.69px] px-[38.79px] rounded-[17px] ">Pending</button>
                         <button className="bg-white py-[8.71px] px-[27.86px] rounded-[17px]">Delivered</button>
                         <button className="bg-white py-[8.71px] px-[20.89px] rounded-[17px] ">Cancelled</button>

                     </div> */}

                        <div className="flex font-normal text-[32.5px] mt-[30px] ml-[94px] gap-[41.79px]">
                          {["Pending", "Delivered", "Cancelled"].map((btn) => (
                            <button
                              key={btn}
                              onClick={() => setFilter(btn === filter ? "" : btn)}
                              className={`py-[8.69px] px-[38.79px] rounded-[17px] ${
                                filter === btn ? "bg-[rgba(68,48,41,1)] text-white" : "bg-white text-black"
                              }`}
                            >
                              {btn}
                            </button>
                          ))}
                        </div>
                         
                     <div className=" rounded-[24.42px] mt-[48px] pb-[90.07px] ">      
                         {filteredOrders.map((order) =>(
                            <div key={order.id}
                             className="flex flex-col pl-[37px]  pr-[57.7px] pt-[35px] pb-[34.21px]  bg-white mb-[48px] mx-[94px] rounded-[17px] shadow-lg">
                                 <div className="flex justify-between ">
                                     <div className="flex gap-[45px]">
                                     <Image  className="rounded-[17px]" src={order.image} alt="productImg" width={172} height={234.79} />

                                     <div className="flex flex-col">
                                        <h1 className="font-bold text-[45px]">Order # {order.orderNumber}</h1>
                                        <p className="text-[34px]"><span className="text-gray-500">Tracking Number:</span> {order.trackingNumber}</p>
                                        <p className="text-[31px]"><span className="text-gray-500">Quantity:</span>  {order.quantity}</p>
                                        <p className={`text-[29px] font-medium ${
                                            order.status.toLowerCase() === "pending" ? "text-[rgba(255,119,0,0.7)]"
                                            : order.status.toLowerCase() === "delivered" ? "text-[rgba(80,138,123,1)]"
                                            : order.status.toLowerCase() === "cancelled" ? "text-[rgba(237,0,6,1)]"
                                            : "text-gray-500"
                                        }`}>{order.status}</p>
                                     </div>
                                     </div>

                                     <div className="flex flex-col  text-[31px] text-gray-500 gap-[65px]">
                                        <div className="flex flex-col justify-end items-end ">
                                            <p>{order.date}</p>
                                            <p >Subtotal:  <span className="font-bold text-black"> ${order.subtotal}</span> </p>
                                        </div>

                                        <button className="block border border-gray-300 text-[21.2px] text-black py-[12.11px] px-[39.37px] rounded-[7px]">Details</button>
                                     </div>
                                 </div>
                             </div>
                         ))}
                     </div>
         
                  </div>
         
                 <Footer />
                 </>
        
    );
}






