
import Image from "next/image";
import Header from "../Header";
import Footer from "../footer";

export default function FilterPage(){
    
    const products = [
    {id: 1, name: "Brown Dynamic", price: 549,   image: "/image 6.svg"},
    {id: 2, name: "Long Sleeve Dress", price: 399, ratedBy : 74, rating: "/5Star_rating.svg",  image: "/image 8.svg" },
    {id: 3, name: "Bearly Awake Tee", price: 449, oldPrice: 349,  ratedBy : 43, rating: "/4Star_rating.svg",  image: "/image 7.svg"},
    {id: 4, name: "Bearly Awake Tee", price: 449, oldPrice: 349,  ratedBy : 43, rating: "/4Star_rating.svg",  image: "/image 8.svg"},
    {id: 5, name: "Long Sleeve Dress", price: 1199, ratedBy : 64, rating: "/4Star_rating.svg",  image: "/image 6.svg"},
    {id: 6, name: "Long Sleeve Dress", price: 250, ratedBy : 634, rating: "/5Star_rating.svg",  image: "/image 8.svg"},
     {id: 7, name: "Long Sleeve Dress", price: 650, oldPrice: 149, ratedBy : 56, rating: "/4Star_rating.svg",  image: "/image 7.svg"},
     {id: 8, name: "Long Sleeve Dress", price: 250, ratedBy : 90, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 9, name: "Long Sleeve Dress", price: 200, ratedBy : 81, rating: "/5Star_rating.svg",  image: "/image 8.svg"},
     {id: 10, name: "Long Sleeve Dress", price: 506, oldPrice: 149, ratedBy : 24, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 11, name: "Long Sleeve Dress", price: 799, ratedBy : 20, rating: "/4Star_rating.svg",  image: "/image 7.svg"},
     {id: 12, name: "Long Sleeve Dress", price: 250, ratedBy : 49, rating: "/5Star_rating.svg",  image: "/image 8.svg"},
     {id: 13, name: "Long Sleeve Dress", price: 250, ratedBy : 81, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 14, name: "Long Sleeve Dress", price: 999, oldPrice: 149, ratedBy : 24, rating: "/5Star_rating.svg",  image: "/image 8.svg"},
     {id: 15, name: "Long Sleeve Dress", price: 249, ratedBy : 20, rating: "/4Star_rating.svg",  image: "/image 7.svg"},
     {id: 16, name: "Long Sleeve Dress", price: 699, ratedBy : 49, rating: "/5Star_rating.svg",  image: "/image 8.svg"},
  ]

    return(
        <>
        <Header />
        <div className="bg-white text-black shadow-inner shadow-gray-500/40 pb-[114.47px]">
            <div className="flex  w-full justify-between px-[120px] pt-[80px] ">
                <h1 className="text-[38.35px] text-black font-bold">Found 72 Results</h1>
                <select className=" border-2 border-gray-300 rounded-[29px] px-[29.9px] py-[13px]">
                                        <option>Filter</option>
                                        <option>boys</option>
                                        <option>girls</option>
                                        
                                    </select>
            </div>

            <div className="grid grid-cols-4 gap-[41.6px] mx-[126px] mt-[69.2px] ">
                {products.map((product) =>(
                    <div key={product.id} className="rounded-lg p3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={262}
                          height={357}
                          className="rounded-lg object-cover w-full"
                          />

                          <h2 className="text-[21.86px] text-gray-800 mt-[25.5px]">{product.name}</h2>
                          <div className="flex items-center gap-2 mt-1">
                             <p className="font-bold text-[29.14px] text-black">₹  {product.price}</p>
                             {product.oldPrice && (
                               <p className="text-gray-400 line-through text-[21.86px]"> ₹{product.oldPrice}</p>
                             )}
                          </div>
                          <div className="flex items-center">
                            {product.rating && (
                               <Image
                                    src={product.rating}
                                    alt={product.name}
                                    width={99.01}
                                    height={13.69}
                                    className="rounded-lg object-cover w-full"
                          />
                            )}
                            <p className=" text-[18.22px] text-black"> ({product.ratedBy})</p>
                          </div>

                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </>
    );

}