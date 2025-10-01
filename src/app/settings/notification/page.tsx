

export default function NotificationPage() {
  return (
     <div className="pl-[38px] pt-[24px] ">
      <h1 className="font-semibold text-[24px] text-[rgba(66,48,41,1)]">Notification</h1>
      <div className="flex justify-between pr-[55px]">
        <p className="text-[17px] font-normal text-[rgba(66,48,41,1)] ">Select your preffered language for using the platform</p> 
      </div>
      <div className="flex flex-col pr-[53px] border-[1px] border-[rgba(230,230,230)] gap-[43.59px] rounded-[17px] mb-[66px] pl-[19px] pt-[12px] mr-[53px] mt-[20px] pb-[20px]">
        
        <div className="flex justify-between">
            <div>
                <h1 className="text-[16.76px] font-normal">Show Notifications</h1>
                <p className="text-[11.97px] ">Receive push notifications for new messages</p>
            </div>

            <div className="relative inline-block w-11 h-5">
                <input
                    id="switch-component-blue"
                    type="checkbox"
                    defaultChecked={false}
                    className="peer appearance-none w-11 h-5 bg-gray-400 rounded-full checked:bg-[rgba(80,138,123,1)] cursor-pointer transition-colors duration-300"
                />
                <label
                    htmlFor="switch-component-blue"
                    className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-[rgba(80,138,123,1)] cursor-pointer"
                ></label>
            </div>
       </div>

        <div className="flex justify-between">
            <div>
                <h1 className="text-[16.76px] font-normal">Notification sounds</h1>
                <p className="text-[11.97px]">Play sound for new messages</p>
            </div>

            <div className="relative inline-block w-11 h-5">
                <input
                    id="switch-component-blue"
                    type="checkbox"
                    defaultChecked={false}
                    className="peer appearance-none w-11 h-5 bg-gray-400 rounded-full checked:bg-[rgba(80,138,123,1)] cursor-pointer transition-colors duration-300"
                />
                <label
                    htmlFor="switch-component-blue"
                    className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-[rgba(80,138,123,1)] cursor-pointer"
                ></label>
            </div>
       </div>

        <div className="flex justify-between">
            <div>
                <h1 className="text-[16.76px] font-normal">Lock screen notifications </h1>
                <p className="text-[11.97px]">Allow notification on the lock screen </p>
            </div>

            <div className="relative inline-block w-11 h-5">
                <input
                    id="switch-component-blue"
                    type="checkbox"
                    defaultChecked={false}
                    className="peer appearance-none w-11 h-5 bg-gray-400 rounded-full checked:bg-[rgba(80,138,123,1)] cursor-pointer transition-colors duration-300"
                />
                <label
                    htmlFor="switch-component-blue"
                    className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-[rgba(80,138,123,1)] cursor-pointer"
                ></label>
            </div>
       </div>



      
         </div>
    </div>
  );
}