
import Image from "next/image";

export default function FilterPage(){
    
    const products = [
    {id: 1, name: "Brown Dynamic", price: 549, ratedBy : 64, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
    {id: 2, name: "Long Sleeve Dress", price: 399, ratedBy : 74, rating: "/5Star_rating.svg",  image: "/image 6.svg" },
    {id: 3, name: "Bearly Awake Tee", price: 449, oldPrice: 349,  ratedBy : 43, rating: "/4Star_rating.svg",  image: "/image 6.svg"},
    {id: 5, name: "Long Sleeve Dress", price: 250, ratedBy : 64, rating: "/4Star_rating.svg",  image: "/image 6.svg"},
    {id: 6, name: "Long Sleeve Dress", price: 250, ratedBy : 634, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 7, name: "Long Sleeve Dress", price: 250, oldPrice: 149, ratedBy : 56, rating: "/4Star_rating.svg",  image: "/image 6.svg"},
     {id: 8, name: "Long Sleeve Dress", price: 250, ratedBy : 90, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 9, name: "Long Sleeve Dress", price: 250, ratedBy : 81, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 10, name: "Long Sleeve Dress", price: 250, oldPrice: 149, ratedBy : 24, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 11, name: "Long Sleeve Dress", price: 250, ratedBy : 20, rating: "/4Star_rating.svg",  image: "/image 6.svg"},
     {id: 12, name: "Long Sleeve Dress", price: 250, ratedBy : 49, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 13, name: "Long Sleeve Dress", price: 250, ratedBy : 81, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 14, name: "Long Sleeve Dress", price: 250, oldPrice: 149, ratedBy : 24, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
     {id: 15, name: "Long Sleeve Dress", price: 250, ratedBy : 20, rating: "/4Star_rating.svg",  image: "/image 6.svg"},
     {id: 16, name: "Long Sleeve Dress", price: 250, ratedBy : 49, rating: "/5Star_rating.svg",  image: "/image 6.svg"},
  ]

    return(
        <>
        <div className="bg-white text-black">
            <div className="flex flex-col w-full justify-between">
                <h1 className="text-[38.35px] text-black font-bold">Found 72 Results</h1>
                <button className="border-2 border-gray-300 rounded-[29px]">Filter</button>
            </div>

            <div className="grid grid-cols-4 gap-[41.6px] mr-[130px]">
                {products.map((product) =>(
                    <div key={product.id} className="rounded-lg p3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={262}
                          height={357}
                          className="rounded-lg object-cover w-full"
                          />

                          <h2 className="text-[15px] text-gray-800">{product.name}</h2>
                          <div className="flex items-center gap-2 mt-1">
                             <p className="font-bold text-[16px] text-black">₹  {product.price}</p>
                             {product.oldPrice && (
                               <p className="text-gray-400 line-through text-[14px]">{product.oldPrice}</p>
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
                            <p className=" text-[16px] text-black"> ({product.ratedBy})</p>
                          </div>

                    </div>
                ))}
            </div>
        </div>
        </>
    );

}