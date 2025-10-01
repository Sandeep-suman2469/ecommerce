

export default function LogoutPage() {
  return (
     <div className="pl-[38px] pt-[24px] ">
      <h1 className="font-semibold text-[24px] text-[rgba(66,48,41,1)]">Log Out</h1>
      <div className="flex justify-between pr-[55px]">
        <p className="text-[17px] font-normal text-[rgba(66,48,41,1)] ">Sign out from your account</p>
        <button className="text-white bg-[rgba(66,48,41,1)] rounded-[7px] px-[18px] py-[5px] font-medium">Rate Now</button>
      </div>
      <div className="flex flex-col pr-[53px] border-[1px] border-[rgba(230,230,230)] rounded-[17px] mb-[66px] pl-[19px] pt-[12px] mr-[53px] mt-[20px]">
        <p className="text-[15px] text-[rgba(0,0,0,0.7)] ">You will be signed out from all devices</p>
        <div className="flex gap-2 font-medium text-17px py-[19px] mb-[46px]">
          <button className="text-white bg-[rgba(66,48,41,1)] rounded-[7px] px-[12px] py-[5px]">Confirm</button>
          <button className="border-2 rounded-[7px] text-[rgba(66,48,41,1)] px-[12px] py-[5px]">Cancel</button>
        </div>
      </div>
    </div>
  );
}