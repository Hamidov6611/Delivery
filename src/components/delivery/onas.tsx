import Image from "next/image";

const Onas = () => {
  return (
    <div className="w-[100%] md:w-[90%] mx-auto mt-12 relative">
      <div className="w-[100%] flex flex-col justify-center items-center">
        <p className="font-semibold text-center text-[24px] sm:text-[28px] md:text-[35px] lg:text-[55px] text-lightGreey">
          О наших курьерских автомобилях
        </p>
        <div className="w-[70%] mx-auto">
          <p className="font-normal text-[18px] text-center mt-4 md:text-[22px] text-lightGreey">
            В таблице ниже приведены наши стандартные транспортные средства для
            экспресс-доставки с кратким изложением наиболее важной информации о
            них.
          </p>
        </div>
        <div className="w-[65%] flex justify-end">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
            <div>
              <div className="relative">
                <Image
                  src={"/avto1.svg"}
                  className="w-[100%] h-[100%]"
                  alt={"avto1"}
                  width={100}
                  height={100}
                />
              </div>
              <p className="font-semibold text-center text-[20px] md:text-[24px] text-lightGreey">
                Небольшой фургон
              </p>
              <p className="text-center font-medium text-[18px] sm:text-[19px] text-lightGreey">
                160 x 120 x 120 см,максимум 400 кг, до 2 поддонов
              </p>
              <p className="text-center text-[#1348F9] mt-6 font-semibold text-[18px] md:text-[25px]">
                от 49,- €
              </p>
            </div>

            <div>
              <div className="relative">
                <Image
                  src={"/avto2.svg"}
                  className="w-[100%] h-[100%]"
                  alt={"avto1"}
                  width={100}
                  height={100}
                />
              </div>
              <p className="font-semibold text-center text-[20px] md:text-[24px] text-lightGreey">
                Небольшой фургон
              </p>
              <p className="text-center font-medium text-[18px] sm:text-[19px] text-lightGreey">
                160 x 120 x 120 см,максимум 400 кг, до 2 поддонов
              </p>
              <p className="text-center text-[#1348F9] mt-6 font-semibold text-[18px] md:text-[25px]">
                от 49,- €
              </p>
            </div>

            <div>
              <div className="relative">
                <Image
                  src={"/avto3.svg"}
                  className="w-[100%] h-[100%]"
                  alt={"avto1"}
                  width={100}
                  height={100}
                />
              </div>
              <p className="font-semibold text-center text-[20px] md:text-[24px] text-lightGreey">
                Небольшой фургон
              </p>
              <p className="text-center font-medium text-[18px] sm:text-[19px] text-lightGreey">
                160 x 120 x 120 см,максимум 400 кг, до 2 поддонов
              </p>
              <p className="text-center text-[#1348F9] mt-6 font-semibold text-[18px] md:text-[25px]">
                от 49,- €
              </p>
            </div>

            <div>
              <div className="relative">
                <Image
                  src={"/avto4.svg"}
                  className="w-[100%] h-[100%]"
                  alt={"avto1"}
                  width={100}
                  height={100}
                />
              </div>
              <p className="font-semibold text-center text-[20px] md:text-[24px] text-lightGreey">
                Небольшой фургон
              </p>
              <p className="text-center font-medium text-[18px] sm:text-[19px] text-lightGreey">
                160 x 120 x 120 см,максимум 400 кг, до 2 поддонов
              </p>
              <p className="text-center text-[#1348F9] mt-6 font-semibold text-[18px] md:text-[25px]">
                от 49,- €
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 odd:bg-[#F4F4F4] even:bg-white items-center w-[90%] mx-auto">
        <div className="flex items-center bg-[#F4F4F4]">
          <div className="w-[60%] sm:w-[20%] justify-between flex items-center">
            <div className="py-4 px-4">
              <p className="font-normal sm:font-semibold text-[14px] md:text-[20px] lg:text-[22px]">
                Погрузка сзади
              </p>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px]">
              <Image
                src={"/match.svg"}
                className="w-[100%] h-[100%]"
                alt="match"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="w-[20%]">
            <div className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px]">
              <Image
                src={"/match.svg"}
                className="w-[100%] h-[100%]"
                alt="match"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="w-[20%]">
            <div className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px]">
              <Image
                src={"/match.svg"}
                className="w-[100%] h-[100%]"
                alt="match"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="w-[20%]">
            <div className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px]">
              <Image
                src={"/match.svg"}
                className="w-[100%] h-[100%]"
                alt="match"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="w-[60%] sm:w-[20%] justify-between flex items-center">
            <div className="py-4 px-4">
              <p className="font-normal sm:font-semibold text-[14px] md:text-[20px] lg:text-[22px]">
                Загрузка боком
              </p>
            </div>
          </div>
          <div className="w-[20%]">
            <p className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px] bg-[#C4C4C4] flex items-center justify-center rounded-full text-[10px] sm:text-[20px] font-bold text-white">
              x
            </p>
          </div>
          <div className="w-[20%]">
            <p className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px] bg-[#C4C4C4] flex items-center justify-center rounded-full text-[10px] sm:text-[20px] font-bold text-white">
              x
            </p>
          </div>
          <div className="w-[20%]">
            <div className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px]">
              <Image
                src={"/match.svg"}
                className="w-[100%] h-[100%]"
                alt="match"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="w-[20%]">
            <div className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px]">
              <Image
                src={"/match.svg"}
                className="w-[100%] h-[100%]"
                alt="match"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center bg-[#F4F4F4]">
          <div className="w-[60%] sm:w-[20%] justify-between flex items-center">
            <div className="py-4 px-4">
              <p className="font-normal sm:font-semibold text-[14px] md:text-[20px] lg:text-[22px]">
                Загрузка сверху
              </p>
            </div>
          </div>
          <div className="w-[20%]">
            <p className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px] bg-[#C4C4C4] flex items-center justify-center rounded-full text-[10px] sm:text-[20px] font-bold text-white">
              x
            </p>
          </div>
          <div className="w-[20%]">
            <p className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px] bg-[#C4C4C4] flex items-center justify-center rounded-full text-[10px] sm:text-[20px] font-bold text-white">
              x
            </p>
          </div>
          <div className="w-[20%]">
            <div className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px]">
              <Image
                src={"/match.svg"}
                className="w-[100%] h-[100%]"
                alt="match"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="w-[20%]">
            <p className="w-[10px] md:w-[40px] h-[10px] sm:h-[40px] bg-[#C4C4C4] flex items-center justify-center rounded-full text-[10px] sm:text-[20px] font-bold text-white">
              x
            </p>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="w-[60%] sm:w-[20%] justify-between flex items-center">
            <div className="py-4 px-4">
              <p className="hidden md:flex font-normal sm:font-semibold text-[14px] md:text-[20px] lg:text-[22px]">
                Дополнительная информация
              </p>
              <p className="flex md:hidden font-normal sm:font-semibold text-[14px] md:text-[20px] lg:text-[22px]">
                Доп. инфо.
              </p>
            </div>
          </div>
          <div className="w-[20%] z-20 mb-12">
            <p className="md:font-medium text-[14px] font-normal sm:text-[18px] md:text-[20px] text-lightGreey">
              Нет
            </p>
          </div>
          <div className="w-[20%]">
            <p className="md:font-medium text-[14px] font-normal sm:text-[18px] md:text-[20px] text-lightGreey">
              Нет
            </p>
          </div>
          <div className="w-[20%]">
            <p className="md:font-medium text-[14px] font-normal sm:text-[18px] md:text-[20px] text-lightGreey">
              Нет
            </p>
          </div>
          <div className="w-[20%]">
            <div className="">
              <p className="font-normal md:font-medium text-[14px] sm:text-[18px] md:tetx-[20px] text-lightGreey line-clamp-2">
                Легкая загрузка тяжелых посылок (каждая весом не более 400 кг)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onas;
