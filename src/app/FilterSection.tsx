
"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterSection({title, options}: {title: string; options: string[]}){
    const [open, setOpen] = useState(true);
    return(
        <div className="">
            <button
              onClick={()=> setOpen(!open)}
              className="flex w-full justify-between items-center text-[20px] font-medium">
                {title}
                {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {open && (
                <ul className="space-y-1 pl-1">
                    {options.map((opt, i) =>(
                       <li key={i} className="flex items-center gap-2 py-[10px]">
                           <input type="checkbox" className="w-4 h-4 accent-black" />
                           <label className="text-gray-600 text-[18px]">{opt}</label>
                       </li> 
                    ))}
                </ul>
              )}

        </div>
    );
}
