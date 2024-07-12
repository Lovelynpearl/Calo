import React from "react";
import search from "./assets/search.svg";
import basket from "./assets/basket.svg";






function Navbar() {
    return (


<div className="flex flex-col gap-[20px] font-sans w-[1440px] ">
<div
        className="flex gap-[10px] w-[1440px] bg-[#FAFAFA] h-[86px] font-sans  pt-[24px] pr-[72px] pb-[32px] pl-[72px]">
        <div className="flex gap-[230px] w-[1440px] h-[30px] bg-[#FAFAFA] items-center  ">
          <div>
            <h1 className="text-[24px] text-black w-[170px] leading-[30.43px] h-[30px] whitespace-nowrap font-sans font-normal">
              Laura's Closet
            </h1>
          </div>

          <div className="  text-neutral-500 cursor-pointer w-[280px] border-[1px] border-[#9CA3AF] border-t-transparent border-l-transparent border-r-transparent h-[24px] flex flex-col">
            <div className="flex gap-[15px]">
              <img src={search} alt="search" className="w-[16px] h-[16px]" />
              <div>
                <p className="text-[#9CA3AF] text-[16px] font-normal leading-[20.29px]  font-sans w-[157px] h-[20px]">
                  Search for an item...
                </p>
              </div>

            </div>
          </div>
        

        <div className=" flex  ">
          <ul className="flex gap-[40px] h-[24px] cursor-pointer w-[386px] bg-[#FAFAFA] text-[#6B7280]
           font-sans text-[16px] font-normal ">
            <li className="w-[42px] h-[20px] ">Store</li>
            <li className="w-[67px]  h-[20px]">Account</li>
            <li className="w-[70px]  h-[20px]">WishList</li>
          
            <li className="font-bold text-[#1F2937] w-[87px] h-[24px]  relative">
              <img
                src={basket}
                alt="Basket"
                className="w-[24px] h-[24px] left-[80px] top-[-3px] font-sans font-semibold absolute"
              />{" "}
              Basket
            </li>
            
          </ul>
        </div>
      </div>
      </div>
      <div
        className="flex flex-row gap-[36px] text-[12px] font-sans cursor-pointer ml-[77px] font-bold whitespace-nowrap h-[24px] w-[1326px] bg-white text-[#374151]">
        <div className="flex flex-row font-sans w-[157px] h-[24px] gap-[8px]">
          <p className="font-sans text-[14px] font-semibold text-[#374151]">New Arrivals</p>
          <p className="text-white bg-[#EB5757] font-sans flex justify-center items-center w-[60px] text-center h-[24px] gap-[10px]">#Fresh</p>
        </div>
        <div className="">
          <ul className="flex flex-row font-semibold font-sans text-[14px] gap-[40px] text-[#374151]">
            <li>Dresses</li>
            <li>Tops</li>
            <li>Jackets</li>
            <li>Lingerie & Lounge Wear</li>
            <li>Beach Wear</li>
            <li>Blouse</li>
            <li>Denim</li>
            <li>Vintage</li>
            <li>Shoes</li>
            <li>Sandals</li>
            <li>Bags</li>
            <li>Jewelries</li>
          </ul>
        </div>
      </div>

</div>







    





    );

}

export default Navbar;