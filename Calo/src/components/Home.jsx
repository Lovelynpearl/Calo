import React from 'react'
import { Link } from "react-router-dom";
import basket from "./assets/basket.svg";
import search from "./assets/search.svg";
import line from "./assets/line.svg";
import "./styles.css";
import lady from "./assets/image-removebg-preview 1.png";
import circle from "./assets/Ellipse 11.png";
import mask from "./assets/Mask group (1).png";



function Home() {
    return (
      <div className='flex flex-col gap-[20px] 
       w-full'>
        {/* <h1 className="bg-red-600">This is the home page</h1> */}
        {/* <Link to="about">Click to view our about page</Link> */}
      {/* <Link to="contact">Click to view our contact page</Link> */}
  
  {/* navbar section? */}
     <nav className='flex flex-row gap-[190px] justify-center bg-[#FAFAFA];
'>

  <div className='flex gap-[50px] flex-row'>

      <div><h1 className='text-xl text-black whitespace-nowrap  ml-[170px] font-[Euclid Circular A] font-bold'>Laura's Closet</h1></div>

      <div className=' text-[14px] text-neutral-500 cursor-pointer mr-[120px] whitespace-nowrap flex flex-col gap-[-650px]'>
        <div className='flex gap-[15px] flex-row'><img src={search} alt="search" className='ml-[200px] mt-[-1px]' />
        <div><p className='text-[#9CA3AF]'>Search for an item...</p></div>
        </div>

        <img src={line} alt="" className=' w-[300px] ml-[200px] m-[5px] border-solid border-[#9CA3AF]' />
      </div>
      </div>

      <div className="">
        <ul className='flex flex-row gap-[45px] text-[14px] cursor-pointer ml-[115px]  text-neutral-500'>
          <li>Store</li>
          <li>Account</li>
          <li>WishList</li>
          <li className='font-bold text-[#1F2937] relative'>
          <img src={basket} alt="Basket" className="w-5 h-5 mr-2 left-[55px] absolute" />  Basket</li>
        </ul>
      </div>
</nav>

{/* second navbar? */}

<div className="flex flex-row gap-[50px] text-[12px] cursor-pointer ml-[65px] font-bold whitespace-nowrap  bg-white text-[#374151]
">
  <div className="flex flex-row gap-[10px]">
    <p>New Arrivals</p>
    <p className='text-white bg-red-500 w-[54px]'>#Fresh</p>
  </div>
  <div className="">
    <ul className='flex flex-row gap-[50px] text-[#374151]'>
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


{/* section one */}

<div className="parent flex flex-row h-[645px] relative bg-[#F7C59F] w-[1440px]">
  <div className="bigchild w-[930px] relative h-[645px] bg-[#1C2333]">
  <img src={mask} alt="" className='bigbox absolute h-[645px] w-[930px]' />

    <div className='smallbox bg-[#1C2333] flex flex-col w-[556px] absolute top-[130px] left-[96px] p-[40px] h-[385px] gap-[10px] '>
<div className='flex flex-col'>
    <h1 className='w-[476px] h-[71px] text-[#FAFAFA] text-[57px] text-left font-bold whitespace-nowrap'>Get up to 30% off </h1>
   <h1 className="font-bold text-[#F7C59F] text-[57px] text-left"> New Arrivals</h1>
    </div>
  <p className='text-[#F3F4F6] text-left'>introducing our latest collection of products</p>
  <div className="">
  <div className='border-[1px] text-[#FAFAFA] w-[235px] h-[44px] font-bold text-center '>PLACE YOUR ORDER</div>
  <img src={arrow} alt="arrow" className='' />
  </div>
  </div>
  </div>

  <img src={circle} alt="" className='w-[347px] h-[347px] absolute top-[160px] inset-0 object-cover left-[1020px] z-0' />

  <img src={lady} alt="" className=' h-[607px] absolute w-[312px] left-[1040px] top-[60px] z-10'/>
  
</div>


      </div>
    );
  }
  
  export default Home;