"use client"

import Image from "next/image";
import { useState } from "react";
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm(){
  
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
     
      email: '',
      password: '',
      
    })
  

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const { email, password } = userInfo;

        if (password.length < 8) {
          toast.error("Password must be at least 8 characters.");
          return;
        }

        const response = await fetch("http://localhost:8000/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          toast.error(data.detail || "Invalid credentials");
          return;
        }

        toast.success("Login successful!");
        router.push("/homepage")
        console.log("User:", data);

      } catch (error) {
        console.error("Login failed:", error);
        toast.error("Something went wrong while logging in.");
      }
    };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }


    return(
          <div className="bg-white md:bg-[rgb(247,247,247)] min-h-screen  w-full pt-[44px] pb-[30px] flex  items-center justify-center">
                   <div className=" flex flex-col max-w-[651px] w-full bg-white items-center justify-center text-center text-black rounded-[17px]  md:shadow-lg sm:shadow-lg ">
                       <h1 className="font-['Rage'] hidden sm:block md:block text-[71.37px] mx-[149px] mt-[54px] mb-[25px]">TrendTheByte</h1>
                      <h1 className="font-bold text-[24px] text-left md:text-center md:text-[40.7px] sm:text-[40px] mx-[33px] md:mx-[108px] ">Log into your account</h1>
                      <form className="flex flex-col w-full px-[33px] md:px-[116px] sm:px-[116px] gap-[27.08px] mt-[19px] " onSubmit={handleLogin}>
                        
                        <input name="email" value={userInfo.email} type="email" placeholder="Email address" required onChange={handleChange} className="border-b-2 border-gray-400 py-2 placeholder:text-black mb-4 focus:outline-none"/>
                        <input name="password" value={userInfo.password } type="password" placeholder="Password" required onChange={handleChange} className="border-b-2 border-gray-400  placeholder:text-black py-2  mb-4 focus:outline-none "/>
                        {/* <a href="#" className="flex justify-end">Forgot Password ?</a>  */}
                         <Link href="/forgotpassword" className="flex justify-end hover:underline">
                               Forgot Password ?
                         </Link>
                        <button  className="text-white bg-[rgb(45,32,28)] w-[147px] mx-auto py-2 rounded-4xl flex items-center justify-center mt-[34px] mb-[28px] ">LOGIN</button>
                      </form>
                      <p className="text-gray-400 flex items-center mb-[28px] ">or signup with</p>
                      <div className="flex flex-row gap-[20px] ">
                        <button className="rounded-full border-gray-200"><Image src="/apple.svg" alt="applelogo" width={42} height={42} /></button>
                        <button className="rounded-full border-gray-200 "><Image src="/google.svg" alt="googlelogo" width={42} height={42} /></button>
                        <button className="rounded-full border-gray-200 border-1 "> <Image className="mx-[10px] my-[10px]" src="/fb.svg" alt="Facebooklogo" width={22} height={22}  /></button>
                      </div>
                      <p className=" mt-[109px] md:mt-4 mb-4">Already have an account?{" "}
                         <a href="#" className="underline">login</a> </p> 
                   </div>
                </div>
        
    );
}