"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {FaUser, FaShoppingBag, FaCog, FaEnvelope, FaSignOutAlt} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAuthStore } from "./store/authStore";




export default function Header(){

    const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
    const [isOpen , setIsOpen] = useState<boolean>(false);

    const { logout } = useAuthStore();
    const router = useRouter();

    const handleLogout = () => {
    logout();
    router.push("/login"); 
    };

    const  toggleSearchBar = (): void => {
        setShowSearchBar((prev) => !prev);
    } 

    return(
        <div className="w-full h-[88px] bg-white text-black flex flex-row  justify-between shadow-lg">
            <div className="flex justify-center items-center text-center text-[39.65px] font-normal font-['Rage'] ml-[45px]">TrendTheByte</div>
            <div className="flex flex-row justify-center text-[23.64px] items-center text-center gap-x-[29px]">
                <Link href="#">Home</Link>
                <Link href="#">Shop All</Link>
                <Link href="#">Men's</Link>
                <Link href="#">Women's</Link>
                <Link href="#">About Us</Link>
            </div>
            <div className="flex flex-row justify-between gap-x-[37px] mr-[60px]">
                <button onClick={toggleSearchBar}><Image  src="/searchIcon.svg" alt="search_bar" width={25} height={25.21} /></button>
                {showSearchBar && (
                    <input type="text" placeholder="Search..." 
                    className="" /> 
                )}
                <Image  src="/whislist.svg" alt="wishlist" width={33} height={31} />
                <Image  src="/shop.svg" alt="cart" width={26} height={29.25} />
                <button onClick={() => setIsOpen(!isOpen)} >
                    <Image  src="/profileIcon.svg" alt="profile" width={44} height={44} />
                </button>
                {isOpen && (
                    <ul className="text-gray-400 mt-18 bg-amber-500 shadow-xl shadow-gray-500/30 ">
                       <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                           <FaUser /> My Profile
                       </li>
                       <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                           <FaShoppingBag /> My Order
                       </li>
                       <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                           <FaCog /> settings
                       </li>
                       <li 
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                           <FaSignOutAlt /> Logout
                       </li>

                    </ul>
                )}
            </div>
        </div>
    );
}