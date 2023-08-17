"use client"
import ReactStars from 'react-stars'

import Image from "next/image"

const Comments = () => {
  return (
    <div className="w-[90%] mx-auto ">
        <p className=" mt-8 md:mt-36 text-center font-semibold md:font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[55px] text-[#2F2E40]">Что говорят наши клиенты</p>

        <div className="grid grid-cols-1 sm:grid-cols6 md:grid-cols-4 gap-x-8 gap-y-1">
            <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
                <div className="flex justify-between items-center">
                    <div className=" relative flex justify-between"> 
                        <Image src={'/user1.svg'} className="w-[100%] h-[100%] mr-3" alt="user" width={100} height={100} />
                    </div>
                        <div className='w-[60%] flex flex-col'>
                            <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">Александра Ш.</p>
                            <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">Месяц назад</p>
                        </div>
                    <div className="flex flex-col">
                    <Image src={'/google.svg'} className="w-[100%] h-[100%]" alt="user" width={100} height={100} />
                    </div>
                </div>
                <ReactStars value={5} edit={true} className='text-[20px]' />
                <p className=''>Отличный сервис с отличной связью, услужливыми курьерами и очень конкурентоспособными ценами. </p>
            </div>

            <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
                <div className="flex justify-between items-center">
                    <div className=" relative flex justify-between"> 
                        <Image src={'/user1.svg'} className="w-[100%] h-[100%] mr-3" alt="user" width={100} height={100} />
                    </div>
                        <div className='w-[60%] flex flex-col'>
                            <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">Александра Ш.</p>
                            <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">Месяц назад</p>
                        </div>
                    <div className="flex flex-col">
                    <Image src={'/google.svg'} className="w-[100%] h-[100%]" alt="user" width={100} height={100} />
                    </div>
                </div>
                <ReactStars value={5} edit={true} className='text-[20px]' />
                <p className=''>Отличный сервис с отличной связью, услужливыми курьерами и очень конкурентоспособными ценами. </p>
            </div>

            <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
                <div className="flex justify-between items-center">
                    <div className=" relative flex justify-between"> 
                        <Image src={'/user1.svg'} className="w-[100%] h-[100%] mr-3" alt="user" width={100} height={100} />
                    </div>
                        <div className='w-[60%] flex flex-col'>
                            <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">Александра Ш.</p>
                            <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">Месяц назад</p>
                        </div>
                    <div className="flex flex-col">
                    <Image src={'/google.svg'} className="w-[100%] h-[100%]" alt="user" width={100} height={100} />
                    </div>
                </div>
                <ReactStars value={5} edit={true} className='text-[20px]' />
                <p className=''>Отличный сервис с отличной связью, услужливыми курьерами и очень конкурентоспособными ценами. </p>
            </div>

            <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
                <div className="flex justify-between items-center">
                    <div className=" relative flex justify-between"> 
                        <Image src={'/user1.svg'} className="w-[100%] h-[100%] mr-3" alt="user" width={100} height={100} />
                    </div>
                        <div className='w-[60%] flex flex-col'>
                            <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">Александра Ш.</p>
                            <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">Месяц назад</p>
                        </div>
                    <div className="flex flex-col">
                    <Image src={'/google.svg'} className="w-[100%] h-[100%]" alt="user" width={100} height={100} />
                    </div>
                </div>
                <ReactStars value={5} edit={true} className='text-[20px]' />
                <p className=''>Отличный сервис с отличной связью, услужливыми курьерами и очень конкурентоспособными ценами. </p>
            </div>
        </div>
    </div>
  )
}

export default Comments