"use client";
import ReactStars from "react-stars";

import Image from "next/image";

const Page = () => {
  return (
   <>
     <div className="w-[90%] mx-auto ">
      <p className=" mt-4 md:mt-8 text-center font-semibold md:font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[55px] text-[#2F2E40]">
        Наши отзывы
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1">
        <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
          <div className="flex justify-between items-center">
            <div className=" relative flex justify-between">
              <Image
                src={"/user1.svg"}
                className="w-[100%] h-[100%] mr-3"
                alt="user"
                width={100}
                height={100}
              />
            </div>
            <div className="w-[60%] flex flex-col">
              <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">
                Александра Ш.
              </p>
              <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">
                Месяц назад
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src={"/google.svg"}
                className="w-[100%] h-[100%]"
                alt="user"
                width={100}
                height={100}
              />
            </div>
          </div>
          <ReactStars value={5} edit={true} className="text-[20px]" />
          <p className="py-4">
            Отличный сервис с отличной связью, услужливыми курьерами и очень
            конкурентоспособными ценами.{" "}
          </p>
        </div>

        <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
          <div className="flex justify-between items-center">
            <div className=" relative flex justify-between">
              <Image
                src={"/user1.svg"}
                className="w-[100%] h-[100%] mr-3"
                alt="user"
                width={100}
                height={100}
              />
            </div>
            <div className="w-[60%] flex flex-col">
              <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">
                Александра Ш.
              </p>
              <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">
                Месяц назад
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src={"/google.svg"}
                className="w-[100%] h-[100%]"
                alt="user"
                width={100}
                height={100}
              />
            </div>
          </div>
          <ReactStars value={5} edit={true} className="text-[20px]" />
          <p className="py-4">
            Отличный сервис с отличной связью, услужливыми курьерами и очень
            конкурентоспособными ценами.{" "}
          </p>
        </div>

        <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
          <div className="flex justify-between items-center">
            <div className=" relative flex justify-between">
              <Image
                src={"/user1.svg"}
                className="w-[100%] h-[100%] mr-3"
                alt="user"
                width={100}
                height={100}
              />
            </div>
            <div className="w-[60%] flex flex-col">
              <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">
                Александра Ш.
              </p>
              <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">
                Месяц назад
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src={"/google.svg"}
                className="w-[100%] h-[100%]"
                alt="user"
                width={100}
                height={100}
              />
            </div>
          </div>
          <ReactStars value={5} edit={true} className="text-[20px]" />
          <p className="py-4">
            Отличный сервис с отличной связью, услужливыми курьерами и очень
            конкурентоспособными ценами.{" "}
          </p>
        </div>

        <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
          <div className="flex justify-between items-center">
            <div className=" relative flex justify-between">
              <Image
                src={"/user1.svg"}
                className="w-[100%] h-[100%] mr-3"
                alt="user"
                width={100}
                height={100}
              />
            </div>
            <div className="w-[60%] flex flex-col">
              <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">
                Александра Ш.
              </p>
              <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">
                Месяц назад
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src={"/google.svg"}
                className="w-[100%] h-[100%]"
                alt="user"
                width={100}
                height={100}
              />
            </div>
          </div>
          <ReactStars value={5} edit={true} className="text-[20px]" />
          <p className="py-4">
            Отличный сервис с отличной связью, услужливыми курьерами и очень
            конкурентоспособными ценами.{" "}
          </p>
        </div>
        <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
          <div className="flex justify-between items-center">
            <div className=" relative flex justify-between">
              <Image
                src={"/user1.svg"}
                className="w-[100%] h-[100%] mr-3"
                alt="user"
                width={100}
                height={100}
              />
            </div>
            <div className="w-[60%] flex flex-col">
              <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">
                Александра Ш.
              </p>
              <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">
                Месяц назад
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src={"/google.svg"}
                className="w-[100%] h-[100%]"
                alt="user"
                width={100}
                height={100}
              />
            </div>
          </div>
          <ReactStars value={5} edit={true} className="text-[20px]" />
          <p className="py-4">
            Отличный сервис с отличной связью, услужливыми курьерами и очень
            конкурентоспособными ценами.{" "}
          </p>
        </div>
        <div className="shadow-2xl p-5 rounded-lg border my-8 flex flex-col">
          <div className="flex justify-between items-center">
            <div className=" relative flex justify-between">
              <Image
                src={"/user1.svg"}
                className="w-[100%] h-[100%] mr-3"
                alt="user"
                width={100}
                height={100}
              />
            </div>
            <div className="w-[60%] flex flex-col">
              <p className="font-medium text-[18px] sm:text-[20px] text-[#1348F9]">
                Александра Ш.
              </p>
              <p className="text-[#979797] text-[14px] font-medium sm:text-[19px]">
                Месяц назад
              </p>
            </div>
            <div className="flex flex-col">
              <Image
                src={"/google.svg"}
                className="w-[100%] h-[100%]"
                alt="user"
                width={100}
                height={100}
              />
            </div>
          </div>
          <ReactStars value={5} edit={true} className="text-[20px]" />
          <p className="py-4">
            Отличный сервис с отличной связью, услужливыми курьерами и очень
            конкурентоспособными ценами.{" "}
          </p>
        </div>
      </div>

      
    </div>
    <div className="relative z-0">
    <div className="absolute bottom-0 left-0 h-[50px] w-[30px] sm:w-[50px] md:w-[70px] lg:w-[70px]">
      <Image
        src={"/minLeft.svg"}
        width={100}
        height={100}
        alt={"minLeft"}
      />
    </div>
    <div className="absolute bottom-0 right-0 h-[50px] w-[30px] sm:w-[50px] md:w-[70px] lg:w-[70px]">
      <Image
        src={"/minRight.svg"}
        width={100}
        height={100}
        alt={"minLeft"}
      />
    </div>
  </div>
   </>
  );
};

export default Page;
