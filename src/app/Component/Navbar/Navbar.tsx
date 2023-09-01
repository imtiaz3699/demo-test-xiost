'use client'
import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";
export default function Navbar () {


    const [isDropDown, setIsDropDown] = useState(false);
    const data = [
        {
            img:'/home.png',
            name:'Address',
            des:'Example England',
        },
        {
            img:'/email.png',
            name:'Email Us',
            des:'example@booking.com',
        },
        {
            img:'/phone.png',
            name:'Phone',
            des:'+1-234-000-2345',
        },

    ]
    return <>
    <div className="flex flex-row relative items-center w-full justify-between px-[20px] md:px-20 py-[30px] lg:py-[41px] md:gap-20 bg-white">
        <div className="logo text-[42px] font-bold text-black">Logo</div>
        <div className="lg:hidden" onClick={()=> setIsDropDown(!isDropDown)} >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24" fill="none">
        <path d="M0 24H36V20H0V24ZM0 14H36V10H0V14ZM0 0V4H36V0H0Z" fill="#1C2B39"/>
        </svg>
        </div>
       {
        isDropDown && <div className="lg:hidden absolute z-10 top-[100%] left-0 text-black flex flex-col gap-5 px-5 py-5 bg-white w-full">
        
          {
            data.map((element,idx)=> {
                return  <div className="flex flex-row gap-[12px]" key = {idx}>
                    <div className="w-[50px] h-[50px] rounded-full border-2 p-[5px] flex flex-row items-center justify-center border-[#FECE00]">
                    <Image alt="" src={element.img} width={24} height={17}/>
                </div>
                <div className="flex flex-col ">
                    <h1 className="text-[#FECE00]">{element.name}</h1>
                    <div>{element.des}</div>
                </div>
                </div>
            })
          }      
        
    </div> 
       } 

       <div className="hidden lg:flex flex-row items-center justify-between w-full">
        {
            data.map((element,idx)=> {
                return <div className="flex flex-row gap-[12px]" >
                <div className={`${idx === 2 ? 'bg-[#1C2B39] -translate-y-[50px] py-3 h-[80px] px-2 flex flex-row items-end justify-end rounded-b-xl' : 'w-[50px] h-[50px] rounded-full border-2 p-[5px] flex flex-row items-center justify-center border-[#FECE00]'}`}>
                <Image alt="" src={element.img} width={24} height={17}/>
            </div>
            <div className="flex flex-col ">
                <h1 className="text-[#FECE00]">{element.name}</h1>
                <div className="text-black">{element.des}</div>
            </div>
            </div>
            })
        }
       
       </div>
    </div>

    <div className="flex flex-row items-center gap-[40px] bg-[#1C2B39] py-4 px-3 md:px-[72px] ">
        <Link href='/'>
        <h1 className="hover:text-[#FECE01] cursor-pointer">HOME</h1>
        </Link>
        <Link href='/post'>
        <h1 className="hover:text-[#FECE01] cursor-pointer">POSTS</h1>
        </Link>
    </div>

    </>
}