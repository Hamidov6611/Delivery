import Image from "next/image";

const Step1 = () => {
  return (
    <div className="sm:mt-12">
      <p className="text-center font-montserrat font-semibold text-[17px] lg:hidden text-lightGreey">
        Категория товара
      </p>
      <p className="text-center font-normal text-lightGreey text-[15px] mt-2 sm:text-[20px]">
        Перевозка мебели
      </p>
      <p className="text-center font-montserrat font-semibold text-[17px] mt-2 text-lightGreey mb-6 md:mb-12">
        Выберите категорию, чтобы получать лучшие транспортные предложения и
        экономить до 60%!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 ">
        <div className="border h-[220px] sm:h-[320px] rounded-lg shadow-xl flex justify-center items-center">
          <div className="flex flex-col  justify-center items-center">
            <Image src={"/cal1.svg"} width={100} height={100} alt={"cal1"} />
            <p className="mt-3 text-center font-medium text-[20px] sm:text-[25px] text-lightGreey">
              Падонны
            </p>
          </div>
        </div>
        <div className="border h-[220px] sm:h-[320px] rounded-lg shadow-xl flex justify-center items-center">
          <div className="flex flex-col  justify-center items-center">
            <Image src={"/cal2.svg"} width={100} height={100} alt={"cal1"} />
            <p className="mt-3 text-center font-medium text-[20px] sm:text-[25px] text-lightGreey">
              Пакеты
            </p>
          </div>
        </div>
        <div className="border h-[220px] sm:h-[320px] rounded-lg shadow-xl flex justify-center items-center">
          <div className="flex flex-col  justify-center items-center">
            <Image src={"/cal3.svg"} width={100} height={100} alt={"cal1"} />
            <p className="mt-3 text-center font-medium text-[20px] sm:text-[25px] text-lightGreey">
              Винтажная мебель
            </p>
          </div>
        </div>
        <div className="border h-[220px] sm:h-[320px] rounded-lg shadow-xl flex justify-center items-center">
          <div className="flex flex-col  justify-center items-center">
            <Image src={"/cal4.svg"} width={100} height={100} alt={"cal1"} />
            <p className="mt-3 text-center font-medium text-[20px] sm:text-[25px] text-lightGreey">
              Небольшие переезды
            </p>
          </div>
        </div>
        <div className="border h-[220px] sm:h-[320px] rounded-lg shadow-xl flex justify-center items-center">
          <div className="flex flex-col  justify-center items-center">
            <Image src={"/cal5.svg"} width={100} height={100} alt={"cal1"} />
            <p className="mt-3 text-center font-medium text-[20px] sm:text-[25px] text-lightGreey">
              Небольшие переезды
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
