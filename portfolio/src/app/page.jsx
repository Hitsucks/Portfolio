  import Image from "next/image";
  import  Navbar  from "./components/Navbar";
  import SplashCursor from "./components/Splashcursor";
  import DecryptedText from "./components/DecryptedText";
  import LetterGlitch from "./components/LetterGlitch";
  import ScrollVelocity from "./components/ScrollVelocity";
  import Crosshair from "./components/Crosshair";
  import Marquee from "react-fast-marquee";
  import Particles from "./components/Particles";
  import CardSwap from "./components/CardSwap";
  import Galaxy from "./components/Galaxy";
  import MagicBento from './components/MagicBento'
  import CircularGallery from "./components/CircularGallery";
  import ScrollStack from "./components/ScrollStack";
  import ScrollLock from "./components/Scrollock";
  import BlurText from "./components/BlurText";
  import RippleGrid from "./components/RippleGrid";
  import Threads from "./components/Threads";
  import TextType from "./components/TextType";
 

 


  export default function Home() {
    
    return (
    
<> 
     
  <div className="bg-neutral-950 h-screen text-white pb-6"> 
   
    {/* <div className="text-shadow"><Navbar/> </div> */}
     
    <ScrollVelocity
     texts={['110101111010110101001010101000001010100101010101010101011010101010101010101010']} 
     className="custom-scroll-text text-sky-500 font-[400] text-4xl pt-15"
    />

            <div className="">
                <div className="absolute w-full h-[82vh]">  
              
              <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={50}
                particleSpread={10}
                speed={0.5}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
  
              />
              </div>
            </div>
                    
  <div className="flex flex-col xl:flex-row justify-around items-center  0 h-170 pl-8 pt-10">
    
     <div className="flex">
        <DecryptedText className="text-5xl font-[600]"
        text="Supp !! My name is Raweeroj"
        animateOn="view"
        revealDirection="start"
        speed={50}
        maxIterations={5}
        sequential={true} 
        encryptedClassName="text-5xl"
        />

        </div>
      
          <div className="w-auto pr-6">
          <img src="/pictures/ww.png" alt="" className="rounded-4xl border-2"/>
          </div>
    </div> 

    <ScrollVelocity
     texts={['110101111010110101001010101000001010100101010101010101011010101010101010101010']} 
     className="custom-scroll-text text-sky-500 font-[400] text-4xl pt-20"
  
    />

      
</div>

{/* /* Slide Twoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */}
<div className="bg-gradient-to-b from-neutral-950 via-blue-900 to-neutral-950 h-screen flex justify-center ">
  <div style={{position: 'absolute', height: '1000px', overflow: 'hidden'}} className="z-[1] xl:flex-row">
  {/* <RippleGrid
    enableRainbow={false}
    gridColor="#000D8A"
    rippleIntensity={0.05}
    gridSize={10}
    gridThickness={15}
    mouseInteraction={true}
    mouseInteractionRadius={1.2}
    opacity={0.8}
  /> */}
</div>
  
  <div className="justify-around items-center pt-70">
  <div className=" flex justify-center ">
  <img src="/pictures/FAM2.png" alt="/pictures/FAM.png"  className="border-2 border-b-blue-100 rounded-full"/>
  </div>
      
      <div className="flex justify-center pt-5">
      <div className="flex flex-col w-100  ">
       <BlurText
        text="Why I must Stronger ???"
        delay={500}
        animateBy="words"
        direction="top"
        className="text-3xl font-medium mb-8 flex justify-center"
      /> 
       <div className="flex justify-center items-center border-1 p-4">
       <p className="">I was born in 2008 into a family that had gone through a divorce, which made our household’s financial situation quite difficult.But I don’t care about any of that—because I will become a strong adult who can take care of my family through coding and doing what I love. 
         I have many dreams in life that I must accomplish. I will use my coding skills to work, earn money, and trade Forex as well. I will use the money I earn to make my dreams come true and to gain new experiences in life, making my existence meaningful.
         In the end,  I’m not a hero or someone with special powers—just a kid who wants to make my family comfortable and give my life a sense of purpose.</p>
         </div>
         
         </div> 
    </div>
</div>
      </div>  {/*bg1*/}

{/* Slide Threeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
<div className="bg-gradient-to-b from-neutral-950 via-blue-900 to-neutral-950 h-500 pt-100">
   <div className="absolute w-full h-500">

    </div>
        <div className="flex justify-center pt-10 text-6xl font-medium">
        <h1>My Activities</h1>
        </div>

  <div className="gap-4 w-full p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center pt-20">
  <img src="/pictures/ACTIVITIES/1.webp" alt="" className="w-full object-cover border-2 border-white" />
  <img src="/pictures/ACTIVITIES/2.webp" alt="" className="w-full object-cover border-2 border-white" />
  <img src="/pictures/ACTIVITIES/3.webp" alt="" className="w-full object-cover border-2 border-white" />
  <img src="/pictures/ACTIVITIES/4.webp" alt="" className="w-full object-cover border-2 border-white" /> 
  
    <img src="/pictures/ACTIVITIES/5.webp" alt="" className="w-fullobject-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/6.webp" alt="" className="w-full object-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/7.webp" alt="" className="w-fullobject-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/8.webp" alt="" className="w-full object-cover border-3 border-white" />
 

    <img src="/pictures/ACTIVITIES/9.webp" alt="" className="w-full object-cover border-3  border-white" />
    <img src="/pictures/ACTIVITIES/10.webp" alt="" className="w-full object-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/11.webp" alt="" className="w-fullobject-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/12.webp" alt="" className="w-full object-cover border-3 border-white" />


 
    <img src="/pictures/ACTIVITIES/13.webp" alt="" className="w-full object-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/14.webp" alt="" className="w-full object-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/15.webp" alt="" className="w-full object-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/16.webp" alt="" className="w-full object-cover border-3 border-white" />



    <img src="/pictures/ACTIVITIES/17.webp" alt="" className="w-full object-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/18.webp" alt="" className="w-full object-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/19.webp" alt="" className="w-full object-cover border-3 border-white" />
    <img src="/pictures/ACTIVITIES/20.webp" alt="" className="w-full object-cover border-3 border-white" />

  </div>


   
  </div>


 




{/* Slide fourrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
<div className=" bg-gradient-to-b from-neutral-950 via-blue-900 to-blue-300 h-350  flex justify-center items-center">
  
<div className="absolute h-350 w-full ">
  <Threads
  amplitude={0.8}
  distance={1}
  color={[255,255,255]}
  />
</div>

<div className="pt-50">
 <div className=" justify-around items-center">    
      <div className="flex justify-center pt-30 text-4xl font-medium z-[20]"><TextType 
           text={["THIS IS MY STACKS", "THAT I'VE BEEN USE"]}
           typingSpeed={20}
           pauseDuration={1500}
           showCursor={true}
           cursorCharacter="|"
      /></div>

   
 
   
    <div className=" justify-center flex flex-wrap flex-row gap-4">
    
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#E44D26] to-[#F16529] hover:from-[#FF5E33] hover:to-[#FF7A4A] text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(244,93,38,0.4)] hover:shadow-[0_12px_48px_rgba(244,93,38,0.6)] hover:-translate-y-1 transition-all duration-300 border border-orange-400/20">
     < img src="/pictures/logo/html5.webp" alt="HTML5" className="w-7 h-7"/>
      HTML5
</div>
    </div>

    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#264DE4] to-[#2965F1] hover:from-[#3B6FF6] hover:to-[#5B89F9] text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(41,101,241,0.4)] hover:shadow-[0_12px_48px_rgba(41,101,241,0.6)] hover:-translate-y-1 transition-all duration-300 border border-blue-400/20">
                <img src="/pictures/logo/css.webp" alt="HTML" className="w-7 h-7"/>
                CSS
        </div>
    </div>
   

   <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#00599C] to-[#004482] hover:from-[#1A6FBF] hover:to-[#006BB3] text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(0,89,156,0.4)] hover:shadow-[0_12px_48px_rgba(0,89,156,0.6)] hover:-translate-y-1 transition-all duration-300 border border-blue-500/20">
                <img src="/pictures/logo/c++.webp" alt="HTML" className="w-7 h-7"/>
                C++
        </div>
    </div>

     <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#61DBFB] to-[#21A1C4] hover:from-[#7FE8FF] hover:to-[#3CC8E5] text-black rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(33,161,196,0.4)] hover:shadow-[0_12px_48px_rgba(33,161,196,0.6)] hover:-translate-y-1 transition-all duration-300 border border-cyan-300/20">
                <img src="/pictures/logo/react2.webp  " alt="HTML" className="w-7 h-7"/>
                REACT
        </div>
    </div>

     <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#000000] to-[#1A1A1A] hover:from-[#222222] hover:to-[#333333] text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300 border border-gray-600/20">
              <img src="/pictures/logo/nextjs.webp " alt="HTML" className="w-7 h-7"/>
                NEXT.JS
        </div>
    </div>

     <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#06B6D4] to-[#3B82F6] hover:from-[#1ECBE3] hover:to-[#5B9DFB] text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(6,182,212,0.4)] hover:shadow-[0_12px_48px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300 border border-cyan-400/20">
                <img src="/pictures/logo/tailwind.webp " alt="HTML" className="w-7 h-7"/>
                TAILWIND
        </div>
    </div>
</div>    
<div className="justify-center flex flex-wrap gap-3 flex-row">
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-emerald-400 to-teal-600 hover:from-emerald-300 hover:to-teal-500 text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_48px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 border border-emerald-400/20">
                <img src="/pictures/logo/blynk.webp" alt="HTML" className="w-7 h-7"/>
                BLYNK
        </div>
    </div>

    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#FFD500] to-[#FFB800] hover:from-[#FFDD33] hover:to-[#FFC233] text-black rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(255,184,0,0.4)] hover:shadow-[0_12px_48px_rgba(255,184,0,0.6)] hover:-translate-y-1 transition-all duration-300 border border-yellow-400/20">
                <img src="/pictures/logo/labview.webp " alt="HTML" className="w-7 h-7"/>
                LABVIEW
        </div>
    </div>
   

   <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#4A148C] to-[#6A1B9A] hover:from-[#6E1FAE] hover:to-[#8A33C4] text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(106,27,154,0.4)] hover:shadow-[0_12px_48px_rgba(106,27,154,0.6)] hover:-translate-y-1 transition-all duration-300 border border-purple-400/20">
                <img src="/pictures/logo/ciracore.webp " alt="HTML" className="w-15 h-7"/>
                CIRACORE
        </div>
    </div>

     <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#001E36] to-[#0A84FF] hover:from-[#003355] hover:to-[#3399FF] text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(10,132,255,0.4)] hover:shadow-[0_12px_48px_rgba(10,132,255,0.6)] hover:-translate-y-1 transition-all duration-300 border border-blue-400/20">
                <img src="/pictures/logo/ps.webp " alt="HTML" className="w-7 h-7"/>
                PHOTOSHOP
        </div>
    </div>

     <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700" className="z-[30] pt-10">
        <div className="flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-br from-[#00005B] to-[#430098] hover:from-[#1A1A7F] hover:to-[#5E00C7] text-white rounded-4xl font-semibold text-2xl shadow-[0_8px_32px_rgba(67,0,152,0.4)] hover:shadow-[0_12px_48px_rgba(67,0,152,0.6)] hover:-translate-y-1 transition-all duration-300 border border-purple-400/20">
                <img src="/pictures/logo/ae.webp " alt="HTML" className="w-7 h-7"/>
                AFTER EFFECT
        </div>
    </div>
</div>

</div>

</div>
</div>








  









</>

    
    );
  }
