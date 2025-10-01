


export default function  TermsOfUsePage() {
  return (
     <div className="pl-[38px] pt-[24px] ">
      <h1 className="font-semibold text-[24px] text-[rgba(66,48,41,1)]">Terms Of Use</h1>
      <div className="flex justify-between pr-[55px]">
        <p className="text-[17px] font-normal text-[rgba(66,48,41,1)] ">Select your preffered language for using the platform</p>
        
      </div>
      <div className="flex flex-col pr-[53px] border-[1px] border-[rgba(230,230,230)] rounded-[17px] mb-[66px] pl-[19px] pt-[12px] mr-[53px] mt-[20px]">
         <div className="flex flex-col text-[rgba(66,48,41,1)] ">
            <h1 className="font-semibold text-[24px] ">1. Introduction</h1>
            <p>Welcome to our platform. By accessing or using our services, you agree to comply  with and be bound by these Terms of Use.</p>
          </div>
         <div className="flex flex-col text-[rgba(66,48,41,1)] ">
            <h1 className="font-semibold text-[24px] ">2. User Responsibilities</h1>
            <p>You agree to use the platform only for lawful purposes and in a manner that does  not infringe the rights of or restrict the use of this platform by any third party.</p>
         </div>
         <div className="flex flex-col text-[rgba(66,48,41,1)] ">
            <h1 className="font-semibold text-[24px] ">3. Limitation of Liability</h1>
            <p>We are not responsible for any direct, indirect, incidental, or consequential  damages resulting from your use of the platform.</p>
         </div>
         <div className="flex flex-col text-[rgba(66,48,41,1)]">
            <h1 className="font-semibold text-[24px] ">4. Changes to Terms</h1>
            <p>We reserve the right to update or modify these terms at any time without prior  notice. Continued use of the platform constitutes your acceptance of the updated terms.</p>
         </div>
         
         
         <div className="flex justify-end items-end  ">
         <button className=" text-white rounded-[7px] bg-[rgba(66,48,41,1)] px-[46px] py-[5px] mb-[19px] ">Accept & Continue</button>
      </div>
         </div>
    </div>
  );
}



