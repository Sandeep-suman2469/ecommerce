

export default function LanguagePage() {
  return (
     <div className="pl-[38px] pt-[24px] ">
      <h1 className="font-semibold text-[24px] text-[rgba(66,48,41,1)]">Language</h1>
      <div className="flex justify-between pr-[55px]">
        <p className="text-[17px] font-normal text-[rgba(66,48,41,1)] ">Select your preffered language for using the platform</p>
        
      </div>
      <div className="flex flex-col pr-[53px] border-[1px] border-[rgba(230,230,230)] rounded-[17px] mb-[66px] pl-[19px] pt-[12px] mr-[53px] mt-[20px]">
         <div className="flex ">
            <input  type="checkbox" value="" className="px-2 py-2" />
            <label htmlFor="default-checkbox" className="">English</label>
         </div>
         <div className="flex">
            <input  type="checkbox" value="" className="outline-none border-4 border-red-600" />
            <label htmlFor="default-checkbox" className="">Hindi</label>
         </div>
         <div className="flex justify-end items-end  ">
         <button className=" text-white rounded-[7px] bg-[rgba(66,48,41,1)] px-[46px] py-[5px] mb-[19px] ">Done</button>
      </div>
         </div>
    </div>
  );
}