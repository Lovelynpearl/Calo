import React from "react";
import { Link } from "react-router-dom";
import basket from "./assets/basket.svg";
import search from "./assets/search.svg";

import "./styles.css";
import lady from "./assets/image-removebg-preview 1.png";
import circle from "./assets/Ellipse 11.png";
import mask from "./assets/Mask group (1).png";
import arrow from "./assets/Vector 8.png";
import dash from "./assets/dash.svg";
import pic1 from "./assets/Rectangle 47 (1).png";
import pic2 from "./assets/Rectangle 51 (2).png";
import pic3 from "./assets/Rectangle 57 (1).png";
import pic4 from "./assets/Rectangle 56 (1).png";
import dash2 from "./assets/Rectangle 60.png";
import lady1 from  "./assets/Rectangle 52 (1).png";
import lady2 from "./assets/Rectangle 53 (1).png";
import lady3 from "./assets/Rectangle 54 (1).png";
import lady4 from "./assets/Rectangle 55 (1).png";
import dash3 from "./assets/dash3.svg";
import chanel from "./assets/Rectangle 68.png";
import dolce from "./assets/Rectangle 66.png";
import dior from "./assets/Rectangle 69.png";
import varsace from "./assets/Rectangle 65.png";
import zara from "./assets/Rectangle 67.png";
import gucci from "./assets/Rectangle 70.png";
import dress from "./assets/image 6 (1).png";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import tiktok from "./assets/tiktok.svg";
import snapchat from "./assets/snapchat.svg";
import andriod from "./assets/andriod.svg";
import apple from "./assets/apple.svg";
import mastercard from "./assets/master.svg";
import paypal from "./assets/paypal.svg";
import ebay from "./assets/ebay.svg";
import gpay from "./assets/gpay.svg";
import monobank from "./assets/monobank.svg";
import discover from "./assets/discover.svg";
import western from "./assets/westernunion.svg";
import payoneer from "./assets/payoneer.svg";
import applepay from "./assets/applepay.svg";
import american from "./assets/american.svg";
import amazon from "./assets/amazon.svg";
import alipay from "./assets/AliPay.svg";
import bitpay from "./assets/BitPay.svg";
import bitcoin from "./assets/bitcoin.svg";
import vector from "./assets/vector.svg";
import hambuger from "./assets/hambuger.svg";

