'use client'
import Image from "next/image"
export default function OurServices() {
    const data = [
        {
            img:'/trace 1.png',
            name:'Restuarants',
            description:'A more recently with desktop softy like aldus page maker.'
        },
        {
            img:'/trace (1).png',
            name:'Airports',
            description:'A more recently with desktop softy like aldus page maker.'
        },
        {
            img:'/trace (2).png',
            name:'Hospitals',
            description:'A more recently with desktop softy like aldus page maker.'
        },
        {
            img:'/trace (3).png',
            name:'Beaches',
            description:'A more recently with desktop softy like aldus page maker.'
        },
        {
            img:'/trace (4).png',
            name:'Shopping Malls',
            description:'A more recently with desktop softy like aldus page maker.'
        },
        {
            img:'/trace (5).png',
            name:'Wedding Parties',
            description:'A more recently with desktop softy like aldus page maker.'
        },
    ]
    return <div className="px-[60px] py-[100px] bg-white flex flex-col items-center">
        <h1 className="text-[40px] font-semibold leading-[48px] text-black">Our Services</h1>   
        <p className="max-w-[532px] h-[48px] text-[#777777] text-center">Lorem Ipsum passages, and more recently with desktop publishing software
like aldus pageMaker including versions.</p>
        <div className="grid grid-cols-3 place-items-center gap-[13px] mt-[70px]">
            
            {
                data.map((element,idx)=> {
                        return <div className="w-[416px] h-[321px] border-[1px] border-gray-400 ">
                        <div className="w-full h-[125px] bg-[#EEEEEE] flex flex-row items-center justify-center ">
                            <Image alt = "" src = {element.img} width = {60} height = {76}/>
            
                        </div>
                        <div className="px-[50px] w-full h-[196px] text-black flex flex-col items-center justify-center text-center">
                        <h1 className="text-black text-[22px] font-normal">{element.name}</h1>
                        <div className="text-[#777777] text-[15px]">{element.description}</div>
                        </div>      
                        </div>
                })
            }
            
        </div>
       </div>
}