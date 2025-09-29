import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full bg-white shadow-inner shadow-gray-500/30 p-4">
      <div className="mx-4">
        <div className="flex flex-row justify-evenly text-center ">
            <button className="">
            <Image src="/backward1.svg" alt="back_btn" width={47} height={47} />
            </button>
            <button className="">
            <Image src="/homeimg.svg" alt="homeimg" width={1200} height={476} />
            </button>
            <button className=" ">
            <Image src="/forwardArrow.svg" alt="forward_arrow" width={47} height={47} />
            </button>
        </div>
        <div className="flex flex-row justify-between mx-34 my-4">
            <h1 className="text-[41.6px] font-bold text-black">Just Launched !!!</h1>
            <button className="text-gray-600"> Show all</button>
        </div>
        <div className="flex flex-row justify-between mx-34 my-4">
            <h1 className="text-[41.6px] font-bold text-black">For men's</h1>
            <button className="text-gray-600"> Show all</button>
        </div>
        <div className="flex flex-row justify-between mx-34 my-4">
            <h1 className="text-[41.6px] font-bold text-black">For Women's</h1>
            <button className="text-gray-600"> Show all</button>
        </div>
        <div className="flex flex-row justify-start mx-34 my-4">
            <h1 className="text-[41.6px] font-bold text-black">Top Collections</h1>
        </div>
        <div className="flex justify-between justify-items-center rounded-4xl bg-[rgb(248,248,250)] mx-34 px-40 py-4">
            <div className="flex flex-col justify-start items-start font-normal py-14">
              <p className="flex   text-gray-600 text-[29.6px]">Sale upto 40%</p>
              <p className="text-gray-600 text-[49.34px] mt-8">FOR SLIM & BEAUTY</p>
            </div>
            <Image className="rounded-full bg-[rgb(236,236,236)] " src="/image 1.svg" alt="googlelogo" width={384.62} height={387.73} />
        </div>
        <div className="flex justify-between justify-items-center rounded-4xl gap-x-10 bg-[rgb(248,248,250)] mx-34 px-40 py-4 mt-6">
            <Image className="rounded-full bg-[rgb(236,236,236)] " src="/image 2.svg" alt="googlelogo" width={384.62} height={387.73} />
            <div className="flex flex-col font-normal py-14">
              <p className="flex justify-end text-right text-gray-600 text-[29.6px]">Summer Collection 2025</p>
              <p className=" flex justify-end text-right text-black text-[51.41px] mt-8 ml-45">Most sexy & fabulous design </p>
            </div>
        </div>
        <div className="flex flex-row mx-34 mt-8 rounded-4xl gap-x-8">
            <div className="flex flex-row rounded-4xl bg-[rgb(248,248,250)]">
                <Image className=" rounded-4xl bg-[rgb(248,248,250)] " src="/image 3.svg" alt="googlelogo" width={384.62} height={387.73} />
                <div className="flex flex-col font-normal items-center justify-center">
                <p className="flex text-left  text-gray-600 text-[44.43px]">T-Shirt</p>
                <p className=" flex  text-[51.41px] text-black ">The Office Life</p>
                </div>
            </div>
            <div className="flex flex-row rounded-4xl bg-[rgb(248,248,250)]">
                <div className="flex flex-col font-normal items-center justify-center">
                <p className="flex  text-gray-600  text-[44.43px] mt-6">Dresses</p>
                <p className=" flex  text-[51.41px] text-black ">Elegant Design </p>
                </div>
                <Image className=" rounded-4xl bg-[rgb(248,248,250)] " src="/image 4.svg" alt="googlelogo" width={384.62} height={387.73} />
            </div>
        </div>
        
      </div>  
    </div>
  );
}