function Home() {
  return (
    <div className="flex flex-col font-sans gap-[20px] w-[390px] lg:w-full">
      {/* <h1 className="bg-red-600">This is the home page</h1> */}
      {/* <Link to="about">Click to view our about page</Link> */}
      {/* <Link className="text-[#000000]" to="NavBar">navabar</Link> */}

      {/* navbar section? */}
      {/* large screen */}
      <div
        className="lg:flex gap-[10px] w-[1440px] h-[86px] font-sans bg-[#FAFAFA] pt-[24px] pr-[72px] pb-[32px] pl-[72px] hidden">
        <div className="flex gap-[230px] w-[1440px] h-[30px] bg-[#FAFAFA]  items-center  ">
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
      <Link to="screenone">
      <li className="w-[42px] h-[20px] ">Store</li></Link>
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
      {/* mobile screen */}

      <div className="lg:hidden flex w-[388px] h-[24px] justify-between">
<div className="flex w-[143px] h-[20px] gap-[10px]">
<img src={hambuger} alt="" className="w-[16px] h-[13px] text-[#000000]"/>
<div className="w-[113px] h-[20px] font-sans font-semibold text-[16px] text-[#374151]">Laura’s Closet</div>
</div>

<div className="flex w-[63px] h-[24px] justify-between">
  <img src={search} alt="" className="w-[16px] h-[16px] text-[#9CA3AF]"/>
  <img src={basket} alt="" className="w-[24px] h-[24px] gap-[8px] text-[#000000]"/>
</div>
      </div>


      {/* second navbar? */}

      <div
        className="flex flex-row gap-[36px] text-[12px] font-sans cursor-pointer ml-[77px] font-bold whitespace-nowrap  bg-white text-[#374151]">
        <div className="flex flex-row font-sans  w-[157px] h-[24px] gap-[8px]">
          <p className="font-sans text-[14px] font-semibold text-[#374151]">New Arrivals</p>
          <p className="text-white bg-[#EB5757] font-sans flex justify-center items-center w-[60px] text-center h-[24px] gap-[10px]">#Fresh</p>
        </div>
        <div className="">
          <ul className="lg:flex flex-row hidden font-semibold font-sans text-[14px] gap-[40px] text-[#374151]">
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

 {/* this contains section 1 and 2 */}
<div className="main flex flex-col gap-[100px]">

      {/* section one */}

      <div className="parent flex flex-row h-[645px] relative bg-[#F7C59F] w-[1440px]">
        <div className="bigchild w-[930px] relative h-[645px] bg-[#1C2333]">
          <img
            src={mask}
            alt=""
            className="bigbox absolute h-[645px] w-[930px]"
          />

          <div className="smallbox bg-[#1F2937] flex flex-col w-[556px] absolute top-[130px] left-[96px] p-[40px] h-[385px] gap-[56px] ">
            <div className="flex gap-[16px] mt-[-10px] flex-col">
              <h1 className="w-[476px] h-[71px] text-[#FAFAFA] text-[57px] text-left font-semibold font-sans whitespace-nowrap">
                Get up to 30% off{" "}
              </h1>
              <h1 className="font-semibold text-[#F7C59F] text-[57px] font-sans text-left">
                {" "}
                New Arrivals
              </h1>
              <p className="text-[#F3F4F6] font-sans font-normal tracking-wider text-[18px] text-left">
                Introducing our latest collection of products
              </p>

            </div>

            {/* <div className="flex flex-col gap-[60px]"> */}

              <div className="flex gap-[16px] cursor-pointer flex-row border-[1px] w-[235px] h-[44px] items-center justify-center pl-[12px] pr-[12px] pt-[16px] pb-[16px]">
                <div className=" text-[#FAFAFA] font-semibold text-center font-sans whitespace-nowrap text-l">
                  PLACE YOUR ORDER
                </div>
                <img
                  src={arrow}
                  alt="arrow"
                  className=" text-[#FFFFFF] w-[24px]"
                />
              {/* </div> */}
            </div>
          </div>
        </div>
        <img
          src={circle}
          alt=""
          className="w-[347px] h-[347px] absolute top-[160px] inset-0 object-cover left-[1020px] z-0"
        />

        <img
          src={lady}
          alt=""
          className=" h-[607px] absolute w-[312px] left-[1040px] top-[60px] z-10"
        />
      </div>

      {/* second section? */}
      <div className="parent flex flex-col gap-[50px]">
        {/* subheading */}
        <div className="flex ml-[187px] flex-col gap-2">
          <h1 className="text-center font-sans font-semibold text-2xl text-[#374151]">
            This Weeks Highlights
          </h1>
          <div className="justify-center flex">
            <img src={dash} alt="" className="" />
          </div>
        </div>

{/* picture gallery */}
        <div className="parent3 flex flex-col  gap-4">
<div className=" child cursor-pointer flex ml-[100px] gap-4">
  
    <img src={pic1} alt="" className="w-full h-full inset-0 z-0 relative" />
    <h1 className="w-[358px] h-[142px] font-semibold text-[56px] font-sans leading-[71.01px] top-[1190px] left-[185px] z-10 absolute  text-[#FAFAFA]
">Exclusive 
    Shoes</h1>
    <div className="flex w-[221px] h-[100px] border-[1px] text-justify gap-[10px] bg-[#0000004D] border-[#F9FAFB0D] backdrop-blur-md bg-opacity-30 top-[1400px] left-[165px] z-10 flex-col absolute">
<div className="gap-[16px] flex flex-col ml-2 mt-[4px]">
  <div className="flex flex-col gap-[8px]">
  <h1 className="text-[18px] font-semibold text-[#F9FAFB] font-sans">Exclusive Shoes</h1>
<p className="text-[12px] font-normal text-[#F3F4F6] font-sans">PRICE 20% OFF</p></div>
<p className="font-normal text-[14px] text-[#F9FAFB] font-sans">DISCOUNT CODE <span className=" text-[#F3F4F6]">- VATR3920</span> </p>
</div></div>

  
    <img src={pic2} alt="" className="w-full h-full relative" />
    <h1 className="w-[526px] h-[142px] font-semibold text-[56px] font-sans leading-[71.01px] top-[1190px] left-[740px]  absolute text-[#FAFAFA]
">Exquisite Styles & Collections</h1>
<div className="flex w-[291px] h-[100px] border-[1px] text-justify gap-[10px] bg-[#0000004D] border-[#F9FAFB0D] backdrop-blur-md bg-opacity-30 left-[647px] top-[1400px] flex-col absolute">
<div className="gap-[16px] flex flex-col ml-2 mt-[4px]">
<div className="flex flex-col gap-[8px]">

<h1 className="text-[18px] font-semibold text-[#F9FAFB] font-sans">Exquisite Styles & Collections</h1>
<p className="text-[12px] font-normal text-[#F3F4F6] font-sans">PRICE 20% OFF</p></div>
<p className="font-normal text-[14px] text-[#F9FAFB] font-sans">DISCOUNT CODE <span className=" text-[#F3F4F6]">- VATR3920</span> </p>
</div>
</div>

  
</div>



<div className="child2 ml-[100px] cursor-pointer gap-4 flex">
<img src={pic3} alt="" className="w-full h-full relative" />
<h1 className="w-[356px] h-[71px] font-semibold text-[56px] font-sans leading-[71.01px] absolute top-[1722px] left-[340px]  text-[#FAFAFA]
">New Arrivals</h1>
    <div className="flex w-[221px] h-[100px] border-[1px] text-justify gap-[10px] bg-[#0000004D] backdrop-blur-md bg-opacity-30 border-[#F9FAFB0D] top-[1927px] left-[162px] flex-col absolute">
<div className="gap-[16px] flex flex-col ml-2 mt-[4px]">
<div className="flex flex-col gap-[8px]">

<h1 className="text-[18px] font-semibold text-[#F9FAFB] font-sans">Exclusive Shoes</h1>
<p className="text-[12px] font-normal text-[#F3F4F6] font-sans">PRICE 20% OFF</p></div>
<p className="font-normal text-[14px] text-[#F9FAFB] font-sans">DISCOUNT CODE <span className=" text-[#F3F4F6]">- VATR3920</span> </p>
</div>
</div>

<img src={pic4} alt="" className="w-full h-full relative" />
<h1 className="w-[358px] h-[142px] font-semibold text-[56px] font-sans leading-[71.01px] absolute top-[1695px] left-[973px] text-[#FAFAFA]
">Exclusive Items</h1>
<div className="flex w-[221px] h-[100px] border-[1px] gap-[10px] text-justify bg-[#0000004D] backdrop-blur-md bg-opacity-30 border-[#F9FAFB0D] left-[940px] top-[1928px] flex-col absolute">
<div className="gap-[16px] flex flex-col ml-2 mt-[4px]">
<div className="flex flex-col gap-[8px]">

<h1 className="text-[18px] font-semibold text-[#F9FAFB] font-sans text-left">New Arrivals</h1>
<p className="text-[12px] font-normal text-[#F3F4F6] font-sans text-left">PRICE 20% OFF</p></div>
<p className="font-normal text-[14px] text-[#F9FAFB] font-sans text-left">DISCOUNT CODE <span className=" text-[#F3F4F6]">- VATR3920</span> </p>
</div>
</div>
</div>
        </div>
      </div>

      {/* Section 3 */}
<div className="parent2 w-[1248px] h-[521px] flex flex-col gap-[50px]">
          {/* subheading */}
          <div className="flex ml-[187px] flex-col gap-2">
          <h1 className="text-center font-sans font-semibold text-2xl text-[#374151
]">
          Popular this week
          </h1>
          <div className="justify-center flex">
            <img src={dash2} alt="dash2" className="w-[88px] h-[4px] " />
            </div>
        </div>
 {/* pictures */}
 <div className="flex w-full cursor-pointer ml-[100px] gap-4">
<div className="flex flex-col w-[297px] h-[423px] gap-[8px]">
  <img src={lady1} alt=""  className="w-[297px]"/>
  <div className="flex flex-col w-[297] h-[72px] gap-[8px]">
  <h1 className="text-[14px] font-sans font-normal text-[#374151] leading-[22px] tracking-wide text-left w-[297px] h-[44px]">Striped Flutter Sleeve Overlap Collar <br /> Peplum Hem Blouse</h1>
  <div className="flex w-[297px] justify-between h-[20px]">
    <div className="w-[132px] h-[20px] text-left text-[16px] font-sans font-semibold">$120.23  <span className="font-normal text-[#374151] ml-[10px] line-through "> $120.23</span> </div>
    <div className="w-[104px] h-[18px] font-sans text-[14px] whitespace-nowrap font-semibold text-[#374151]">+ Add to Basket</div>
  </div>
</div>
</div>
<div className="flex flex-col w-[297px] h-[423px] gap-[8px]">

  <img src={lady2} alt="" className="w-[297px]"/>
  <div className="flex flex-col w-[297] h-[72px] gap-[8px]">
  <h1 className="text-[14px] font-sans font-normal text-[#374151] leading-[22px] tracking-wide text-left w-[297px] h-[44px]">Striped Flutter Sleeve Overlap Collar <br /> Peplum Hem Blouse</h1>
  <div className="flex w-[297px] justify-between h-[20px]">
    <div className="w-[132px] h-[20px] text-left text-[16px] font-sans font-semibold">$90.00<span className="font-normal text-[#374151] ml-[13px] line-through "> $100.00</span> </div>
    <div className="w-[104px] h-[18px] font-sans text-[14px] whitespace-nowrap font-semibold text-[#374151]">+ Add to Basket</div>
  </div>
</div>
</div>
<div className="flex flex-col w-[297px] h-[423px] gap-[8px]">

  <img src={lady3} alt="" className="w-[297px]" />
  <div className="flex flex-col w-[297] h-[72px] gap-[8px]">
  <h1 className="text-[14px] font-sans font-normal text-[#374151] leading-[22px] tracking-wide text-left w-[297px] h-[44px]">Striped Flutter Sleeve Overlap Collar <br /> Peplum Hem Blouse</h1>
  <div className="flex w-[297px] justify-between h-[20px]">
    <div className="w-[132px] h-[20px] text-left text-[16px] font-sans font-semibold">$140.24<span className="font-normal text-[#374151] ml-[12px] line-through ">$150.11</span> </div>
    <div className="w-[104px] h-[18px] font-sans text-[14px] whitespace-nowrap font-semibold text-[#374151]">+ Add to Basket</div>
  </div>
</div>

  </div>

<div className="flex flex-col w-[297px] h-[423px] gap-[8px]">

  <img src={lady4} alt="" className="w-[297px]"/>
  <div className="flex flex-col w-[297] h-[72px] gap-[8px]">
  <h1 className="text-[14px] font-sans font-normal text-[#374151] leading-[22px] tracking-wide text-left w-[297px] h-[44px]">Striped Flutter Sleeve Overlap Collar <br /> Peplum Hem Blouse</h1>
  <div className="flex w-[297px] justify-between h-[20px]">
    <div className="w-[132px] h-[20px] text-left text-[16px] font-sans whitespace-nowrap font-semibold">$105.23<span className="font-normal text-[#374151] ml-[10px] line-through "> $120.23</span> </div>
    <div className="w-[104px] h-[18px] font-sans text-[14px] whitespace-nowrap font-semibold text-[#374151]">+ Add to Basket</div>
  </div>
</div>

</div>

 </div>
</div>

{/* section 4 */}

<div className="parent2 flex flex-col gap-[50px]">
          {/* subheading */}
          <div className="flex ml-[187px] flex-col gap-2">
          <h1 className="text-center font-sans font-semibold text-2xl text-[#374151
]">
          Brands for you
          </h1>
          <div className="justify-center flex">
            <img src={dash3} alt="dash2" className="w-[88px] h-[4px] " />
            </div>
        </div>
 {/* pictures */}
 <div className="flex w-[760px] h-[80px] ml-[300px] cursor-pointer gap-[56px]">

  <img src={chanel} alt="" />
  <img src={dolce} alt="" />
  <img src={dior} alt="" />
  <img src={varsace} alt="" />
  <img src={zara} alt="" />
  <img src={gucci} alt="" />

 </div>
