import Image from "next/image";

export default function LoginForm(){

    return(
        <div className="bg-gray-100  w-full h-screen border-2  flex items-center justify-center">
           <div className=" flex flex-col  bg-white items-center justify-center text-center text-black rounded-[17px] w-[651px] ">
              <h1 className="font-['Rage'] text-[71.37px] mb-6">TrendTheByte</h1>
              <h1 className="w-full font-bold text-[40.7px] mb-6 ">Log into your account</h1>
              <form className="flex flex-col w-[419.69px] px-5 ">
                
                <input type="email" placeholder="Email address" className="border-b-2 border-gray-400 py-2 placeholder:text-black mb-4 focus:outline-none"/>
                <input type="password" placeholder="Password" className="border-b-2 border-gray-400  placeholder:text-black py-2  mb-4 focus:outline-none "/>
                 <a href="#" className="flex justify-end">Forgot Password ?</a> 
                <button className="text-white bg-[rgb(45,32,28)] w-[147px] mx-auto py-2 rounded-4xl flex items-center justify-center mt-8 mb-6 ">LOGIN</button>
              </form>
              <p className="text-gray-400 flex items-center h-[42px]">or login with</p>
              <div className="flex flex-row gap-3 ">
                <button className="rounded-full border-gray-200 border-2"><Image src="/apple.svg" alt="applelogo" width={42} height={42} /></button>
                <button className="rounded-full border-gray-200 border-2"><Image src="/google.svg" alt="googlelogo" width={42} height={42} /></button>
                <button className="rounded-full border-gray-200 border-2 "> <Image src="/fb.svg" alt="Facebooklogo" width={42} height={42}  /></button>
              </div>
              <p className="mt-4 mb-4">Don't have an account?{" "}
                 <a href="#" className="underline">Sign up</a> </p>
           </div>
        </div>
        
    );
}