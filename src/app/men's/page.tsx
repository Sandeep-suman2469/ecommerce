
"use client";
import Image from "next/image";
import { useState } from "react";
import FilterSection from "../FilterSection";
import Header from "../Header";
import Footer from "../footer";



export default function MenProductsPage() {


  const products = [
    {id: 1, name: "Brown Dynamic", price: 549, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
    {id: 2, name: "Long Sleeve Dress", price: 399, oldPrice: 1299, discount: 57, image: "/image 6.svg" },
    {id: 3, name: "Bearly Awake Tee", price: 449, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
    {id: 4, name: "Long Sleeve Dress", price: 250, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
    {id: 5, name: "Long Sleeve Dress", price: 250, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
    {id: 6, name: "Long Sleeve Dress", price: 250, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
     {id: 7, name: "Long Sleeve Dress", price: 250, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
     {id: 8, name: "Long Sleeve Dress", price: 250, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
     {id: 9, name: "Long Sleeve Dress", price: 250, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
     {id: 10, name: "Long Sleeve Dress", price: 250, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
     {id: 11, name: "Long Sleeve Dress", price: 250, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
     {id: 12, name: "Long Sleeve Dress", price: 250, oldPrice: 1299, discount: 57, image: "/image 6.svg"},
  ]

  return (
    <>
    <Header />
    <div className="flex min-h-screen px-6 py-8 shadow-inner shadow-gray-500/40 bg-white">
    
      <aside className=" w-[250px] border border-gray-200 rounded-xl p-5 mb-[239px]  ">
        <h3 className="font-semibold text-[27px] mb-4 py-2 px-2 border-b-2 border-gray-200 text-black ">Filters</h3>

        <div className="space-y-6  text-sm text-gray-700">
          <FilterSection title="Category" options={["T-shirt", "Hoodies", "Sweatshirt", "Joggers"]} />
          <FilterSection title="Sizes" options={["S", "M", "L", "XL", "XXL"]} />
          <FilterSection title="Neck" options={["Round", "Polo", "collar"]} />
          <FilterSection title="Color" options={["Black", "Blue", "Green", "Gray"]} />
          <FilterSection title="Design" options={["textured", "aop", "typography", "solid","graphic print"]} />
          <FilterSection title="Ratings" options={["4.5 & above", "4 & above", "3.5 & above"]} />
          <FilterSection title="Discount" options={["10% or more", "30% or more", "50% or more"]} />
        </div>
      </aside>

     
      <main className="flex-1 ml-8 ">
       
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[38.35px] text-black font-bold">
            Clothes for Men{" "}
            <span className="text-gray-500 text-[24.9px] font-normal">3141 Products</span>
          </h2>
          <select className="border-2 border-[rgba(51,48,46,0.15)] py-[13px] pl-[24.8px] pr-[47.8px] rounded-[78px] text-black  text-sm  mr-[130px] ">
            <option>Sort by: Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        
        <div className="grid grid-cols-3 gap-[41.6px] mr-[130px]">
          {products.map((product) => (
            <div key={product.id} className=" rounded-lg p-3">
              <Image
                src={product.image}
                alt={product.name}
                width={262.06}
                height={357.73}
                className="rounded-lg object-cover w-full h-[350px]"
              />
              <h3 className="text-[15px] mt-2 text-gray-800">{product.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <p className="font-semibold text-[16px] text-black">₹{product.price}</p>
                <p className="text-gray-400 line-through text-[14px]">₹{product.oldPrice}</p>
                <p className="text-green-600 text-[14px] font-semibold">
                  {product.discount}% off
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}
