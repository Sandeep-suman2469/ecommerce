'use client'
import Image from "next/image";
import { useState } from "react";
import toast from 'react-hot-toast'

export default function SignUpForm(){
   const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    cnf_password:''
  })

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const { name, email, password, cnf_password } = userInfo
      if (password.length < 8) return
      toast.success('Sign-up successful. ');
     
    } catch (error: any) {
      if (error.data.detail) {
        toast.error(error.data.detail);
      }
      else {
        toast.error('Something went wrong.');
      }

      console.log('signup failed:', error);
    }
  }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }


    return(
        <div className="bg-white md:bg-gray-100 min-h-screen  w-full pt-[44px] pb-[30px] flex  items-center justify-center">
           <div className=" flex flex-col max-w-[651px] w-full bg-white items-center justify-center text-center text-black rounded-[17px]  md:shadow-lg ">
               <h1 className="font-['Rage'] hidden md:block text-[71.37px] mx-[149px] mt-[54px] mb-[25px]">TrendTheByte</h1>
              <h1 className="font-bold text-[24px] text-left md:text-center md:text-[40.7px] mx-[33px] md:mx-[108px] ">Create your account</h1>
              <form className="flex flex-col w-full px-[33px] md:px-[142px] gap-[27.08px] mt-[19px] " onSubmit={handleSignup}>
                <input value={userInfo.name} type="text" placeholder="Enter your name" required onChange={handleChange} className="border-b-2 border-gray-400 py-2 placeholder:text-black mb-4 focus:outline-none"/>
                <input value={userInfo.email} type="email" placeholder="Email address" required onChange={handleChange} className="border-b-2 border-gray-400 py-2 placeholder:text-black mb-4 focus:outline-none"/>
                <input value={userInfo.password } type="password" placeholder="Password" required onChange={handleChange} className="border-b-2 border-gray-400  placeholder:text-black py-2  mb-4 focus:outline-none "/>
                <input value={userInfo.cnf_password} type="password" placeholder="Confirm password" required onChange={handleChange}className="border-b-2 border-gray-400  placeholder:text-black py-2 mb-4 focus:outline-none"/>
                <button  className="text-white bg-[rgb(45,32,28)] w-[147px] mx-auto py-2 rounded-4xl flex items-center justify-center mt-[34pxpx] mb-[28px] ">SIGN UP</button>
              </form>
              <p className="text-gray-400 flex items-center mb-[28px] ">or signup with</p>
              <div className="flex flex-row gap-[20px] ">
                <button className="rounded-full border-gray-200"><Image src="/apple.svg" alt="applelogo" width={42} height={42} /></button>
                <button className="rounded-full border-gray-200 "><Image src="/google.svg" alt="googlelogo" width={42} height={42} /></button>
                <button className="rounded-full border-gray-200 border-1 "> <Image className="mx-[10px] my-[10px]" src="/fb.svg" alt="Facebooklogo" width={22} height={22}  /></button>
              </div>
              <p className="mt-4 mb-4">Already have an account?{" "}
                 <a href="#" className="underline">login</a> </p> 
           </div>
        </div>
        
    );

}