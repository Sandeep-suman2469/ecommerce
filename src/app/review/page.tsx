
"use client";
import Link from "next/link";
import Footer from "../footer";
import Header from "../Header";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";
import { useReviewStore } from "../store/reviewStore";


export default function ReviewPage(){

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");

  const { submitReview, loading, error, success } = useReviewStore();

  const searchParams = useSearchParams();
  const product_id = Number(searchParams.get("product_id")) || 0;

  const handleSubmit = async () => {
    if (!rating || text.trim().length < 5) {
      toast.error("Please add a rating and a meaningful comment!");
      return;
    }

    await submitReview(rating, text, product_id);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Review submitted successfully!");
      setRating(0);
      setText("");
    }
  };


    return(
         <>
            <Header />
            <div className="bg-[rgb(247,247,247)] text-black  shadow-inner shadow-gray-500/40 pb-[216px]">

            
                <div className="flex gap-[37.8px] ml-[94px] pt-[47px] items-center justify-start text-center ">
                    <Image  src="/backarrow.svg" alt="profile" width={52.73} height={52.73} />
                    <p className="text-[55.6px] font-bold "> Orders #1524 {product_id} </p>
                </div>

                <div className="flex justify-between text-center items-center text-white ml-[97px] mr-[91px] mt-[46px] pl-[78px] pr-[57px] pt-[47px] pb-[42px] rounded-[17px]  bg-[rgba(164,96,73,1)] ">
                    <div className="flex gap-[37px] items-center text-center">
                        <Image  src="/giftbox.svg" alt="profile" width={88} height={86.73} />
                        <h1 className="font-bold text-[45px] pt-4">Submit your review to get 5 points</h1>
                    </div>
                    <Image  src="/forward2.svg" alt="profile" width={23.5} height={47} />
                </div>

                <div className=" mx-auto min-h-[603px] mt-[55px] ml-[97px] mr-[91px] px-[52px] py-[43px] bg-white shadow rounded-xl">
                    <p className="text-gray-700 mb-4 text-[25.5px]">
                        Would you like to write anything about this product?
                    </p>

                
                    <textarea
                        className="w-full h-[500px]  rounded-[17px] p-3 text-[25.5px] focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>

                <div className="flex items-center justify-between mt-4">
                   
                    <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => {
                        const currentRating = index + 1;
                        return (
                        <FaStar
                            key={index}
                            size={34}
                            className={`cursor-pointer transition-colors duration-200 ${
                            currentRating <= (hover || rating)
                                ? "text-[rgba(164,96,73,1)]"
                                : "text-gray-400"
                            }`}
                            onClick={() => setRating(currentRating)}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(0)}
                        />
                        );
                    })}
                    </div>

                    <span className="text-gray-400 text-[25.5px]  ">
                          {text.length} characters
                    </span>
                </div>
                </div>
                   
                <div className="flex mt-[54px] mr-[90.75px] justify-end">
                      <button 
                        disabled={loading}
                        onClick={handleSubmit}
                        className="text-white text-[32.5px] border-1 border-gray-300 rounded-[17px] px-[68.96px] py-[9.29px] bg-[rgba(66,48,41,1)] ">
                             {loading ? "Submitting..." : "Submit Review"}</button>
                </div>

            </div>

            <Footer />
            </>
    );
}

