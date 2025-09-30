

export default function VoucherPage() {
   return (
     <div className="pl-[38px] pt-[24px] ">
      <h1 className="font-semibold text-[24px] text-[rgba(66,48,41,1)]">Voucher</h1>
      <div className="flex justify-between pr-[55px]">
        <p className="text-[17px] font-normal text-[rgba(66,48,41,1)] ">Available discount & promo codes</p>
        <button className="text-white bg-[rgba(66,48,41,1)] rounded-[7px] px-[18px] py-[5px] font-medium">Apply code</button>
      </div>
      <div className="flex flex-col pr-[53px] border-[1px] border-[rgba(230,230,230)] rounded-[17px] mb-[66px] pl-[19px] pt-[12px] mr-[53px] mt-[20px] pb-[24px]">
        <h1 className="text-[rgba(66,48,41,1)] text-[20px] font-medium ">WELCOME10</h1>
        <p className="text-[15px] font-normal text-[rgba(0,0,0,0.7)] ">10% off on first purchase - valid until 2025-12-31</p>  
      </div>
    </div>
  );
}