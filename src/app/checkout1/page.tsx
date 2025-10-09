"use client"
import Footer from "../footer";
import Header from "../Header";
import Image from "next/image";

import { useState } from "react";


export default function CheckOut1(){

    const [selectedMethod, setSelectedMethod] = useState("free");

    const delevery_option = [
            { id: "free", label: "Free Delivery to home", price: "Free",
              info: "Delivery from 6 to 7 business days",
            },
            { id: "standard", label: "Delivery to home", price: "$9.90",
              info: "Delivery from 4 to 5 business days",
            },
            { id: "fast", label: "Fast Delivery", price: "$9.90",
              info: "Delivery from 2 to 3 business days",
            },
          ]

    return(

        <>
        <Header />
        <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40 pb-[362px]">

            <div className="flex gap-[37.8px] pl-[151px] pt-[106px] items-center justify-start text-center ">
                <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
                <p className="text-[55.6px] font-bold ">Check out</p>
            </div>
                
            <div className="bg-white rounded-[24.42px] mt-[48px] mx-[151px] pb-[90.07px] shadow-lg ">
                   <Image className="mx-[176px] pt-[71px] "
                          src="/checkout1.svg" alt="checkout1" width={785} height={64.92} />

                    <div className="flex flex-col px-[68px] mt-[60.08px] ">
                    <p className="text-[21.02px] font-normal">STEP 1</p>
                    <h1 className="text-[47.78px] font-bold">Shipping</h1>

                    <form className="grid grid-cols-1 md:grid-cols-2 mt-[63px] gap-[120px] px-[13px] ">
                        <div className="relative">
                                <input
                                    type="text"
                                    id="firstName"
                                    className="peer w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2 bg-transparent placeholder-transparent"
                                    placeholder="First name"
                                />
                                <label
                                    htmlFor="firstName"
                                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                            peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                                >
                                    First name <span className="text-green-500">*</span>
                                </label>
                        </div>

                        <div className="relative">
                        <input
                            type="text"
                            id="lastName"
                            className="peer w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2 bg-transparent placeholder-transparent"
                            placeholder="Last name"
                            required
                        />
                        <label
                            htmlFor="lastName"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                        >
                            Last name <span className="text-green-500">*</span>
                        </label>
                        
                        </div>

                        <div className="relative">
                            <select 
                                    id="country"
                                    className="peer w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2 bg-transparent text-gray-700"
                                    defaultValue=""
                                    required
                                    >
                                    <option value="" disabled hidden></option>
                                    <option value="india">India</option>
                                    <option value="usa">USA</option>
                                    <option value="uk">UK</option>
                                    <option value="uae">UAE</option>
                                    <option value="russia">RUSSIA</option>
                            </select>
                            <label
                                htmlFor="country"
                                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                            peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                            peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                                >Country<span className="text-green-500">*</span>
                            </label>
                                
                        </div>

                        <div className="relative">
                        <input
                            type="text"
                            id="street"
                            className="peer w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2 bg-transparent placeholder-transparent"
                            placeholder="Street "
                        />
                        <label
                            htmlFor="street"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                        >
                            Street name <span className="text-green-500">*</span>
                        </label>
                        </div>

                        <div className="relative">
                        <input
                            type="text"
                            id="city"
                            className="peer w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2 bg-transparent placeholder-transparent"
                            placeholder="city"
                            required
                        />
                        <label
                            htmlFor="city"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                        >
                            City <span className="text-green-500">*</span>
                        </label>
                        </div>

                        <div className="relative">
                        <input
                            type="text"
                            id="state"
                            className="peer w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2 bg-transparent placeholder-transparent"
                            placeholder="State/Province"
                        />
                        <label
                            htmlFor="state"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                        >
                            State/Province 
                        </label>
                        </div>

                        <div className="relative">
                        <input
                            type="text"
                            id="zip"
                            className="peer w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2 bg-transparent placeholder-transparent"
                            placeholder="Zip-code"
                            required
                        />
                        <label
                            htmlFor="zip"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                        >
                            Zip-code <span className="text-green-500">*</span>
                        </label>
                        </div>

                        <div className="relative">
                        <input
                            type="number"
                            id="phone"
                            className="peer w-full border-b border-gray-300 focus:border-gray-600 outline-none py-2 bg-transparent placeholder-transparent"
                            placeholder="Street "
                            required
                        />
                        <label
                            htmlFor="phone"
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                        >
                            Phone number <span className="text-green-500">*</span>
                        </label>
                        </div>

                    </form>
                        
                    </div>

                    <div className="mt-[83.68px] px-[68px]  ">
                         <h1 className="font-semibold text-[37px] ">Shipping Method</h1>
                         <p className="h-[3.37px] bg-gray-300 mt-[22px]"></p>
                  
                        <div className="flex flex-col md:flex-row gap-2 justify-between mt-[22px] ">
                         {delevery_option.map((method) =>(
                           <div
                            key={method.id}
                            className={`flex flex-col items-center cursor-pointer w-full  p-4 rounded-xl `}
                            onClick={() => setSelectedMethod(method.id)}
                            >
                            <div
                                className={`w-5 h-5 rounded-full border-2 mb-3 flex items-center justify-center ${
                                selectedMethod === method.id
                                    ? "border-[rgba(80,138,123,1)]"
                                    : "border-gray-400"
                                }`}
                            >
                                {selectedMethod === method.id && (
                                <div className="flex items-center justify-center w-5 h-5 bg-[rgba(80,138,123,1)] rounded-full">
                                    <div className=" w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                )}
                            </div>
                            <div className="text-gray-900 font-semibold">
                                {method.price}{" "}
                                <span className="font-normal text-gray-400 text-[20.85px]">{method.label}</span>
                            </div>
                            <div className="text-gray-400 text-[20.85px] mt-1">{method.info}</div>
                            </div>
                         ))}
                         </div>
                    </div>

                     <div className="mt-[83.68px] px-[68px]  ">
                         <h1 className="font-semibold text-[37px] ">Coupon code</h1>
                         <p className="h-[3.37px] bg-gray-300 mt-[22px]"></p>

                         <div className="flex items-center justify-between bg-[rgba(217,217,217,0.5)] rounded-[17px] px-4 text-[31px] py-[23px] w-full mt-[16px]">
                                <input
                                    type="text"
                                    placeholder="Have a code? Type it here..."
                                    className="bg-transparent outline-none w-full  placeholder:text-gray-400 "
                                />
                                <button className="text-[rgba(68,181,155,1)] font-medium hover:underline ml-[37px]">
                                    Validate
                                </button>
                         </div>

                     </div>

                      <div className="mt-[93.63px] px-[68px]  ">
                         <h1 className="font-semibold text-[37px] ">Billing Address</h1>
                         <p className="h-[3.37px] bg-gray-300 mt-[22px]"></p>
                     </div>
                     <div className="flex items-center gap-[33px] mt-[22px] px-[68px]  ">
                     <input type="checkbox" className=" w-[42px] h-[40px]  accent-[rgba(80,138,123,1)] bg-[rgb(247,247,247)] rounded-[15.06px]" /> <span className="font-medium text-[27px]">Copy address data from shipping</span>
                     </div>

                     <button className="block mx-auto mt-[96.45px] rounded-[17px] bg-[rgba(66,48,41,1)] text-white text-[42.63px] px-[64.21px] py-[34.24px] font-bold  ">Continue to payment</button>
            </div>

        </div>

        <Footer />
        </>
    );
}