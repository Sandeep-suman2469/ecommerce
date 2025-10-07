import Image from "next/image";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import CreatePassword from "./CreatePassword";
import ForgotPassword from "./ForgotPassword";
import ChangedPassword from "./ChangedPassword";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./footer";
import About from "./about";
import ProfileLayout from "./profile/layout";
import SettingLayout from "./settings/layout";
import MenProductsPage from "./men's/page";
import WomenProductsPage from "./women's/page";
import FilterPage from "./filter/page";
import FullProductPage from "./fullProduct/page";
import CartItems from "./CartItems/page";

export default function Home() {
  return (
    // <div className=" w-full h-screen   bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
    //    style={{backgroundImage: `url('./bgimage1.png')`,
    //           }}>
        
    //   <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center  text-center  ">
    //     <h1 className="font-['Rage']    lg:text-[92.8px] mb-24 tracking-[-0.02em]">TrendTheByte</h1>
    //     <h1 className=" lg:text-[64px] tracking-[-0.02em]"
    //     style={{
    //       fontFamily: "var(--font-poppins)"
    //     }}>Welcome to TrendTheByte!</h1>
    //     <p className="lg:text-[47px]"
    //     style={{
    //       fontFamily: "var(--font-poppins)"
    //     }}>The Home For Fashionista</p>
    //     <button className="rounded-full border-2 px-14 py-1 border-white bg-white/50 text-[43px] text-white mt-5 tracking-[-0.02em]"
    //     style={{
    //       fontFamily: "var(--font-poppins)"
    //     }}>Get Started</button>
    //   </div>
    // </div>

   <>
   {/* <SignUpForm/> */}
   {/* <LoginForm /> */}
   {/* <CreatePassword /> */}
   {/* <ForgotPassword /> */}
   {/* <ChangedPassword /> */}
    {/* <Header /> */}
    {/* <About /> */}
    {/* <HomePage /> */}
    {/* <Footer/> */}
    {/* <ProfileLayout /> */}
    {/* < SettingLayout /> */}
    {/* <MenProductsPage /> */}
    {/* <WomenProductsPage /> */}
    {/* <FilterPage /> */}
    {/* <FullProductPage/> */}
    <CartItems/>
   </>

  );
}




