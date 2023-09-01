'use client'
import Image from "next/image"
export default function DealsOnBooking () {
    const data = [
        {
            img:'/deal_img3-310x310.jpg.jpg',
            name:'London',
            price:'$260/day',
        },
        {
            img:'/deal_img1-310x310.jpg.jpg',
            name:'Marcin Nowak',
            price:'$2300/day',
        },
        {
            name:'Toronto',
            price:'$400/day',
            img:'/deal_img2-310x310.jpg.jpg',
        },

    ]
      return  <>
      <div className="py-[110px] px-[20px] bg-white relative h-[774px] w-full">
    <div className="w-full h-full absolute top-0 left-0 bottom-0 right-0 bg-[#13202BE5]">
        <Image alt="" src="/12 1.png" layout="fill" objectFit="cover" objectPosition="center" />
    </div>
    <div className="relative z-10 flex flex-col items-center text-black">
        <h1 className=" text-[40px] font-bold text-white">Deals on Booking</h1>
        <p className="max-w-[679px] text-center">Lorem Ipsum passages, and more recently with desktop publishing software and applications like aldus pageMaker which has different variations.</p>
        <div className="flex flex-row items-center gap-[62px]">
       {
        data.map((element,idx)=> {
            return <div className="w-[316px] mt-[70px] relative flex flex-row items-center justify-center h-[316px] rounded-full" key = {idx}>
            <Image src="/deal_img3-310x310.jpg.png" alt="" layout="fill" objectFit="cover" objectPosition="center" />
            <div className="w-[166px] h-[166px] bg-[#00000066] opacity-50 rounded-full absolute"></div>
            <div className="bg-[#13202BE5] flex flex-col items-center justify-center w-[219px] h-[111px] absolute right-0 translate-x-14 -rotate-6 bottom-0">
                <h2 className="text-white">London</h2>
                <div className="text-white">Starts from $190/day</div>
            </div>
        </div>
        })
       } 
       </div>
    </div>
</div>


        </>
}