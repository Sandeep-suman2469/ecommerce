"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../footer";
import { useParams } from "next/navigation";
import ProtectedRoute from "../ProtectedRoute";
import { useEffect } from "react";
import { useProductStore, Product } from "../store/productStore";

export default function HomePage() {
  
  const { id } = useParams();
  const { products, selectedProduct, fetchAllProductMedia, productMedia, fetchProductById, loading, error, fetchProducts } = useProductStore();



  useEffect(() => {
    const loadData = async () => {
      await fetchProducts();
      await fetchAllProductMedia();
    };
    loadData();
  }, [fetchProducts, fetchAllProductMedia]);

 
  const justLaunched = products.filter((p: Product) => p.category_id === 3);
  const mensProducts = products.filter((p: Product) => p.category_id === 1);
  const womensProducts = products.filter((p: Product) => p.category_id === 2);

  return (
    <ProtectedRoute>
    <Header />
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

         {loading && <p className="text-center text-gray-600 mt-6">Loading products...</p>}
         {error && <p className="text-center text-red-500 mt-6">Error: {error}</p>}

        <div className="my-4">
        <div className="flex flex-row justify-between mx-34 my-4">
            <h1 className="text-[41.6px] font-bold text-black">Just Launched !!!</h1>
            <button className="text-gray-600"> Show all</button>
        </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10">
              {justLaunched.map((item: Product) => (
                <Link href={`/fullProduct/${item.id}`} key={item.id}>
                <div className="bg-gray-50 shadow p-4 rounded-xl hover:shadow-lg transition cursor-pointer">
                  <Image
                      src={item.media?.[0]?.url || "/placeholder.png"}
                      alt={item.name}
                      width={200}
                      height={250}
                      className="rounded-lg object-cover mb-2"
                    />
                  <p className="text-xl font-semibold text-black">{item.name}</p>
                  <p className="text-gray-600 text-lg">${item.price}</p>
                </div>
              </Link>
              ))}
            </div>
        </div>

        <div className="my-4">
        <div className="flex flex-row justify-between mx-34 my-4">
            <h1 className="text-[41.6px] font-bold text-black">For men's</h1>
            <button className="text-gray-600"> Show all</button>
        </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10">
              {mensProducts.map((item: Product) => (
                <Link href={`/fullProduct/${item.id}`} key={item.id}>
                <div className="bg-gray-50 shadow p-4 rounded-xl hover:shadow-lg transition cursor-pointer">
                  <Image
                      src={item.media?.[0]?.url || "/placeholder.png"}
                      alt={item.name}
                      width={200}
                      height={250}
                      className="rounded-lg object-cover mb-2"
                    />
                  <p className="text-xl font-semibold text-black">{item.name}</p>
                  <p className="text-gray-600 text-lg">${item.price}</p>
                </div>
              </Link>
              ))}
            </div>
        </div>

        <div className="my-4">
        <div className="flex flex-row justify-between mx-34 my-4">
            <h1 className="text-[41.6px] font-bold text-black">For Women's</h1>
            <button className="text-gray-600"> Show all</button>
        </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10">
              {womensProducts.map((item: Product) => (
                <Link href={`/fullProduct/${item.id}`} key={item.id}>
                <div className="bg-gray-50 shadow p-4 rounded-xl hover:shadow-lg transition cursor-pointer">
                  <Image
                      src={item.media?.[0]?.url || "/placeholder.png"}
                      alt={item.name}
                      width={200}
                      height={250}
                      className="rounded-lg object-cover mb-2"
                    />
                  <p className="text-xl font-semibold text-black">{item.name}</p>
                  <p className="text-gray-600 text-lg">${item.price}</p>
                </div>
              </Link>
              ))}
            </div>
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
        <div className="flex flex-row mix-h-[663.04px] mx-34 mt-8 rounded-4xl gap-x-8">
            <div className="flex flex-row rounded-4xl bg-[rgb(248,248,250)]">
                <Image className=" rounded-4xl bg-[rgb(248,248,250)] " src="/image 3.svg" alt="googlelogo" width={384.62} height={387.73} />
                <div className="flex flex-col font-normal text-left items-center justify-center">
                <p className="flex  text-gray-600 text-[44.43px]">T-Shirt</p>
                <p className=" flex px-10 text-[51.41px] text-black ">The Office Life</p>
                </div>
            </div>
            <div className="flex flex-row rounded-4xl bg-[rgb(248,248,250)]">
                <div className="flex flex-col font-normal items-center justify-center">
                <p className="flex  text-gray-600  text-[44.43px] mt-6">Dresses</p>
                <p className=" flex  text-[51.41px] text-black px-18 ">Elegant Design </p>
                </div>
                <Image className=" rounded-4xl bg-[rgb(248,248,250)] " src="/image 4.svg" alt="googlelogo" width={384.62} height={387.73} />
            </div>
        </div>     
      </div>  
    </div>
    <Footer />
    </ProtectedRoute>
  );
}