</div>

{/* section 5 */}
<img src={dress} alt="" className="ml-[100px] w-[1264px] h-[515px] relative" />
<div className="flex flex-col absolute top-[3230px] gap-[105px] left-[180px]">
  <div className="flex flex-col gap-[30px] ">
    <h1 className="w-[458px] h-[51px] font-sans text-[40px] leading-[50.72px] font-semibold text-[#145381] text-left whitespace-nowrap">SUMMER <span className="text-[#EB5757]"> COLLECTIONS </span></h1>
    <div className="flex w-[163px] h-[44px] border-[1px] justify-around items-center  border-[#FAFAFA] bg-[#FAFAFA] text-[#EB5757]">
      <div className="  text-[#EB5757] text-center text-[16px] font-sans font-semibold">SHOP NOW</div>
   <div className=" text-[#EB5757]"> <img
                  src={vector}
                  alt="arrow"
                  className=" w-[24px]"
                /></div>

  </div>
  </div>

  <div className="flex w-[318px] font-sans gap-[20px] font-normal text-[#FFFFFF] h-[54px]">
    <div className="text-[24px] font-semibold">07 <span className="text-[12px]  font-normal"> Days</span></div>
    <div className="text-[24px] font-semibold">:</div>
    <div className="text-[24px] font-semibold">08 <span className="text-[12px] font-normal"> Hours</span></div>
    <div className="text-[24px] font-semibold">:</div>
    <div className="text-[24px] font-semibold">04 <span className="text-[12px] font-normal"> Minutes</span></div>
    <div className="text-[24px] font-semibold">:</div>
    <div className="text-[24px] font-semibold">05 <span className="text-[12px] font-normal"> Seconds </span></div>
  </div>
