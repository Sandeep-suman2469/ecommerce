
import Image from "next/image";
import Header from "../Header";
import Link from "next/link";

export default function FullProductPage(){

    const Similar_products = [
    {id: 1, name: "Brown Dynamic", price: 39.99,   image: "/image 6.svg"},
    {id: 2, name: "Long Sleeve Dress", price: 45.00, image: "/image 7.svg" },
    {id: 3, name: "Bearly Awake Tee", price: 80.00, image: "/image 7.svg"},
    {id: 4, name: "Bearly Awake Tee", price: 75.00, image: "/image 8.svg"},
   
  ]

    return(
        <>
        <Header />
        <div className="bg-white shadow-inner shadow-gray-500/40">
            <div className="flex justify-between w-full px-[71px] pt-[39px] ">
                 <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
                  <Image  src="/red_heart.svg" alt="profile" width={52.73} height={52.73} />
            </div>

            <div className="flex  pl-[112px] pt-[41.68px] gap-[82px] pr-[107px] ">
                  <Image className="rounded-[23.79px]" src="/image 6.svg" alt="profile" width={506} height={669} />
                  <div className="flex flex-col text-black">
                      <h1 className="text-[55.78px] font-semibold">White Full Neck T-Shirt</h1>
                      <p className="flex items-center gap-4 font-medium text-[47.59px]">Rs 599  <span className="text-[36.06px] text-gray-400 line-through">(Rs 799 M.R.P)</span></p>
                      <p className="text-gray-400 text-[27.21px] font-medium ">(incl. of all taxes)</p>

                      <div className="flex gap-[32px] ">
                        <p className="font-medium text-[34.21px]">Choose your size:</p>
                         <select className=" bg-[rgba(217,217,217,1)] px-[17px]   rounded-[7px]  text-black text-[34.21px] ">
                                        <option>M</option>
                                        <option>S</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>Xs</option>
                                    </select>
                      </div>
                      
                      <div className="flex ">
                           <Image className="px-[7.36px] py-[7.36px]" src="/peachcolor.svg" alt="color" width={39.27} height={39.27} />
                           <Image className="px-[7.36px] py-[7.36px]" src="/blackcolor.svg" alt="color" width={39.27} height={39.27} />
                           <Image className="px-[7.36px] py-[7.36px]" src="/pinkcolor.svg" alt="color" width={39.27} height={39.27} />
                      </div>

                      <h1 className="font-medium text-[34.21px]">Description</h1>
                      <p className="font-normal text-[13.73px]">Sportswear is no longer under culture, it is no longer indie or cobbled together
                         as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down.</p>
                       <Link className=" underline mt-4 text-[rgba(80,138,123,1)]" href="#">Read more</Link>

                       <button className="inline-flex self-start  items-center rounded-[7px]  mt-8 text-white bg-[rgba(66,48,41,1)] text-[34.21px] py-[20px] px-[28px] gap-[3.5px] ">
                        <Image className="" src="/Filled.svg" alt="profile" width={35.91} height={27.5} /> Add to Cart</button>
                  </div>
            </div>

            <div className="flex flex-col mt-[112px] ">
                <h1 className="text-black pl-[114px] text-[41.6px] font-bold mb-[39.2px] ">Similar Products</h1>
                <div className="grid grid-cols-4 gap-[40px] pl-[125px] pr-[135.73px] mb-[79.76px]">
                    {Similar_products.map((prod) =>(
                        <div key={prod.id} className="">
                             <Image
                                src={prod.image}
                                alt={prod.name}
                                width={262.06}
                                height={357.73}
                                className="rounded-lg object-cover w-full"
                                />
    
                                <h2 className="text-[24.96px] font-normal text-gray-800 mt-[29.12px] ">{prod.name}</h2>
                                <p className="text-black text-[35.28px] font-bold">${prod.price}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        </>
    );
}
