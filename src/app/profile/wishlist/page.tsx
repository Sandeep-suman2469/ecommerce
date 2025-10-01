
import Image from "next/image";
export default function WishListPage() {

  const Wishlist = [
    { id: 1, name: "Turtleneck Sweater", price: 39.99, image: "/image 6.svg" },
    { id: 2, name: "Long Sleeve Dress", price: 45.0, image: "/image 7.svg" },
    { id: 3, name: "Sportwear Set", price: 80.0, image: "/image 8.svg" }
  ];
  return (
     <div className="pl-[38px] pt-[24px] ">
      <h1 className="font-semibold text-[24px] text-[rgba(66,48,41,1)]">My Wishlist</h1>
      <div className="flex justify-between pr-[55px]">
        <p className="text-[17px] font-normal text-[rgba(66,48,41,1)] ">items you saved for later</p>
        <button className="text-white bg-[rgba(66,48,41,1)] rounded-[7px] px-[25px] py-[5px] font-medium">View All</button>
      </div>
      <div className="flex flex-col pr-[53px] border-[1px] border-[rgba(230,230,230)] rounded-[17px] mb-[66px] pl-[19px] pt-[12px] mr-[53px] mt-[20px]">
        <p className="text-[15px] text-[rgba(0,0,0,0.7)] mb-[26px]">You have 3 items in your wishlist</p>
        <div className="flex  gap-4 ">
                 {Wishlist.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center  gap-[27.43px]  pb-3 last:border-0"
            >
             
              <Image
                src={item.image}
                alt={item.name}
                width={172.78}
                height={235.86}
                className="rounded-lg object-cover"
              />

              <div className="flex flex-col">
                <span className="text-[14px] font-medium">{item.name}</span>
                <span className="text-[21.94px] font-bold">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}