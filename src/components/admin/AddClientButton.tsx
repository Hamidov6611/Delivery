import React, { useState } from "react";
import AddClientMOdal from "./AddClientModal";
import Link from "next/link";

const AddClientButton = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-[18px] mr-6 sm:text-[20px] md:text-[32px] flex items-center lg:text-[45px] text-lightGreey font-semibold">
          Клиенты |
        </p>
        <Link
        href={"/addclient"} 
        className="bg-heroPrimary min-w-[300px] hover:bg-Primary transition duration-200 ease-in-out font-semibold text-white text-[18px] sm:text-[18px]  flex items-center justify-around py-2 sm:py-4 px-1 sm:px-8 rounded-lg">
          Добавить клиента
        </Link>
      </div>

      {/* {isAdd && (
        <AddClientMOdal setIsAdd={setIsAdd} />
      )} */}

    </div>
  );
};

export default AddClientButton;
