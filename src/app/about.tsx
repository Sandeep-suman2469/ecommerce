import Image from "next/image";
import Header from "./Header";

export default function About(){
    return(
        <>
        <Header />
        <div className="bg-white ">
        <div className="bg-white px-[93px] pt-[44px] pb-[30px] shadow-inner shadow-gray-500/40">
            <Image className="" src="/image 5.svg" alt="wishlist" width={1254} height={498} />
        </div>
        <div className=" flex justify-center items-center text-center text-[20px] bg-gradient-to-r from-[rgba(66,48,41,1)] to-[rgba(168,122,105,1)] text-white">
         <span className="font-bold mr-1 my-[23px] "> Welcome to TrendTheByte  – </span> where comfort meets style in every T-shirt. 
        </div>
        <div className="flex text-black gap-[108px]  mx-[144px] mt-[115px] ">
           <div className="flex flex-col w-[620px]">
            <h1 className="font-semibold text-[67.47px]">Who We Are </h1>
            <p className="text-[24px]">At tothetrend, we believe fashion should be fun, trendy, and affordable.  Our journey started with a 
                simple idea – to create high-quality men’s & women’s T-shirts that speak your vibe. </p>

            <p className="text-[24px]">  Every design is crafted with love, keeping in mind comfort, durability, and the latest trends.  From casual everyday
                 wear to statement pieces, we’ve got something for every mood.</p>
            </div> 
           <div className=" flex justify-center items-center  ">
              <Image className="" src="/our-story.svg" alt="wishlist" width={423} height={310.28} />
           </div>
        </div>
        <div className="flex mx-[176px] gap-[100px] mt-[98px]  ">
            <div className="flex flex-col gap-[17px] bg-gradient-to-r from-[rgba(66,48,41,1)] to-[rgba(168,122,105,1)] pl-[49px] pr-[55px] pt-[37px] pb-[39px] rounded-[17px] ">
                <h1 className="text-[24px] font-semibold ">Our Mission</h1>
                <p className="text-[22px] ">To make trendy fashion accessible and comfortable 
                    for everyone without compromising on quality.</p>
            </div>
            <div className="flex flex-col gap-[17px] bg-gradient-to-r from-[rgba(66,48,41,1)] to-[rgba(168,122,105,1)] pl-[49px] pr-[55px] pt-[37px] pb-[39px] rounded-[17px] ">
                <h1 className="text-[24px] font-semibold ">Our Vision</h1>
                <p className="text-[22px]">To become the go-to brand for everyday fashion 
                    that connects people with their style and confidence.</p>
            </div>
        </div>

         <div className=" mx-auto px-4 py-10 text-center mt-[110px]  ">
            <h2 className="font-medium text-[31.49px] leading-[34.86px] tracking-[-0.02em] text-black">
                 <span className="font-semibold">For us, TrendTheByte is the spirit of looking at things differently.</span>
            </h2>

            <p className="mt-6 text-[18px] leading-[28px] text-black">
                Trying new things even when success is not guaranteed. <br />
                Not stepping on others to get ahead. <br />
                Thinking about the benefit of others just as you’d think about your own.
            </p>

            <p className="mt-6 text-[18px] leading-[28px] text-black">
                This was the spirit on which TrendTheByte® was founded in 2025. <br />
                With the belief that a business cannot be about financial gain alone.
            </p>

            <p className="mt-6 font-semibold text-[18px] leading-[28px] text-black">
                It is about making a positive impact. That’s what <span className="font-bold">TrendTheByte®</span> is about.
            </p>
         </div>

        <div className="flex flex-col bg-[rgba(66,48,41,1)] justify-center items-center mt-[91px]">
            <h1 className="font-medium text-[44.43px] mb-[64px] mt-[51px]">What makes us TrendTheByte<sup>®</sup> </h1>
            <div className="flex px-[204px] gap-[110px] mb-[60px]">
                <div className="flex flex-col w-[271px] justify-center items-center text-center text-[21px] border-2 rounded-[17px] border-[rgba(164,96,73,1)] py-[30px] px-[19px] ">
                    <h1>Trendy Styles</h1>
                    <p>Always in sync with the latest fashion.</p>
                </div>

                 <div className="flex flex-col w-[271px] justify-center items-center text-center text-[21px] border-2 rounded-[17px] border-[rgba(164,96,73,1)] py-[30px] px-[19px]">
                    <h1>Affordable</h1>
                    <p>Style shoudn't burn your pocket</p>
                </div>

                 <div className="flex flex-col w-[271px] justify-center items-center text-center text-[21px] border-2 rounded-[17px] border-[rgba(164,96,73,1)] py-[30px] px-[19px]">
                    <h1>Quality Fabric</h1>
                    <p>Soft, breathable, and durable cotton blends.</p>
                </div>


            </div>
        </div>
        </div>
        </>
    );

}