import SendMessage from "@/components/admin/SendMessage";
import React from "react";

const Message = () => {
  return (
    <div className="w-full p-6 flex flex-col gap-y-8 z-0">
      <div className="flex items-center">
        <p className="text-[18px] mr-6 sm:text-[20px] md:text-[32px] flex items-center lg:text-[45px] text-lightGreey font-semibold">
          SMS-Отправка
        </p>
      </div>
        <SendMessage />
    </div>
  );
};

export default Message;