</div>

{/* footer section */}
<footer className="w-[1440px] mt-[50px] h-[507px] gap-[10px] bg-[#F9FAFB] opacity-[0px]">
<div className="flex flex-col gap-[150px] h-[383px] w-[1296px]">
  <div className="flex h-[207px] gap-[161px] w-[1296px]">
<div className="flex w-[581px] h-[156px] gap-[88px] ml-[100px] mt-[70px]">
  <div className="flex flex-col w-[154px] h-[130px] gap-[16px] ">
    <div><h1 className="text-[#1F2937] text-left uppercase text-[14px] leading-[17.75px] font-sans font-semibold">Company Info</h1></div>

    <div className="flex-col flex cursor-pointer text-[14px] font-normal gap-[8px]">
    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans
">About Laura’s Closet </p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans">Social Responsibility</p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans">Affiliate</p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans">Fashion Blogger</p></div>
  </div>
  </div>

  <div className="flex flex-col w-[124px] h-[156px] gap-[16px] ">
    <div><h1 className="text-[#1F2937] text-left leading-[17.75px] uppercase text-[14px] font-sans whitespace-nowrap 
    font-semibold">HElP & Support</h1></div>

<div className="flex-col flex font-normal cursor-pointer text-[14px] gap-[8px]">

    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans
