import Image from "next/image";

export default function Home() {
  return (
    

    <div className="relative  w-[1440] h-[1024px] bg-cover bg-center bg-no-repeat"
         style={{backgroundImage: `url('./bgimage1.png')`}}>

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="absolute font-['Rage'] font-[400]  text-white text-[48px] sm:text-[64px] md:text-[80px] lg:text-[92.8px] w-[459px] h-[117px] top-[280px] left-[490px]  leading-[100%] tracking-[-0.02em]"
          > TrendTheByte</h1>

          <h1 className="absolute w-[862px] h-[96px]  top-[512px] left-[289px]  font-bold text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[100%] tracking-[-0.02em]"
             style={{
              fontFamily: "var(--font-poppins)"
             }}>Welcome to TrendTheByte!</h1>

          <div className="absolute w-[579px] h-[71px] top-[608px] left-[430px]  font-[var(--font-poppins)] text-[20px] sm:text-[28px] md:text-[36px] lg:``text-[47px] leading-[100%] tracking-[-0.02em] "
          style={{
              fontFamily: "var(--font-poppins)"
             }}>The Home For Fashionista</div>

          <button className="absolute rounded-full bg-white/40  w-[373px] h-[91px] top-[723px] left-[533px] border-[1px]"
          style={{
              fontFamily: "var(--font-poppins)"
             }}><span className=" font-[var(--font-poppins)] w-[238px] h-[65px] top-[736px] left-[600px] leading-[100%] tracking-[-0.02em] text-[43px]">Get Started</span></button>

        </div>

    </div>

  );
}




