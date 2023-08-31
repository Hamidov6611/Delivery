"use client";

import Image from "next/image";

const Ask = () => {
  return (
    <div className="w-[90%] mx-auto my-12">
      <p className="text-center font-semibold md:font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[55px] text-[#2F2E40]">
        Вопросы-ответы
      </p>
      <div className="flex flex-col">
        <div className="h-[2px] w-[100%] bg-[#EAECF0] mt-8" />
        <div className="w-[100%] flex justify-between items-center">
          <p className="text-[15px] sm:text-[18px] text-lightGreey sm:font-medium my-4">
            Является ли UK2EU европейской грузовой биржей?
          </p>
          <button className="w-[15px] h-[15px] sm:w-[27.48px] sm:h-[27.48px]">
            <Image
              src={"/plus.svg"}
              className="w-[100%] h-[100%]"
              alt="plus"
              width={100}
              height={100}
            />
          </button>
        </div>
        <div className="h-[2px] w-[100%] bg-[#EAECF0]" />
        <div className="w-[100%] flex justify-between items-center">
          <p className="text-[15px] sm:text-[18px] text-lightGreey sm:font-medium my-4">
          Какие страны охватывает транспортная биржа UK2EU?
          </p>
          <button className="w-[15px] h-[15px] sm:w-[27.48px] sm:h-[27.48px]">
            <Image
              src={"/plus.svg"}
              className="w-[100%] h-[100%]"
              alt="plus"
              width={100}
              height={100}
            />
          </button>
        </div>
        <div className="h-[2px] w-[100%] bg-[#EAECF0]" />
        <div className="w-[100%] flex justify-between items-center">
          <p className="text-[15px] sm:text-[18px] text-lightGreey sm:font-medium my-4">
          Кто может подписаться на цифровую грузовую биржу UK2EU?
          </p>
          <button className="w-[15px] h-[15px] sm:w-[27.48px] sm:h-[27.48px]">
            <Image
              src={"/plus.svg"}
              className="w-[100%] h-[100%]"
              alt="plus"
              width={100}
              height={100}
            />
          </button>
        </div>
        <div className="h-[2px] w-[100%] bg-[#EAECF0]" />
        <div className="w-[100%] flex justify-between items-center">
          <p className="text-[15px] sm:text-[18px] text-lightGreey sm:font-medium my-4">
          Сколько стоит подписка на транспортную биржу UK2EU?
          </p>
          <button className="w-[15px] h-[15px] sm:w-[27.48px] sm:h-[27.48px]">
            <Image
              src={"/plus.svg"}
              className="w-[100%] h-[100%]"
              alt="plus"
              width={100}
              height={100}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ask;
