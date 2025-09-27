import Image from "next/image";

export default function ChangedPassword(){

    return(
        <div className="bg-gray-100  w-full h-screen border-2  flex items-center justify-center">
           <div className="relative flex flex-col  bg-white items-center justify-center border-2  rounded-[17px] w-[651px] ">
                
                <button className="flex absolute right-0  top-0"><Image src="/cross.svg" alt="applelogo" width={55} height={55} /></button>
                 <button className="flex  justify-center mt-6 items-end"><Image src="/confirmedIcon.svg" alt="applelogo" width={150.34} height={150.34} /></button>

                 <div className="flex flex-col justify-center items-center text-center">
                    <p className="text-black">Your password has been changed</p>
                    <p className="text-gray-500 text-sm"> Welcome back! Discover now!</p>
                 </div>
                 <button className="bg-black rounded-4xl px-8 text-white py-2 mt-6 mb-6">Browse home</button>
           </div>
        </div>
        
    );
}