import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
export default function ForgotPassword() {
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
                    <h1 className="flex justify-start text-[36.75px] font-bold mb-4">Forgot Password ?</h1>
                    <p className="flex text-left text-[21.43px] mb-10 ">
                        Enter email associated with your account and we'll send an email
                        with instruction to reset your password
                    </p>
                <div className="flex flex-row ">
                    <HiOutlineMail className="text-gray-500 text-2xl mr-3" />

                    <input
                        type="email"
                        placeholder="enter your email here"
                        className="outline-none border-none"
                    />
                </div>
               </div>

         </div>
    </div>
  );
}
