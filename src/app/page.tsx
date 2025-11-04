import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./signup/page";
import LoginForm from "./login/page";
import CreatePassword from "./createpassword/page"
import ForgotPassword from "./ForgotPassword";
import ChangedPassword from "./changedpassword/page";
import Header from "./Header";
import HomePage from "./homepage/page"
import Footer from "./footer";
import About from "./about";
import ProfileLayout from "./profile/layout";
import SettingLayout from "./settings/layout";
import MenProductsPage from "./mens/page";
import WomenProductsPage from "./womens/page";
import FilterPage from "./filter/page";
import FullProductPage from "./fullProduct/page";
import CartItems from "./CartItems/page";
import CheckOut1 from "./checkout1/page";
import CheckOut2 from "./checkout2/page";
import CheckOut3 from "./checkout3/page";
import Orders from "./orders/page";
import OrderDetails from "./orderdetail/page";
import OrderInfo from "./orderInfo/page";
import ReviewPage from "./review/page";
import TrackOrder from "./trackorder/page";
import Verify from "./verify/page";

export default function Home() {
  return (
     <> 
  
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('./bgimage1.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 pb-[100px]">
    
   
          <h1
            className="font-['Rage'] text-white tracking-[-0.02em] mb-[397px] mt-[77px] sm:mb-16
            text-[43.06px] sm:text-[50px] md:text-[72px] lg:text-[92px] mx-[81px] "
          >
            TrendTheByte
          </h1>

    
          <h1
            className="text-white tracking-[-0.02em] font-bold
            text-[25px] sm:text-[35px] md:text-[40px] lg:text-[64px]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Welcome to TrendTheByte!
          </h1>

  
          <p
            className="text-white font-bold mt-2
            text-[16px] sm:text-[18px] md:text-[24px] lg:text-[32px]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            The Home For Fashionista
          </p>

          <Link href="/signup">
          <button
            className="mt-6 sm:mt-8 rounded-full  border-white text-white
            px-6 sm:px-10 md:px-14 py-2 sm:py-3 md:py-4
            text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]
            bg-white/30 hover:bg-white hover:text-black backdrop-blur-sm transition-all duration-300"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Get Started
          </button>
          </Link>
    </div>
  </div>
</>
 


  //  <>
  //  {/* <SignUpForm/> */}
  //  {/* <LoginForm /> */}

  //  {/* <CreatePassword /> */}
  //   {/* < Verify /> */}
  //  {/* <ForgotPassword /> */}
  //  {/* <ChangedPassword /> */}
  //   {/* <Header /> */}
  //   {/* <About /> */}
  //   {/* <HomePage /> */}
  //   {/* <Footer/> */}
  //   {/* <ProfileLayout /> */}
  //   {/* < SettingLayout /> */}
  //   {/* <MenProductsPage /> */}
  //   {/* <WomenProductsPage /> */}
  //   {/* <FilterPage /> */}
  //   {/* <FullProductPage/> */}
  //   {/* <CartItems/> */}
  //   {/* <CheckOut1 /> */}
  //   {/* <CheckOut2 /> */}
  //   {/* <CheckOut3 /> */}
  //   {/* <Orders /> */}
  //   {/* <OrderDetails /> */}
  //   {/* <OrderInfo/> */}
  //   {/* <ReviewPage /> */}
  //   {/* <TrackOrder /> */}
    
  //  </>

  );
}




