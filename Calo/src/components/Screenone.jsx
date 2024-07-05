import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import ash from "./assets/ash.svg";
import red from "./assets/red.svg";
import drop from "./assets/drop.svg";
import slide from "./assets/slide.svg";
import slider from "./assets/slider.svg";
import handsecond from "./assets/handsecond.svg";
import handfirst from "./assets/handfirst.svg";
import lady2 from "./assets/Rectangle 53 (1).png";
import back from "./assets/back.svg";
import front from "./assets/front.svg";
import like from "./assets/like.svg";
import likebox from "./assets/likebox.svg";



function Screenone() {
    return (
        <div className="flex flex-col gap-[55px] font-sans w-[1440px] h-[2678px] bg-[#FFFFFF]">
            <Navbar/>

<div className="flex w-[1318px] h-[119px] items-center gap-[70px] left-[75px] relative bg-[#111827]">
<div className="flex flex-col w-[609px] ml-[28px] h-[63px] gap-[18px]">
    <div className="w-[104px] text-left whitespace-nowrap h-[25px] font-semibold font-sans text-[20px] text-[#FFFFFF]">Ladies Top</div>
    <div className="w-[609px] text-left whitespace-nowrap h-[20px] font-sans text-[16px] text-[#9CA3AF]">Slash Sales begins in April. Get up to 80% Discount on all products 
        <span className="font-bold text-[#FFFFFF] cursor-pointer"> Read More </span></div>
</div>
<div className="flex">
    <img src={ash} alt="" className="-rotate-30 absolute left-[1118px] top-[7px]"/>
    <img src={red} alt="" className=" -rotate-30 absolute left-[1179px] top-[7px]"/>
</div>
</div>
    <div className="flex ml-[53px] gap-[670px]">
        <div className="w-[282px] h-[20px] text-[16px] ml-3 font-sans font-semibold">Showing 1 - 20 <span className="font-normal text-[16px] whitespace-nowrap text-[#000000] font-sans"> out of 2,356 Products </span></div>
        <div className="flex w-[189px] h-[20px] font-sans text-[16px] ml-[200px] font-normal gap-[8px]">
            <div className="text-[#6B7280]">Sort by:</div>
            <div className="font-semibold gap-1 text-[#1F2937] cursor-pointer flex">New Arrivals <span className="w-[11px]  mt-2 items-center h-[5.5px] text-[#111827]"><img src={drop} alt="" className=" " /></span></div>
        </div>
        </div>   
       
       
       <div className="flex ml-[70px] gap-7">
        <div className="w-[338px]  bg-[#F9FAFB] h-[1513px]">
            <div className="w-[290px] h-[1432px] text-left ml-6 mt-6 flex flex-col gap-[54px]">
            <div className="flex flex-col gap-[24px]">
                <h1 className="text-[#1F2937] uppercase font-semibold text-[16px] font-sans text-left">prices</h1>
                <div className="w-[290px] flex h-[18px] gap-[169px] text-[14px] font-sans font-normal text-[#4B5563] text-left">Range<span className="text-[#1F2937] 
                text-[14px] w-[77px] h-[18px]">$120 - $300</span></div>

<div className="flex flex-col relative">
    <img src={slide} alt="" className="relative" />

    {/* slider */}
    <div className="flex absolute left-[50px]">
<img src={slider} alt="" className="relative " />
<img src={handsecond} alt="" className="absolute left-[196px] top-[-5px]" />
<img src={handfirst} alt="" className="absolute left-[-12px] top-[-5px]" />
</div>
</div>
            </div>
            <div className="flex flex-col w-[86px] h-[184px] gap-[32px]">
                <div className="uppercase text-[#1F2937] font-sans font-semibold text-left text-[16px]">Filters</div>
                <div className="flex gap-[20px] flex-col">

  <div className="flex gap-[20px] items-center">
    <input type="checkbox" className=" w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Women</span>
  </div>

 
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Ladies</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Girls</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Babies</span>
  </div>
</div>

            </div>

            <div className="flex flex-col w-[86px] h-[184px] gap-[32px]">
                <div className="uppercase text-[#1F2937] font-sans font-semibold text-left text-[16px]">Brands</div>
                

            <div className="flex flex-col w-[158px] h-[488px] gap-[20px]">

            <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">H&M</span></div>
    <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Mark & Spencer</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Victoria’s Secret</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Dior</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Gucci</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Fendi</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Prada</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Versace</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Dolce & Gabbana</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Zara</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Chanel</span>
  </div>
  <p className="text-[14px] text-[#EB5757] font-sans font-normal text-center">+ 234 more</p>
</div>

  </div>

  <div className="flex flex-col w-[198px] mt-[320px]  gap-[32px]">
            <div className="uppercase text-[#1F2937] font-sans font-semibold text-left text-[16px]">Categories</div>
            <div className="flex flex-col w-[198px] h-[208px] gap-[20px]">
            <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Dresses</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Tops</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Lingerie & Lounge Wear</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Blouse</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Vintage</span>
  </div>
   <p className="text-[14px] text-[#EB5757] font-sans font-normal text-center mr-[60px]">+ 4 more</p>
</div>
</div>
        

        <div className="flex flex-col w-[128px] h-[184px] gap-[32px]">
        <div className="uppercase text-[#1F2937] font-sans font-semibold text-left text-[16px]">size</div>
        <div className="flex flex-col w-[128px] h-[132px] gap-[20px]">
        <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Medium</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Large</span>
  </div>
  <div className="flex gap-[16px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans font-normal">Plus Size</span>
  </div>
  <div className="flex gap-[8px] items-center">
    <input type="checkbox" className="mr-2 w-[18px] h-[18px] border-[1.5px] text-[#374151]" />
    <span className="text-[#1F2937] text-[14px] font-sans whitespace-nowrap font-normal">Sexy Plus Size</span>
  </div>
   
            </div>
        </div>
 </div>
            </div>


<div className="flex flex-col gap-5">
    <div className="flex gap-7">

    <div className="flex flex-col w-[297px] h-[491px] gap-[15px] border-[1px] border-[#E5E7EB]">

<img src={lady2} alt="" className="w-[297px] h-[343px] relative"/>
<img src={like} alt="" className="absolute left-[725px] z-10 top-[492px]" />
<img src={likebox} alt="" className="absolute left-[714px] z-0 top-[480px]" />
<div className="flex flex-col w-[265] h-[44px] gap-[8px]">
<h1 className="text-[14px] font-sans font-normal text-[#1F2937] leading-[22px] tracking-wide text-center w-[265px] h-[44px]">Striped Flutter Sleeve Overlap Collar
     <span className="mr-[107px]"> Peplum Hem Blouse</span></h1>
<div className="flex gap-[112px] justify-around">
<div className="text-[#374151] font-semibold text-[18px]">$120.23</div>
<div className="text-[#4B5563] text-[16px]">24 Orders</div>
</div>

<div className="flex gap-[90px] justify-around">
    <div className="text-[#9CA3AF] text-[18px] line-through">$120.23</div>
    <div className="w-[95px] h-[21px] gap-[10px] px-12px py-3px bg-[#111827]">
        <h1 className="text-[12px] text-align mt-[2px] text-[#FFFFFF]">New Arrivals</h1>
    </div>
</div>
</div>
</div>

<div className="flex flex-col w-[297px] h-[491px] gap-[15px] border-[1px] border-[#E5E7EB]">

<img src={lady2} alt="" className="w-[297px] h-[343px] relative"/>

<img src={like} alt="" className="absolute left-[1053px] z-10 top-[492px]" />
<img src={likebox} alt="" className="absolute left-[1040px] z-0 top-[480px]" />

<div className="flex flex-col w-[265] h-[44px] gap-[8px]">
<h1 className="text-[14px] font-sans font-normal text-[#1F2937] leading-[22px] tracking-wide text-center w-[265px] h-[44px]">Striped Flutter Sleeve Overlap Collar
     <span className="mr-[107px]"> Peplum Hem Blouse</span></h1>
<div className="flex gap-[112px] justify-around">
<div className="text-[#374151] font-semibold text-[18px]">$120.23</div>
<div className="text-[#4B5563] text-[16px]">24 Orders</div>
</div>


    <div className="text-[#9CA3AF] text-[18px] ml-[-206px] line-through">$120.23</div>

</div>
</div>

<div className="flex flex-col w-[297px] h-[491px] gap-[15px] border-[1px] border-[#E5E7EB]">

<img src={lady2} alt="" className="w-[297px] h-[343px] relative"/>
<img src={like} alt="" className="absolute left-[1377px] z-10 top-[492px]" />
<img src={likebox} alt="" className="absolute left-[1364px] z-0 top-[480px]" />

<div className="flex flex-col w-[265] h-[44px] gap-[8px]">
<h1 className="text-[14px] font-sans font-normal text-[#1F2937] leading-[22px] tracking-wide text-center w-[265px] h-[44px]">Striped Flutter Sleeve Overlap Collar
     <span className="mr-[107px]"> Peplum Hem Blouse</span></h1>
<div className="flex gap-[112px] justify-around">
<div className="text-[#374151] font-semibold text-[18px]">$120.23</div>
<div className="text-[#4B5563] text-[16px]">24 Orders</div>
</div>


    <div className="text-[#9CA3AF] text-[18px] ml-[-206px] line-through">$120.23</div>

</div>
</div>

</div>



    
    <div className="flex gap-7">
    <div className="flex flex-col w-[297px] h-[491px] gap-[15px] border-[1px] border-[#E5E7EB]">

<img src={lady2} alt="" className="w-[297px] h-[343px] relative"/>
<img src={like} alt="" className="absolute left-[725px] z-10 top-[1003px]" />
<img src={likebox} alt="" className="absolute left-[714px] z-0 top-[991px]" />

<div className="flex flex-col w-[265] h-[44px] gap-[8px]">
<h1 className="text-[14px] font-sans font-normal text-[#1F2937] leading-[22px] tracking-wide text-center w-[265px] h-[44px]">Striped Flutter Sleeve Overlap Collar
     <span className="mr-[107px]"> Peplum Hem Blouse</span></h1>
<div className="flex gap-[112px] justify-around">
<div className="text-[#374151] font-semibold text-[18px]">$120.23</div>
<div className="text-[#4B5563] text-[16px]">24 Orders</div>
</div>

<div className="flex gap-[90px] justify-around">
    <div className="text-[#9CA3AF] text-[18px] ml-[-207px] line-through">$120.23</div>
</div>
</div>
</div>
<div className="flex flex-col w-[297px] h-[491px] gap-[15px] border-[1px] border-[#E5E7EB]">

<img src={lady2} alt="" className="w-[297px] h-[343px] relative"/>
<img src={like} alt="" className="absolute left-[1053px] z-10 top-[1003px]" />
<img src={likebox} alt="" className="absolute left-[1040px] z-0 top-[991px]" />

<div className="flex flex-col w-[265] h-[44px] gap-[8px]">
<h1 className="text-[14px] font-sans font-normal text-[#1F2937] leading-[22px] tracking-wide text-center w-[265px] h-[44px]">Striped Flutter Sleeve Overlap Collar
     <span className="mr-[107px]"> Peplum Hem Blouse</span></h1>
<div className="flex gap-[112px] justify-around">
<div className="text-[#374151] font-semibold text-[18px]">$120.23</div>
<div className="text-[#4B5563] text-[16px]">24 Orders</div>
</div>

<div className="flex gap-[90px] justify-around">
    <div className="text-[#9CA3AF] text-[18px] line-through">$120.23</div>
    <div className="w-[95px] h-[21px] gap-[10px] px-12px py-3px bg-[#111827]">
        <h1 className="text-[12px] text-align mt-[2px] text-[#FFFFFF]">New Arrivals</h1>
    </div>
</div>
</div>
</div>
<div className="flex flex-col w-[297px] h-[491px] gap-[15px] border-[1px] border-[#E5E7EB]">

<img src={lady2} alt="" className="w-[297px] h-[343px] relative"/>
<img src={like} alt="" className="absolute left-[1377px] z-10 top-[1003px]" />
<img src={likebox} alt="" className="absolute left-[1364px] z-0 top-[991px]" />

<div className="flex flex-col w-[265] h-[44px] gap-[8px]">
<h1 className="text-[14px] font-sans font-normal text-[#1F2937] leading-[22px] tracking-wide text-center w-[265px] h-[44px]">Striped Flutter Sleeve Overlap Collar
     <span className="mr-[107px]"> Peplum Hem Blouse</span></h1>
<div className="flex gap-[112px] justify-around">
<div className="text-[#374151] font-semibold text-[18px]">$120.23</div>
<div className="text-[#4B5563] text-[16px]">24 Orders</div>
</div>


    <div className="text-[#9CA3AF] text-[18px] ml-[-203px] line-through">$120.23</div>

</div>
</div>


    </div>

    
    <div className="flex gap-7">
    <div className="flex flex-col w-[297px] h-[491px] gap-[15px] border-[1px] border-[#E5E7EB]">

<img src={lady2} alt="" className="w-[297px] h-[343px] relative"/>
<img src={like} alt="" className="absolute left-[725px] z-10 top-[1514px]" />
<img src={likebox} alt="" className="absolute left-[714px] z-0 top-[1502px]" />

<div className="flex flex-col w-[265] h-[44px] gap-[8px]">
<h1 className="text-[14px] font-sans font-normal text-[#1F2937] leading-[22px] tracking-wide text-center w-[265px] h-[44px]">Striped Flutter Sleeve Overlap Collar
     <span className="mr-[107px]"> Peplum Hem Blouse</span></h1>
<div className="flex gap-[112px] justify-around">
<div className="text-[#374151] font-semibold text-[18px]">$120.23</div>
<div className="text-[#4B5563] text-[16px]">24 Orders</div>
</div>

<div className="gap-[90px] justify-around">
    <div className="text-[#9CA3AF] text-[18px]  ml-[-207px] line-through">$120.23</div>
</div>
</div>
</div>
<div className="flex flex-col w-[297px] h-[491px] gap-[15px] border-[1px] border-[#E5E7EB]">

<img src={lady2} alt="" className="w-[297px] h-[343px] relative"/>
<img src={like} alt="" className="absolute left-[1053px] z-10 top-[1514px]" />
<img src={likebox} alt="" className="absolute left-[1040px] z-0 top-[1502px]" />

<div className="flex flex-col w-[265] h-[44px] gap-[8px]">
<h1 className="text-[14px] font-sans font-normal text-[#1F2937] leading-[22px] tracking-wide text-center w-[265px] h-[44px]">Striped Flutter Sleeve Overlap Collar
     <span className="mr-[107px]"> Peplum Hem Blouse</span></h1>
<div className="flex gap-[112px] justify-around">
<div className="text-[#374151] font-semibold text-[18px]">$120.23</div>
<div className="text-[#4B5563] text-[16px]">24 Orders</div>
</div>

<div className="flex gap-[90px] justify-around">
    <div className="text-[#9CA3AF] text-[18px] line-through">$120.23</div>
    <div className="w-[95px] h-[21px] gap-[10px] px-12px py-3px bg-[#111827]">
        <h1 className="text-[12px] text-align mt-[2px] text-[#FFFFFF]">New Arrivals</h1>
    </div>
</div>
</div>
</div>
<div className="flex flex-col w-[297px] h-[491px] gap-[15px] border-[1px] border-[#E5E7EB]">

<img src={lady2} alt="" className="w-[297px] h-[343px] relative"/>
<img src={like} alt="" className="absolute left-[1377px] z-10 top-[1514px]" />
<img src={likebox} alt="" className="absolute left-[1364px] z-0 top-[1502px]" />

<div className="flex flex-col w-[265] h-[44px] gap-[8px]">
<h1 className="text-[14px] font-sans font-normal text-[#1F2937] leading-[22px] tracking-wide text-center w-[265px] h-[44px]">Striped Flutter Sleeve Overlap Collar
     <span className="mr-[107px]"> Peplum Hem Blouse</span></h1>
<div className="flex gap-[112px] justify-around">
<div className="text-[#374151] font-semibold text-[18px]">$120.23</div>
<div className="text-[#4B5563] text-[16px]">24 Orders</div>
</div>


    <div className="text-[#9CA3AF] text-[18px] ml-[-203px] line-through">$120.23</div>

</div>
</div>




    </div>

    <div className="flex justify-end mt-[20px] cursor-pointer gap-[9px]">
        
           <button> <img src={back} alt="" className="w-[32px] h-[32px] flex border-[1px] bg-[#9CA3AF]"/></button>
        
        <div className="flex gap-[11px] w-[196px] h-[32px]">
            <div className="w-[32px] h-[32px] border-[1px] border-[#D1D5DB] text-[#4B5563] ">1</div>
            <div className="w-[32px] h-[32px] border-[1px] border-[#D1D5DB] text-[#4B5563] ">2</div>
            <div className="w-[32px] h-[32px] border-[1px] border-[#D1D5DB] text-[#4B5563] ">...</div>
            <div className="w-[32px] h-[32px] border-[1px] border-[#D1D5DB] text-[#4B5563] ">13</div>
           <button> <div className="w-[32px] h-[32px] flex border-[1px] bg-[#111827]">
                <img src={front} alt="" className=""/>
            </div></button>
        </div>
    </div>
</div>
       </div>
       
        <Footer/>
        </div>
    )
}
export default Screenone;