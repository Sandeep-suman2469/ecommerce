
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaMapMarkedAlt, FaCreditCard, FaGift, FaHeart, FaStar, FaSignOutAlt, FaCog } from "react-icons/fa";
import Header from "../Header";

export default function ProfileLayout({children}: {children: React.ReactNode}){
    const pathname = usePathname();

   const menuItems = [
    {href: "/profile/address", label: "Address", icon: <FaMapMarkedAlt /> },
    {href: "/profile/payment-method", label: "Payment method", icon: <FaCreditCard /> },
    {href: "/profile/voucher", label: "Voucher", icon: <FaGift /> },
    {href: "/profile/wishlist", label: "My Wishlist", icon: <FaHeart />},
    {href: "/profile/rate", label: "Rate this app", icon: <FaStar /> },
    {href: "/profile/logout", label: "Log out", icon: <FaSignOutAlt /> }
   ]

    return(
        <>
        <Header />
        <div className="flex gap-[36px] bg-[rgb(245,245,245)] shadow-inner shadow-gray-500/40 text-black">
           <aside className="min-w-[390px]  mt-[39px] mb-[110px] ml-[87px] bg-white shadow-2xl pt-[31px] pb-[63px] rounded-[17px] pl-[37px] pr-[73px] ">
              <div className="flex justify-between text-center">
                <h1 className="text-[29px] font-semibold">Profile</h1>
                <div className="border-1 border-gray-200 px-[12px] py-[4.5px] rounded-[17px]" ><FaCog className="w-[29px] h-[29px] " /></div>
              </div>
              <div className="flex justify-between mt-[22px] ">
                 <Image  src="/profileIcon.svg" alt="profile" width={82.71} height={82.71} />
                 <div className="flex flex-col pt-[14.72px]">
                    <h1 className="font-bold text-[19.46px]">Sunie Pham</h1>
                    <p className="font-normal text-[14.6px]">sunieux@gmail.com</p>
                 </div>     
               </div>
             
            <nav className="flex flex-col gap-[40px] mt-[48.29px]">
                {menuItems.map((item) => (
                    <Link 
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between"
                    >
                    
                    <div className="flex items-center gap-4 text-[14px] font-normal">
                        {item.icon}
                        {item.label}
                    </div>

                    <Image src="/forwardArrow.svg" alt="arrow" width={20} height={20}
                        className=" my-[3.54px] mx-[6.46px]" />
                    
                    </Link>
                ))}
            </nav>   
            </aside>

           <main className="flex-1 bg-white w-full mr-[88px]  mt-[39px] rounded-[17px] shadow-2xl mb-[413px]">{children}</main>
        </div>
        </>
    );
}