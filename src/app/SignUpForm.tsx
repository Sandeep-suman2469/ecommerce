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
        <div className="bg-gray-100  w-full h-screen border-2  flex items-center justify-center">
           <div className=" flex flex-col  bg-white items-center justify-center text-center text-black rounded-[17px] w-[651px] ">
              <h1 className="font-['Rage'] text-[71.37px] mb-4">TrendTheByte</h1>
              <h1 className="w-full font-bold text-[40.7px] mb-4 ">Create your account</h1>
              <form className="flex flex-col w-[419.69px] px-5" onSubmit={handleSignup}>
                <input value={userInfo.name} type="text" placeholder="Enter your name" required onChange={handleChange} className="border-b-2 border-gray-400 py-2 placeholder:text-black mb-4 focus:outline-none"/>
                <input value={userInfo.email} type="email" placeholder="Email address" required onChange={handleChange} className="border-b-2 border-gray-400 py-2 placeholder:text-black mb-4 focus:outline-none"/>
                <input value={userInfo.password } type="password" placeholder="Password" required onChange={handleChange} className="border-b-2 border-gray-400  placeholder:text-black py-2  mb-4 focus:outline-none "/>
                <input value={userInfo.password} type="password" placeholder="Confirm password" required onChange={handleChange}className="border-b-2 border-gray-400  placeholder:text-black py-2 mb-4 focus:outline-none"/>
                <button value={userInfo.cnf_password} className="text-white bg-[rgb(45,32,28)] w-[147px] mx-auto py-2 rounded-4xl flex items-center justify-center mt-8 mb-6 ">SIGN UP</button>
              </form>
              <p className="text-gray-400 flex items-center h-[42px]">or signup with</p>
              <div className="flex flex-row gap-3 ">
                <button className="rounded-full border-gray-200 border-2"><Image src="/apple.svg" alt="applelogo" width={40} height={40} /></button>
                <button className="rounded-full border-gray-200 border-2"><Image src="/google.svg" alt="googlelogo" width={40} height={40} /></button>
                <button className="rounded-full border-gray-200 border-2 "> <Image src="/fb.svg" alt="Facebooklogo" width={40} height={30}  /></button>
              </div>
              <p className="mt-4 mb-4">Already have an account?{" "}
                 <a href="#" className="underline">login</a> </p>
           </div>
        </div>
        
    );
}