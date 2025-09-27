import Link from "next/link";
import Image from "next/image";

export default function Header(){

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
                <Image  src="/searchIcon.svg" alt="search_bar" width={25} height={25.21} />
                <Image  src="/whislist.svg" alt="wishlist" width={33} height={31} />
                <Image  src="/shop.svg" alt="cart" width={26} height={29.25} />
                <Image  src="/profileIcon.svg" alt="profile" width={44} height={44} />
            </div>
        </div>
    );
}