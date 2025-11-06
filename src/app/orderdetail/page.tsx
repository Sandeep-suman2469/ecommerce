import Link from "next/link";
import Footer from "../footer";
import Header from "../Header";
import Image from "next/image";


export default function OrderDetails(){

      const order_detail = [
            {
                id: 1,  name: "Cotton T-Shirt", image: "/image 6.svg", orderNumber: "1524", trackingNumber: "IK24464463", Delivery_Address: "2/7 B-Block SBI Building, Rubi Park", subtotal: 110, shipping_charge: 0, date: "24/09/2025",
                
            },
 
            ];

    return(
         <>
            <Header />
            <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40 pb-[154px]">

            
                <div className="flex gap-[37.8px] ml-[94px] pt-[50px] items-center justify-start text-center ">
                    <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
                    <p className="text-[55.6px] font-bold "> Orders </p>
                </div>

                <div className="flex justify-between text-white ml-[97px] mr-[91px] mt-[46px] pl-[78px] pr-[57px] pt-[65px] pb-[81px] rounded-[17px]  bg-[rgba(164,96,73,1)] ">
                    <div className="flex flex-col ">
                        <h1 className="font-bold text-[45px]">Your Order Has Been Delivered</h1>
                        <p className="text-[37px] font-medium ">Rate product to get 5 points for collect </p>
                    </div>
                    <Image  src="/deliveredIcon.svg" alt="profile" width={181.54} height={120} />
                </div>


            
                    {order_detail.map((order) =>(
                    <div key={order.id} className=" pl-[97px] pr-[91px]" >
                        <div className="bg-white mb-[54px] mt-[75px] pl-[37px] pr-[57.57px] py-[35px] rounded-[17px] shadow-lg">
                            <div className="flex justify-between">
                                <div className="flex gap-[45px] text-[34px] font-normal text-gray-600 ">
                                   <Image className="rounded-[17px]" src="/image 9.svg" alt="profile" width={172} height={234.79} />
                                   <div className="max-w-[506px]">
                                      <p>Order Number:{" "}<span className="text-black">#{order.orderNumber}</span></p>
                                      <p>Tracking Number:{" "}<span className="text-black">{order.trackingNumber}</span></p>
                                      <p>Delivery Address:{" "}<span className="text-black">{order.Delivery_Address}</span></p>
                                   </div>
                                </div>
                                <div className="flex flex-col justify-between items-end">
                                    <div className="text-[31px] mb-[65px]" >
                                        <p className="flex justify-end mb-[17px]">{order.date}</p>
                                        <p>Subtotal:{" "}<span className=" text-black font-semibold">${order.subtotal}</span></p>
                                    </div>
                                    <button className=" border-2 px-[39.37px] py-[9.89px] rounded-[7px] border-gray-400 text-[21.2px]">Details</button>
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between gap-[27px] text-gray-600 text-[34px] bg-white px-[56px] py-[45px]  rounded-[17px] shadow-lg">
                            <div className="flex justify-between">
                                    <p>{order.name}</p>
                                    <p className="text-black font-medium">${order.subtotal}</p>
                            </div>
                            <div className="flex justify-between">
                                    <p>Sub Total</p>
                                    <p className="text-black font-medium">${order.subtotal}</p>
                            </div>
                            <div className="flex justify-between">
                                    <p>Shipping</p>
                                    <p className="text-black font-medium">${order.shipping_charge.toFixed(2)}</p>
                            </div>
                            <p className="h-[2.46px] bg-gray-400"></p>
                            <div className="flex justify-between">
                                    <p>Total</p>
                                    <p className="text-black font-medium">${order.subtotal}</p>
                            </div>
                        </div>
                    </div>
                    ))}

                <div className="flex gap-[42px] mt-[54px] mr-[90.75px] justify-end">
                      <Link href="/homePage">
                        <button className="bg-white text-[32.5px] border-1 border-gray-300 rounded-[17px] px-[32px] py-[9.29px] ">Return Home</button>
                      </Link>
                      <Link href="/review">
                        <button className="text-white text-[32.5px] border-1 border-gray-300 rounded-[17px] px-[68.96px] py-[9.29px] bg-[rgba(66,48,41,1)] ">Rate</button>
                      </Link>
                </div>

            </div>

            <Footer />
            </>
    );
}