"use client";

interface AddProps {
  setIsAdd: (value: boolean) => void;
}

import Image from "next/image";
import React, { FC } from "react";

const AddClientMOdal: FC<AddProps> = ({ setIsAdd }) => {
  const handleCLose = (): void => {
    setIsAdd(false);
  };
  return (
    <div
      onClick={handleCLose}
      className="fixed top-0 left-0 cursor-pointer flex items-center justify-center w-full h-[100vh] bg-modalBg transition duration-500 ease-in-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[40%] h-[60vh] bg-white rounded-lg p-6"
      >
        <div className="flex w-[100%] items-center">
          <p className="w-[50%] font-montserrat text-[18px] sm:text-[24px]">
            Добавить клиента
          </p>
          <div className="flex w-[50%] justify-end">
            <div
              onClick={handleCLose}
              className="w-[12px] h-[12px] sm:w-[18.84px] sm:h-[18.84px] cursor-pointer"
            >
              <Image
                src={"/clear.svg"}
                alt="clear"
                width={100}
                height={100}
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>

        <div className="my-4 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          <div className="flex flex-col">
            <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px] font-montserrat">
              Идентификатор клиента
            </p>
            <input
              type="text"
              className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              placeholder="Введите Идентификатор клиента"
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
              Имя
            </p>
            <input
              type="text"
              className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              placeholder="Введите Имя"
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
              Город
            </p>
            <input
              type="text"
              className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              placeholder="Введите Город"
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
              Почтовый индекс
            </p>
            <input
              type="text"
              className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              placeholder="Введите Почтовый индекс"
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
              Страна
            </p>
            <input
              type="text"
              className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              placeholder="Введите Страна"
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
              Страна
            </p>
            <input
              type="text"
              className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              placeholder="Введите Страна"
            />
          </div>
        </div>
        <div className="flex flex-col">
            <p className="mb-2 text-[#344054] font-medium text-[15px] sm:text-[21px]  font-montserrat">
            Примечания
            </p>
            <input
              type="text"
              className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px] px-3 focus:outline-[#1348F9] font-medium"
              placeholder="Введите Примечания"
            />
          </div>
        <div className="flex items-center justify-center mt-4">
        <button 
        className="bg-heroPrimary w-[300px] justify-center hover:bg-Primary transition duration-200 ease-in-out font-semibold text-white text-[18px] sm:text-[18px]  flex items-center py-2 sm:py-3 px-1 sm:px-8 rounded-lg">
          Добавить клиента
        </button>
        </div>
      </div>
    </div>
  );
};

export default AddClientMOdal;
