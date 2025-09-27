"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

export default function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-gray-100  w-full h-screen border-2  flex items-center justify-center">
            <div className=" flex flex-col  bg-white items-center justify-center text-center text-black rounded-[17px] w-[651px] px-4 ">
   
                 <div className="flex flex-row mr-14">
                       <button className=" rounded-full mb-4 mr-10 ">
                           <Image  src="/backarrow.svg" alt="back_btn" width={55.2} height={55.2} />
                       </button>
                       <h1 className="font-['Rage'] text-[71.37px] mb-6">TrendTheByte</h1>
                  </div>
                  <div className="text-black w-[471.57px]  mb-6">
                       <h1 className="flex text-left justify-start text-[36.75px] font-bold mb-4">Create new password</h1>
                       <p className="flex text-left text-[21.43px] mb-10 ">
                          Your new password must be differnet from previously used password
                       </p>
                  </div>
                  
        <div className="relative mb-6 ">
         <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 focus:border-black focus:outline-none"
          />
           <label
            htmlFor="password"
            className="absolute left-2 top-2 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
          >
            Password
          </label>
         <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-6 text-gray-500 "
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>


        
        <div className="relative mb-6 ">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder=" " 
              className="peer w-full border-b-2 border-gray-300"
              />
            <label
             htmlFor="confirm password"
            className="absolute left-2 top-2 text-sm  text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base transition-all"
            //   className="absolute left-2 top-2 text-gray-400 text-sm transition-all
            //             peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            //             peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
             >
             confirm Password
            </label>
            <button
             type="button"
             className="absolute top-2 right-1"
     //        
             onClick={()=> setShowConfirm(!showConfirm)}>
               {showConfirm ? <FaEyeSlash /> : <FaEye />} 
            </button>
        </div>
          <button className="text-white bg-black rounded-3xl">
            confirm
          </button>

           
            </div>
       </div>
    // <div className="min-h-screen flex items-center justify-center bg-gray-50">
    //   <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
    //     {/* Logo + Back button */}
    //     <div className="flex items-center gap-3 mb-6">
    //       <button className="p-2 rounded-full hover:bg-gray-100">
    //         &lt;
    //       </button>
    //       <h1 className="font-['Rage'] text-2xl">TrendTheByte</h1>
    //     </div>

    //     {/* Heading */}
    //     <h2 className="text-2xl font-bold mb-2">Create new password</h2>
    //     <p className="text-gray-500 mb-8 text-sm">
    //       Your new password must be different from previously used password
    //     </p>

    //     {/* New Password */}
    //     <div className="relative mb-6">
    //       <input
    //         type={showPassword ? "text" : "password"}
    //         id="password"
    //         placeholder=" "
    //         className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 focus:border-black focus:outline-none"
    //       />
    //       <label
    //         htmlFor="password"
    //         className="absolute left-2 top-2 text-gray-400 text-sm transition-all
    //           peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
    //           peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
    //       >
    //         Password
    //       </label>
    //       <button
    //         type="button"
    //         onClick={() => setShowPassword(!showPassword)}
    //         className="absolute right-2 top-3 text-gray-500 hover:text-black"
    //       >
    //         {showPassword ? <FaEyeSlash /> : <FaEye />}
    //       </button>
    //     </div>

    //     {/* Confirm Password */}
    //     <div className="relative mb-8">
    //       <input
    //         type={showConfirm ? "text" : "password"}
    //         id="confirmPassword"
    //         placeholder=" "
    //         className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 focus:border-black focus:outline-none"
    //       />
    //       <label
    //         htmlFor="confirmPassword"
    //         className="absolute left-2 top-2 text-gray-400 text-sm transition-all
    //           peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
    //           peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
    //       >
    //         Confirm Password
    //       </label>
    //       <button
    //         type="button"
    //         onClick={() => setShowConfirm(!showConfirm)}
    //         className="absolute right-2 top-3 text-gray-500 hover:text-black"
    //       >
    //         {showConfirm ? <FaEyeSlash /> : <FaEye />}
    //       </button>
    //     </div>

    //     {/* Confirm Button */}
    //     <button className="w-full py-3 bg-black text-white text-lg rounded-full hover:bg-gray-900 transition">
    //       Confirm
    //     </button>
    //   </div>
    // </div>
  );
}
