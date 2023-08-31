import Image from "next/image";

const Sponsr = () => {
  return (
    <div className="bg-[#1348F9] lg:h-[465px] md:flex flex-col items-center justify-center hidden">
      <p className="text-white font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px] ">
        С UK2EU более 20 000 клиентов отправляют товары быстрее
      </p>
      <div className="flex justify-center items-center gap-x-8 mt-8">
        <div className="w-[167px] h-[71px] ">
          <Image
            src={"/sponsr1.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[281px] h-[84px] ">
          <Image
            src={"/sponsr2.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[330px] h-[84px] ">
          <Image
            src={"/sponsr3.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-8 mt-8">
        <div className="w-[266px] h-[52px] ">
          <Image
            src={"/sponsr4.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[229px] h-[68px] ">
          <Image
            src={"/sponsr5.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[193px] h-[120px] ">
          <Image
            src={"/sponsr6.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[120px] h-[114px] ">
          <Image
            src={"/sponsr7.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[120px] h-[114px] ">
          <Image
            src={"/sponsr8.svg"}
            alt={"sponsr1"}
            width={120}
            height={120}
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsr;
