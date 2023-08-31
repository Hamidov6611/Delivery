"use client";

import Image from "next/image";
import "./send.css";

const Send = () => {
  return (
    <div className="w-[90%] mx-auto py-12 relative">
      <p className="text-center text-lightGreey text-[20px] sm:text-[28px] mb-8 md:text-[35px] lg:text-[55px] font-bold ">
        Что вы хотите отправит?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
        <div className="relative card1">
          <div className="relative">
            <Image
              src={"/card2.svg"}
              className="w-[100%] h-[100%]"
              width={100}
              height={100}
              alt="card"
            />
            <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
              Небольшие переезды
            </p>
          </div>
          <div className="card1Content">
            <button className="bg-[#1348F9] rounded-lg py-2 px-6 text-white">
              Забронировать сейчас
            </button>
            <p className="text-[16px] text-white">Подробнее</p>
          </div>
        </div>
        <div className="relative card2">
          <div className="relative">
            <Image
              src={"/card2.svg"}
              className="w-[100%] h-[100%]"
              width={100}
              height={100}
              alt="card"
            />
            <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
              Доставка пакетов
            </p>
          </div>
          <div></div>
        </div>
        <div className="relative card3">
          <div className="relative">
            <Image
              src={"/card3.svg"}
              className="w-[100%] h-[100%]"
              width={100}
              height={100}
              alt="card"
            />
            <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
              Винтажная мебель
            </p>
          </div>
          <div></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-x-8 gap-y-8">
        <div className="relative card2">
          <div className="relative">
            <Image
              src={"/card4.svg"}
              className="w-[100%] h-[100%]"
              width={100}
              height={100}
              alt="card"
            />
            <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
              Документы
            </p>
          </div>
          <div></div>
        </div>
        <div className="relative card2">
          <div className="relative">
            <Image
              src={"/card5.svg"}
              className="w-[100%] h-[100%]"
              width={100}
              height={100}
              alt="card"
            />
            <p className="mt-2 font-semibold text-[18px] sm:text-[22px] text-lightGreey">
              Товары, уложенные на поддоны
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Send;
