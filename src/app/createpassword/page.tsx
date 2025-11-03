"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

export default function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

   const handleConfirm = () => {
     setIsChanged(true); 
   };

  return (
       
    <div className={`min-h-screen flex items-center justify-center bg-white sm:bg-[rgb(247,247,247)] transition-all duration-300` }>
      <div className="w-full sm:mx-[394px] sm:my-[108px]  bg-white  rounded-[17px] sm:shadow-lg">
      
        <div className="flex items-center md:gap-[70.94px] sm:gap-[50px] mx-[35px] sm:pl-[58px] sm:pr-[54px] pt-1 sm:pt-[62px]">
         
             <Image className="h-9 sm:h-[55.2px] sm:w-[55.2px] w-[36px] "  src="/backarrow.svg" alt="back_btn" width={55.2} height={55.2} />
          
             <h1 className="font-['Rage'] text-black font-normal hidden sm:block sm:text-[62px]  md:text-[71.37px]">TrendTheByte</h1>
        </div>

        <h2 className=" font-bold text-black text-[24px] sm:text-[34px] sm:text-left md:text-[40.18px] ml-[35px] sm:ml-[68px] mt-[27px] ">Create new password</h2>
        <p className=" text-black text-[14px] sm:text-[20px] md:text-[23.44px] ml-[35px] sm:mx-[67.35px] mb-[52.61px]">
          Your new password must be different <br></br> from previously used password
        </p>

        <div className="relative mx-[33px] sm:ml-[70px] sm:mr-[71px] mb-[31.31px]">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 focus:border-black focus:outline-none"
          />
          <label
            htmlFor="password"
            className="absolute left-1 top-2 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-black peer-placeholder-shown:text-[12px] sm:peer-placeholder-shown:text-[23.44px]"
          >
            Password
          </label>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-5 text-gray-500 hover:text-black"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

      
        <div className="relative mx-[33px] sm:ml-[70px] sm:mr-[71px] mb-6">
          <input
            type={showConfirm ? "text" : "password"}
            id="confirmPassword"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 focus:border-black focus:outline-none"
          />
          <label
            htmlFor="confirmPassword"
            className="absolute left-1 top-2 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-black peer-placeholder-shown:text-[12px]  sm:peer-placeholder-shown:text-[23.44px]"
          >
            Confirm Password
          </label>
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-2 top-5 text-gray-500 hover:text-black"
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

      
        <button onClick={handleConfirm} className=" mt-[81.5px] mb-[47.67px] sm:py-[12px] px-[36px] py-[11px] sm:px-[50px] md:px-[61.89px] md:py-[20.07px] mx-auto block font-bold bg-black text-white text-[16px] sm:text-[26.76px] rounded-full hover:bg-gray-900 transition">
          Confirm
        </button>
      </div>
       

      {isChanged && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative flex flex-col bg-white items-center justify-center rounded-[17px] max-w-[651px] shadow-lg">
            <button
              onClick={() => setIsChanged(false)}
              className="flex absolute right-0 top-0"
            >
              <Image src="/cross.svg" alt="close" width={55} height={55} />
            </button>
            <Image
              src="/confirmedIcon.svg"
              alt="confirmed"
              width={150.34}
              height={150.34}
              className="mt-6"
            />
            <div className="flex flex-col justify-center items-center text-center mt-4">
              <p className="text-black text-[25.56px] mx-[115px] font-medium">Your password has been changed</p>
              <p className="text-gray-500 text-sm">Welcome back! Discover now!</p>
            </div>
            <button className="bg-black rounded-full px-8 text-white py-2 mt-6 mb-6">
              Browse home
            </button>
          </div>
        </div>
      )}

    </div>
  );
}





