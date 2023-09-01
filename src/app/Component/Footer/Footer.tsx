'use client'
import Image from "next/image"
export default function Footer () {
    const quickLinks = [
        {
            name:'About Us',
            url:"",
        },
        {
            name:'Our Services',
            url:"",
        },
        {
            name:'Featured Blog',
            url:"",
        },
        {
            name:'Car Fleet',
            url:"",
        },
        {
            name:'FAQ',
            url:"",
        },
    ]
    const contactInfo = [
        {
            img:'/contact1.png',
            name:'10A, San Andreno, USA'
        },
        {
            img:'/contact2.png',
            name:'example@booking.com'
        },
        {
            img:'/contact3.png',
            name:'+1-333-444-555'
        },
        {
            img:'/contact4.png',
            name:'www.example.com'
        },

    ]
    const socialIcons = ['/facebook.png','/twitter.png','/linkedin.png','/instagram.png']
    return <div className="px-20 flex flex-row  justify-between py-20 bg-[#233545]">
        <div className="flex flex-col gap-[20px]">
            <div className="text-[20px]">Logo</div>
            <p className="max-w-[301px] text-[#7A8793]">Search for will uncover many web sites
variables onto of passages of lorem ipsum
available but the majority the words all
predefined humour to met chunks recently
with desktop.</p>
            <div className="flex flex-row items-center gap-[13px]">
                {
                    socialIcons.map((element,idx)=> {
                        return <div className="border-[1px] w-[40px] h-[40px] flex flex-row items-center justify-center ">
                            <Image width={12} height={12} src={element} alt = ""/>
                        </div>
                    })
                }
            
            </div>
            
        </div>


            <div>
                <h1 className="text-[20px] font-bold">Quick Links</h1>
                
                <div className="flex flex-col gap-[20px] mt-[16px]">
                {
               quickLinks.map((element,idx)=> {
                return <div className="flex flex-row items-center gap-[15px]">
                    <Image width={16} height={16} src='/fileManager.png' alt = ""/>
                    <div className="text-[#7A8793] cursor-pointer hover:underline">{element.name}</div>
                    </div>
               }) 
               }
                </div>
            </div>



            <div>
                <h1 className="text-[20px] font-bold">Contact Info</h1>
                <div className="flex flex-col gap-[20px] mt-[16px]">
                {
                    contactInfo.map((element,idx)=> {
                        return <div className="flex flex-row items-center gap-3 ">
                        <Image alt = "" src = {element.img} width = {20} height = {20} />
                        <div className="text-[#7A8793]">{element.name}</div>
                    </div>
                    })
                }
                </div>
            </div>


    </div>
}