">Shipping Info</p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans">Returns</p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans">How to Order</p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans">How to Track</p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans">Size Chart</p></div>

  </div>
</div>

  <div className="flex flex-col w-[127px] h-[130px] gap-[16px] ">
    <div><h1 className="text-[#1F2937] text-left uppercase leading-[17.75px] text-[14px] tracking-5p  font-sans whitespace-nowrap
     font-semibold">customer care</h1></div>

    <div className="flex-col flex text-[14px] cursor-pointer font-normal gap-[8px]">

    <div><p className="text-left text-[#6B7280] leading-[17.75px] tracking-5p font-sans
">Contact Us</p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px]  font-sans">Payment</p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px]  font-sans">Bonus Point</p></div>
    <div><p className="text-left text-[#6B7280] leading-[17.75px]  font-sans">Notices</p></div>
    
</div>
  </div>


</div>


<div className="flex w-[554px] h-[207px] gap-[41px] flex-col">
  <div className="icons w-[554px] h-[66px] gap-[242px] flex">
    <div className="flex flex-col gap-[16px] w-[224px] h-[66px]">
      <h1 className="uppercase mt-[70px] text-[#1F2937] text-left font-sans font-semibold text-[14px] ">socials</h1>
      <div className="flex gap-[16px] justify-start cursor-pointer w-[224px] h-[32px]">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
        <img src={tiktok} alt="" />
        <img src={snapchat} alt="" />
      </div>
    </div>


    <div className="flex flex-col gap-[16px] w-[88px] h-[66px]">
      <h1 className="uppercase mt-[70px] text-[#1F2937] text-left font-sans font-semibold text-[14px] ">platforms</h1>
      <div className="flex gap-[16px] justify-start w-[80px] cursor-pointer h-[32px]">
        <img src={andriod} alt="" />
        <img src={apple} alt="" />
        
      </div>
    </div>

  </div>




  <div className="w-[554px] h-[100px] mt-[80px] gap-[18px]">
    <h2 className="uppercase text-[#1F2937] font-sans font-semibold text-[14px] text-left">sign up for laura's closet style news</h2>
    <input type="text" 
    placeholder="Your email"
    className="px-[16px] py-[13px] w-[412px] h-[44px] border-[1px] border-[#9CA3AF] text-[#9CA3AF] ml-[-3px] focus:outline-none cursor-pointer focus:ring-2 focus:ring-gray-500 focus:border-gray-500"/>
     <button class=" w-[134px] h-[44px] bg-[#1F2937] text-white uppercase font-sans font-semibold cursor-pointer ml-1 mt-1 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
      Subscribe
    </button>

    <p className="text-[12px] mt-4 leading-6 font-sans tracking-wider font-normal text-left text-[#9CA3AF] 
    w-[514px]">By clicking the SUBSCRIBE button, you are agreeing to our <span className="text-blue-600 
    font-sans border-t-transparent border-l-transparent border-r-transparent font-normal border-2 border-b-blue-600 cursor-pointer"> Privacy & Cookie Policy</span></p>
  </div>
