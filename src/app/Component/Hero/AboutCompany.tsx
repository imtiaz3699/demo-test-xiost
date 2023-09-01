'use client'
import Image from "next/image"
export default function AboutCompany () {

    const data = [
        {
            num:'500',
            img:'/emoji.png',
            name:'Happy Customers',
        },
        {
            num:'600',
            img:'/car.png',
            name:'Happy Customers',
        },
        {
            num:'700',
            img:'/person.png',
            name:'Happy Customers',
        },
    ]
    return <>
            <div className="flex bg-white border-t-[1px]  border-gray-300 flex-row items-center justify-between py-[85px] px-[50px]">
                <div className="flex flex-col text-black max-w-[770px]">
                    <div className="text-[16px] font-bold leading-[24px]">Like always. Like never before.</div>
                    
                    <h1 className="text-[28px] font-bold leading-9">Bespoke Software & Digital Transformation.</h1>
                    <br />
                    <div>By automating processes and tasks, businesses can reduce costs and improve productivity.
                        Additionally, custom software tailored to the specific needs of a business can give them a
                        significant advantage over their competitors.
                        <br /><br />
                        Our software development agency has a team of experienced and skilled professionalswho can 
                        create custom software solutions for your business. We understand the unique requirements
                        of each business and create tailor-made solutions that can help them achieve their goals.
                        <br />
                </div>
                <br />
                <button className="w-[182px] h-[54px] bg-[#FECE01] text-white">Get a Quote</button>
                <div className="mt-[38px] flex flex-row justify-between items-center ">
                      {
                                data.map((element,idx)=> {
                                    return <div className="flex flex-col items-center gap-[15px]">
                                    <div className="border relative border-gray-300 w-[75px] flex flex-row items-center justify-center h-[75px] rounded-full">
                                    <Image src = "/emoji.png" alt = "" width={28} height={55}/>
                                    <div className="absolute border-2 flex flex-row items-center font-bold top-0 -translate-y-5 translate-x-12 rounded-[4px] justify-center border-gray-300 w-[73px] h-[44px]">500</div>
                                    </div>
                                    <div className="">Happy Customers</div>
                                    <div className=" bg-[#FECE01] w-[50px] h-[3px] float-right"></div>
                            </div>
                                })
                      }  
                                
                </div>
                </div>
                <div className="w-[550px] h-[540px]">
                    <div className="w-[550px] h-[540px] rounded-full  relative">
                        <Image src = "/about-style-fimg.png" alt = "" layout = "fill" objectFit = "cover" objectPosition = "center" />
                        <div className=" bottom-0 translate-y-10 right-20  w-[220px] h-[220px] rounded-full absolute z-10">
                            <div className="w-[220px] h-[220px] rounded-full relative">
                            <Image src = "/div.work-info.png" alt = "" layout = "fill" objectFit = "cover" objectPosition = "center" />
                            </div>
                        </div>
                    </div>
                 </div>


                 
            </div>


    
    </>
}