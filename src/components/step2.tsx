"use client";

import { Switch } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Step2 = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="sm:mt-12">
      <p className="text-center font-montserrat font-semibold text-[17px] lg:hidden">
        Маршрут и даты
      </p>
      <p className="text-center font-normal text-lightGreey text-[15px] mt-2 sm:text-[20px]">
        Перевозка мебели
      </p>
      <p className="text-center font-montserrat font-semibold text-[17px] mt-2 text-lightGreey mb-4">
        Выберите маршрут
      </p>

      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-[100%] md:w-[35%]">
          <div className="flex flex-col">
            <div className="w-[100%] mb-6 p-6 md:p-12 shadow-lg border rounded-lg flex flex-col justify-center items-center">
              <div className="w-[100%] mb-4">
                <p className="mb-2 font-normal text-[18px] sm:text-[22px] text-lightGreey">
                  от
                </p>
                <div className="relative">
                  <input
                    placeholder={`Введите адрес доставки`}
                    type="text"
                    className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-12 font-medium"
                  />
                  <div className="w-[17px] h-[22px] absolute top-2 left-4">
                    <Image
                      src={"/loc1.svg"}
                      alt="location"
                      width={100}
                      height={100}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%]">
                <p className="mb-2 font-normal text-[18px] sm:text-[22px] text-lightGreey">
                  для
                </p>
                <div className="relative">
                  <input
                    placeholder={`Введите адрес доставки`}
                    type="text"
                    className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-12 font-medium"
                  />
                  <div className="w-[17px] h-[22px] absolute top-2 left-4">
                    <Image
                      src={"/loc2.svg"}
                      alt="location"
                      width={100}
                      height={100}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] mb-6 p-6 md:p-12 shadow-lg border rounded-lg flex flex-col justify-center items-center">
              <div className="w-[100%] mb-4">
                <div className="flex items-center ">
                  <p className=" sm:font-normal text-[15px] font-montserrat sm:text-[18px] md:text-[22px] font-semibold text-lightGreey mr-5">
                    Я хочу указать дату
                  </p>
                  <div className="flex items-center">
                    <Switch
                      defaultChecked={checked}
                      onClick={() => setChecked((prev) => !prev)}
                    />
                    <p className="ml-2 sm:ml-8 font-normal font-montserrat text-[15px] sm:text-[20px] text-lightGreey mr-2">
                      {checked ? "Да" : "Нет"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex sm:flex-row flex-col justify-between mt-3 sm:items-center">
                    <p className="text-[15px] sm:text-[18px] font-montserrat font-normal text-lightGreey mb-2 sm:mb-0">
                      ДАТА ПОЛУЧЕНИЯ
                    </p>
                    <div>
                      <input
                        type="date"
                        placeholder="Выберите дату"
                        className="border w-[100%] py-2 rounded-md text-[#667085] font-montserrat text-[14px]  focus:outline-[#1348F9] px-6 sm:px-12 font-medium"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col justify-between mt-3 sm:items-center">
                    <p className="text-[15px] sm:text-[18px]  font-montserrat font-normal text-lightGreey">
                      ДАТА ДОСТАВКИ
                    </p>
                    <div>
                      <input
                        type="date"
                        placeholder="Выберите дату"
                        className="border w-[100%] py-2 font-montserrat rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-6 sm:px-12 font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[62%]">
          <div className="flex flex-col w-[100%]">
            <Image
              src={"/map.svg"}
              alt="map"
              width={100}
              height={100}
              className="w-[100%] h-[100%]"
            />
            <Image
              src={"/submap.svg"}
              alt="map"
              width={100}
              height={100}
              className="w-[100%] h-[100%"
            />
          </div>
        </div>
      </div>
      <div className="mt-12 flex w-[100%] justify-center">
        <button className="bg-[#85858538] rounded-lg mr-5">
          <div className="flex flex-col w-[100%] py-1 px-4 sm:py-3 sm:px-8">
            <Image
              src={"/leftleft.svg"}
              alt="map"
              width={100}
              height={100}
              className="w-[100%] h-[100%]"
            />
          </div>
        </button>

        <button className="bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out  font-semibold text-white text-[15px] sm:text-[18px]  flex items-center justify-around py-2 sm:py-4 px-3 sm:px-8 rounded-lg">
          Перейдите к деталям товара
        </button>
      </div>
    </div>
  );
};

export default Step2;
