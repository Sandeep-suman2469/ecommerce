
import Link from "next/link";
import Footer from "../footer";
import Header from "../Header";
import Image from "next/image";


export default function OrderInfo(){

      const order_detail = [
            {
                id: 1,  name: "Cotton T-Shirt",  orderNumber: "1524", trackingNumber: "IK24464463", Delivery_Address: "2/7 B-Block SBI Building, Rubi Park", subtotal: 110, shipping_charge: 0, 
                
            },
 
            ];

    return(
         <>
            <Header />
            <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40 pb-[216px]">

            
                <div className="flex gap-[37.8px] ml-[94px] pt-[50px] items-center justify-start text-center ">
                    <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
                    <p className="text-[55.6px] font-bold "> Orders </p>
                </div>

                <div className="flex justify-between text-white ml-[97px] mr-[91px] mt-[46px] pl-[78px] pr-[57px] pt-[65px] pb-[81px] rounded-[17px]  bg-[rgba(164,96,73,1)] ">
                    <div className="flex flex-col ">
                        <h1 className="font-bold text-[45px]">Your Order is on the way</h1>
                        <p className="text-[37px] font-medium "> Click here to <Link className="underline" href="#" >track</Link> your order. </p>
                    </div>
                    <Image  src="/deliveryIcon.svg" alt="profile" width={181.54} height={120} />
                </div>


            
                    {order_detail.map((order) =>(
                    <div key={order.id} className=" pl-[97px] pr-[91px] mt-[63px] " >
                      
                        <div className="flex flex-col justify-between gap-[27px] text-gray-600 text-[27px] bg-white px-[56px] py-[45px]  rounded-[17px] shadow-lg">
                            
                            <div className="flex justify-between">
                                    <p>Order Number</p>
                                    <p className="text-black font-medium">#{order.orderNumber}</p>
                            </div>
                            <div className="flex justify-between">
                                    <p>Tracking Number</p>
                                    <p className="text-black font-medium">${order.trackingNumber}</p>
                            </div>
                            <div className="flex justify-between mb-[75px]">
                                    <p>Delivery Address</p>
                                    <p className="text-black font-medium">${order.Delivery_Address}</p>
                            </div>
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
                            
                            <div className="flex justify-between">
                                    <p className="text-black font-medium">Total</p>
                                    <p className="text-black font-medium">${order.subtotal.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    ))}

                    <div className="flex mt-[54px] mr-[90.75px] justify-end">
                      <button className="text-white text-[32.5px] border-1 border-gray-300 rounded-[17px] px-[68.96px] py-[9.29px] bg-[rgba(66,48,41,1)] ">Continue Shopping</button>
                </div>

               

            </div>

            <Footer />
            </>
    );
}