'use client'
import React,{useState} from "react";
import Image from "next/image";
import AboutCompany from "./AboutCompany";
import DealsOnBooking from "../DealsOnBooking/DealsOnBooking";
import OurServices from "../OurServices/OurServices";
import BookOurServices from "../BookOurServices/BookOurServices";
import {addTodo,removeTodo} from '../../redux/features/todo/todoslice'
import useDispatch from '@reduxjs/toolkit'
export default function Hero ( ) {

    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

const [input, setInput] = useState('');

const dispatch = useDispatch();
  
    const services = [
        {
            img:'/dollar-sign.png',
            name:'Best Price Guaranteed',
            description:'A more recently with desktop softy like aldus page maker.',
        },
        {
            img:'/headphones.png',
            name:'24/7 Customer Care',
            description:'A more recently with desktop softy like aldus page maker.',
        },
        {
            img:'/home2.png',
            name:'Home Pickups',
            description:'A more recently with desktop softy like aldus page maker.',
        },
        {
            img:'/calendar.png',
            name:'Easy Bookings',
            description:'A more recently with desktop softy like aldus page maker.',
        },
    ]
    return <>
     <div className="w-full h-[870px] flex flex-row items-center justify-center" style={{backgroundImage:'url(bg-image.jpg)'}}>

        <div className="w-full h-full flex flex-row items-center justify-center bg-[#182734CC] px-20">
            <div className="flex flex-col ">
                <p className="text-[24px]">Free changes of life.</p>
                <h1 className="text-[53px] max-w-[600px] font-bold">Hand-Made Website for Your Business</h1>
                <button className="w-[180px] h-[54px] bg-[#FECE01] px-[42px] py-[15px]">Book Call</button>
            </div>
            <div className="" >
               <Image alt = "" src = "/bg-image-2.png" width = {916} height = {700}/>
            </div>
        </div>
    </div>

    <div className="flex flex-row items-center bg-white w-full py-[55px] px-[48px]">
      {
        services.map((element,idx)=> {
                return <div key={idx} className="flex flex-row items-center gap-[21px] text-black">
                <div>
                    <Image src={element.img} alt="" width = {64} height = {64}/>
                </div>
                <div className="">
                    <h1 className="leading-[22px] font-semibold text-[18px]">{element.name}</h1>
                    <div className="leading-[24px] text-[15px] font-normal text-[#777777]">{element.description}</div>
                </div>
            </div>
        })
      }  
    </div>


     <AboutCompany/>
    <DealsOnBooking/>
    <OurServices/>
    <BookOurServices/>
    </>
}