</div>
  </div>


<div>

  <div className="w-[1198px] h-[114px] ml-[95px] gap-[305px] flex ">
<div className="flex flex-col w-[437px] h-[94px]  gap-[24px]">
<h2 className="text-[#6B7280] text-[14px] font-normal w-[340px] text-left font-sans ">©2010-2022 Laura’s Closet All Rights Reserved</h2>
<div className="flex w-[437px] flex-col text-[#6B7280] font-sans h-[52px]  gap-[16px]">
  <div className="flex w-[437px] font-sans text-[14px] gap-[7px]">
  <p className="border-t-transparent border-l-transparent border-r-transparent font-normal border border-b-gray-400">Privacy Center</p>
<p className="border-t-transparent border-l-transparent border-r-transparent font-normal border border-b-gray-400">Privacy & Cookie Policy</p>
<p className="border-t-transparent border-l-transparent border-r-transparent font-normal border border-b-gray-400">Manage Cookies</p>
</div>

<div className="flex w-[349px] font-sans text-[14px] gap-[7px]">
<p className="border-t-transparent border-l-transparent border-r-transparent font-normal border border-b-gray-400">Terms & Conditions</p>
<p className="border-t-transparent border-l-transparent border-r-transparent font-normal border border-b-gray-400">Copyright Notice</p>
<p className="border-t-transparent border-l-transparent border-r-transparent font-normal border border-b-gray-400">Imprint</p>
</div>
</div>
</div>

<div className="flex flex-col w-[456px] h-[114px] gap-[24px]">
  <h1 className="uppercase text-left font-semibold text-[14px]">we accept</h1>
<div className="flex flex-col w-[456px] h-[72px] gap-[8px]">
  <div className="w-[456px] h-[72px] gap-[8px] flex">
    <img src={mastercard} alt="" className="w-[50px] h-[32px]" />
    <img src={paypal} alt="" className="w-[50px] h-[32px]" />
    <img src={ebay} alt="" className="w-[50px] h-[32px]"/>
    <img src={gpay} alt="" className="w-[50px] h-[32px]" />
    <img src={monobank} alt="" className="w-[50px] h-[32px]"/>
    <img src={discover} alt="" className="w-[50px] h-[32px]"/>
    <img src={western} alt="" className="w-[50px] h-[32px]" />
    <img src={payoneer} alt="" className="w-[50px] h-[32px]"/>
  </div>
  <div className="flex h-[72px] gap-[8px] ">
    <img src={applepay} alt="" className="w-[50px] h-[32px]" />
    <img src={american} alt="" className="w-[50px] h-[32px]" />
    <img src={amazon} alt="" className="w-[50px] h-[32px]"/>
    <img src={alipay} alt="" className="w-[50px] h-[32px]"/>
    <img src={bitpay} alt="" className="w-[50px] h-[32px]"/>
    <img src={bitcoin} alt="" className="w-[50px] h-[32px]"/>
  </div>
</div>
</div>
  </div>
</div>
</div>
</footer>
      </div>
    </div>
  );
}

export default Home;
