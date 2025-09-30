

export default function PaymentMethodPage() {
   return (
     <div className="pl-[38px] pt-[24px] ">
      <h1 className="font-semibold text-[24px] text-[rgba(66,48,41,1)]">Payment method</h1>
      <div className="flex justify-between pr-[55px]">
        <p className="text-[17px] font-normal text-[rgba(66,48,41,1)] ">Add or remove saved cards & payment options</p>
        <button className="text-white bg-[rgba(66,48,41,1)] rounded-[7px] px-[18px] py-[5px] font-medium">Rate Now</button>
      </div>
      <div className="flex flex-col pr-[53px] border-[1px] border-[rgba(230,230,230)] rounded-[17px] mb-[65px] pl-[19px] pt-[12px] mr-[53px] mt-[20px]">
          <h1 className="text-[rgba(66,48,41,1)] text-[20px] font-medium ">Visa .... 1234</h1>
        <p className="text-[15px] text-[rgba(0,0,0,0.7)] ">Expires 08/26 - John Doe</p>
        <div className="flex gap-2 font-medium text-17px py-[19px] ">
          <button className="text-white bg-[rgba(66,48,41,1)] rounded-[7px] px-[23px] py-[5px]">Edit</button>
          <button className="border-2 rounded-[7px] text-[rgba(66,48,41,1)] px-[12px] py-[5px]">Remove</button>
        </div>
      </div>
    </div>
  );
}