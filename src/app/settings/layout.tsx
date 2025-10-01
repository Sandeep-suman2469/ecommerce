"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaGlobe, FaBell, FaClipboardList, FaInfoCircle, FaPaperPlane, FaSignOutAlt, FaCog } from "react-icons/fa";
import Header from "../Header";

export default function SettingLayout({children}: {children : React.ReactNode}){
    const pathName = usePathname()

    const menuItems = [
    {href: "/settings/language", label: "Language", icon: <FaGlobe color="gray" /> },
    {href: "/settings/notification", label: "Notification", icon: <FaBell color="gray" /> },
    {href: "/settings/terms-of-use", label: "Terms of Use", icon: <FaClipboardList color="gray" /> },
    {href: "/settings/privacy-policy", label: "Privacy Policy", icon: <FaInfoCircle color="gray"/>},
    {href: "/settings/chat-support", label: "Chat Support", icon: <FaPaperPlane color="gray" /> },
    {href: "/settings/logout", label: "Log out", icon: <FaSignOutAlt color="gray" /> }
   ]

    return(
        <>
        <Header />
        <div className="flex  bg-[rgb(245,245,245)] gap-[36px] shadow-inner shadow-gray-500/40 text-black">
           

            <aside className="  w-[390px]  bg-white  mt-[39px] mb-[110px] ml-[87px] shadow-2xl  rounded-[17px]">

                <div className="flex items-center text-center gap-[10.02px] pl-[53.02px] pt-[40.92px] ">
                    <FaCog className="w-[29px] h-[29px] px-[3.02px] py-[2.42px] " />
                    <h1 className="flex  text-[29px] font-semibold">Settings</h1>
                </div>


                 <nav className="flex flex-col pl-[50px] pr-[84px]  pb-[141px] gap-[40px] ">
                {menuItems.map((item) => (
                    <Link 
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between pl-[10px]"
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