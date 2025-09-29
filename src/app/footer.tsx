import Image from "next/image";
import Link from "next/link";


export default function(){

    return(
          <div className="  bg-white">
        <div className=" flex flex-row bg-[rgb(137,123,115)] rounded-t-2xl justify-evenly p-8">
            <div className="flex flex-col justify-center items-start ">
                <h1 className="font-['Rage'] bg-[rgb(66,48,41,1)] rounded-2xl px-10 py-1 text-[44.43px]">TrendTheByte</h1>
                <div className= "flex flex-row gap-x-6 mt-8">
                    <button className="bg-[rgb(66,48,41,1)] rounded-[7px] px-[13px] py-[12px]"><Image src="/instagram.svg" alt="instalogo" width={24} height={24} /></button>
                    <button className="bg-[rgb(66,48,41,1)] rounded-[7px] px-[13px] py-[12px]"><Image src="/twitter.svg" alt="twitterlogo" width={24} height={24} /></button>
                    <button className="bg-[rgb(66,48,41,1)] rounded-[7px] px-[13px] py-[12px]"> <Image src="/facebook.svg" alt="Facebooklogo" width={24} height={24}  /></button>
                </div>
            </div>
            <div className="flex flex-col text-[rgb(66,48,41,1)]">
                <h1 className="text-[35px] font-semibold ">Resources</h1>
                <div className="flex flex-col font-normal text-[21.09px]">
                    <Link href="#">Home</Link>
                    <Link href="#">Shop All</Link>
                    <Link href="#">Men's</Link>
                    <Link href="#">Women's</Link>
                </div>
            </div>
            <div className="flex flex-col text-[rgb(66,48,41,1)]">
                <h1 className="text-[35px] font-semibold ">Company</h1>
                <div className="flex flex-col">
                    <Link href="#">About Us</Link>
                    <Link href="#">Terms & Conditions</Link>
                    <Link href="#">Privacy Policy</Link>   
                </div>
            </div>
            <div className="flex flex-col text-[rgb(66,48,41,1)]">
                <h1 className="text-[35px] font-semibold ">Team Support</h1>
                <div className="flex flex-col">
                    <Link href="#">Get In Touch</Link>
                    <Link href="#">Track Your Order</Link> 
                </div>
            </div>
        </div>
        </div>
    );

}