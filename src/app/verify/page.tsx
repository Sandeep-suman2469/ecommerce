"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Verify() {

    const router = useRouter();
    const [otp, setOtp] = useState(["", "", "", ""])
    const [timeLeft, setTimeLeft] = useState(10)


    useEffect(() => {
        if(timeLeft <= 0) return;
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
        return () => clearTimeout(timer);
    },[timeLeft])

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
                    <h1 className="flex justify-start text-[36.75px] font-bold mb-4">Verification code </h1>
                    <p className="flex text-left text-[21.43px] mb-10 ">
                       Please enter the verification code we sent to your email address
                    </p>
                
               </div>

         </div>
    </div>
  );
}






//   const handleChange = (index: number, value: string) => {
//     if (/[^0-9]/.test(value)) return; // only numbers
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     // Move to next box
//     if (value && index < 3) {
//       const nextInput = document.getElementById(`otp-${index + 1}`);
//       nextInput?.focus();
//     }
//   };

//   const handleSubmit = () => {
//     const code = otp.join("");
//     console.log("Entered OTP:", code);
//     // TODO: verify OTP via backend API
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
    

//       {/* OTP Inputs */}
//       <div className="flex gap-4 mb-6">
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             id={`otp-${index}`}
//             value={digit}
//             onChange={(e) => handleChange(index, e.target.value)}
//             maxLength={1}
//             className="w-14 h-14 border-2 border-gray-300 rounded-full text-center text-xl font-semibold focus:border-black outline-none"
//           />
//         ))}
//       </div>

//       {/* Resend Timer */}
//       <p className="text-gray-400 text-sm">
//         {timeLeft > 0 ? `Resend in 00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}` : "Resend code"}
//       </p>

//       {/* Optional: Verify Button */}
//       <button
//         onClick={handleSubmit}
//         className="mt-6 bg-black text-white px-8 py-2 rounded-full hover:bg-gray-800 transition"
//       >
//         Verify
//       </button>
//     </div>
//   );

