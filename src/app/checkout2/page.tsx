

"use client"
import Link from "next/link";
import Footer from "../footer";
import Header from "../Header";
import Image from "next/image";

import { useState } from "react";


export default function CheckOut2(){

    const [selectedMethod, setSelectedMethod] = useState("free");


    return(

        <>
        <Header />
        <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40 pb-[269px]">

            <div className="flex gap-[37.8px] pl-[151px] pt-[106px] items-center justify-start text-center ">
                <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
                <p className="text-[55.6px] font-bold ">Check out </p>
            </div>
                
            <div className="bg-white rounded-[24.42px] mt-[48px] mx-[151px] pb-[90.07px] shadow-lg ">
                   <Image className="mx-[176px] pt-[71px] "
                          src="/checkout2.svg" alt="checkout1" width={785} height={64.92} />

                    <div className="flex flex-col px-[68px] mt-[60.08px] ">
                        <p className="text-[21.02px] font-normal">STEP 2</p>
                        <h1 className="text-[47.78px] font-bold">Payment</h1>  
                            
                    </div >

                    <div className="flex  px-[73px] gap-[100px] ">
                        <button  className="flex flex-col items-center text-center bg-white shadow-lg px-[76.07px] py-[31.69px] rounded-[15.84px] ">
                            <Image  src="/Money icon.svg" alt="profile" width={96.35} height={58.09} />
                            <p  className="text-gray-400 font-normal text-[31.69px] mt-[15.84px] ">Cash</p>
                        </button>
                        <button className="flex flex-col  items-center text-center shadow-lg bg-[rgba(66,48,41,1)] px-[76.07px] py-[31.69px] rounded-[15.84px] ">
                            <Image  src="/Credit Card Icon.svg" alt="profile" width={93.82} height={58.09} />
                            <p  className="text-white font-normal text-[31.69px] mt-[15.84px] ">Credit Card</p>
                        </button>
                        <button className="bg-white shadow-lg px-[76.07px] py-[31.69px] rounded-[15.84px] ">
                            <Image  src="/3 dot.svg" alt="profile" width={96.36} height={21.12} />   
                        </button>
                    </div>

                    <div className="flex flex-col pl-[78px] mt-[92px] ">
                          <h1 className="font-semibold text-[37px] mb-[13px] ">Choose your card</h1>
                          <div className="flex gap-[21.07px] items-center ">
                               <button className="rounded-[15.84px] ">
                                      <Image className="transition-transform duration-300 hover:scale-110" src="/card1.svg" alt="profile" width={454.07} height={265.22} />   
                               </button>

                               <button className=" rounded-[15.84px] ">
                                      <Image className="transition-transform duration-300 hover:scale-110" src="/card1.svg" alt="profile" width={454.07} height={265.22} />   
                               </button>
                          </div>
                    </div>


                    <div className="flex items-center gap-[21.53px] pl-[87px] mb-[120.15px] ">

                        <p className="text-[23.49px] font-normal">or check out with:</p>

                         <button  className=" border pl-[32.96px] pr-[33.27px] pt-[15.89px] pb-[14.16px] border-gray-300 transition-transform duration-300 hover:scale-110 hover:border-[rgba(31,114,205,1)] rounded-[8.32px] ">
                            <Image className=" " src="/PayPal.svg" alt="profile" width={30.81} height={36.5} />   
                        </button>
                        <button className=" pl-[12.33px] pr-[14.16px] pt-[23.29px] pb-[21.05px] border border-gray-300 transition-transform duration-300 hover:scale-110 hover:border-[rgba(31,114,205,1)] rounded-[8.32px] ">
                            <Image  className="" src="/visa-logo.svg" alt="profile" width={67.13} height={21.42} />   
                        </button>
                        <button className=" pl-[17.88px] pr-[16.78px] pt-[14.48px] pb-[13.78px] border border-gray-300 transition-transform duration-300 hover:scale-110 hover:border-[rgba(31,114,205,1)] rounded-[8.32px] ">
                            <Image  src="/Mastercard.svg" alt="profile" width={62.38} height={38.38} />    
                        </button>
                        <button className=" pl-[9.7px] pr-[9.7px] pt-[23.92px] pb-[23.05px] border border-gray-300 transition-transform duration-300 hover:scale-110 hover:border-[rgba(31,114,205,1)] rounded-[8.32px] ">
                            <Image  src="/Alipay.svg" alt="profile" width={77.63} height={19.57} />    
                        </button>
                        <button className=" pl-[8.32px] pr-[8.27px] pt-[23.57px] pb-[22.86px] border border-gray-300 bg-[rgba(31,114,205,1)] transition-transform duration-300 hover:scale-110  rounded-[8.32px] ">
                            <Image className="" src="/AMEX.svg" alt="profile" width={80.45} height={20.12} />    
                        </button>

                    </div>
                  
                <div className="pl-[92.51px] pr-[106.57px]">

                    <div  className="flex justify-between text-[43.57px]">
                        <span className="text-gray-400">Product price</span>
                        <span>$110</span>
                    </div>

                    <div className="w-full h-[3.11px] bg-gray-400 mt-[49px] mb-[62.24px] "></div>

                    <div  className="flex justify-between text-[43.57px]">
                        <span className="text-gray-400">Shipping</span>
                        <span>Freeship</span>
                    </div>

                    <div className="w-full h-[3.11px] bg-gray-400 mt-[49px] mb-[62.24px] "></div>

                    <div  className="flex justify-between text-[43.57px]">
                        <span className="text-black">Subtotal</span>
                        <span className="font-bold">$110</span>
                    </div>

                    <div className="flex items-center gap-[33px] mt-[22px] ">
                     <input type="checkbox" className=" w-[42px] h-[40px]  accent-[rgba(94,206,123,1)] bg-[rgb(247,247,247)] rounded-[15.06px] " /> 
                     <span className="font-light text-[35.16px]">I agree to <Link className=" underline" href="#">Terms and condition</Link></span>
                    </div>

                    <button className="block mx-auto mt-[96.45px] rounded-[17px] bg-[rgba(66,48,41,1)] text-white text-[42.63px] px-[64.21px] py-[34.24px] font-bold ">Place your order</button>
                    </div>
            </div>

         </div>

        <Footer />
        </>
    );
}