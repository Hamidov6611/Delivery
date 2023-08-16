"use client"

import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col w-[100%] mx-auto">
        <div className="w-[95%] mx-auto lg:w-[45%] px-2 sm:px-0 sm:ml-[5%] mt-[3%] z-40">
          <p className="hidden md:flex font-semibold md:font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[65px] text-[#2F2E40]">
            Быстрая и надежная доставка – ваше время ценится!
          </p>
          <p className="flex md:hidden text-center font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[65px] text-[#2F2E40]">
            Быстрая и надежная доставка – ваше время ценится!
          </p>
          <div className="flex flex-col gap-y-4 md:gap-y-6 md:mt-8">
            <div className="w-[100%] md:w-[80%] flex items-center">
              <div className="pl-1 md:w-[10%] ">
                <div className="relative md:w-[37.51px] w-[24px] mr-2">
                  <Image
                    src={"/check.svg"}
                    width={37.51}
                    alt={"check"}
                    height={25.62}
                  />
                </div>
              </div>
              <div className="w-[90%]">
                <p className="font-montserrat font-semibold sm:font-bold text-[16px] sm:text-[19.21px] text-darkBlack">
                  Встреча через 60-120 минут
                </p>
                <p className="line-clamp-2 font-montserrat font-semibold text-[14px] sm:text-[18px] text-lightGreey">
                  По всей Германии и во всех мегаполисах Европы - в настоящее
                  время примерно за 72 минуты.
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[80%] flex items-center">
              <div className="pl-1 md:w-[10%]">
                <div className="relative md:w-[37.51px] w-[24px] mr-2">
                  <Image
                    src={"/check.svg"}
                    width={37.51}
                    alt={"check"}
                    height={25.62}
                  />
                </div>{" "}
              </div>
              <div className="w-[90%]">
                <p className="font-montserrat font-semibold sm:font-bold text-[16px] sm:text-[19.21px] text-darkBlack">
                  Доставка в наилучшие сроки
                </p>
                <p className="line-clamp-2 font-montserrat font-semibold text-[14px] sm:text-[18px] text-lightGreey">
                  Мы осуществляем прямые перевозки и доставляем товары уже
                  сегодня
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[80%] flex items-center">
              <div className="pl-1 md:w-[10%]">
                <div className="relative md:w-[37.51px] w-[24px] mr-2">
                  <Image
                    src={"/check.svg"}
                    width={37.51}
                    alt={"check"}
                    height={25.62}
                  />
                </div>{" "}
              </div>
              <div className="w-[90%]">
                <p className="font-montserrat font-semibold sm:font-bold text-[16px] sm:text-[19.21px] text-darkBlack">
                  Все вокруг-Беззаботный-Транспорт
                </p>
                <p className="line-clamp-2 font-montserrat font-semibold text-[14px] sm:text-[18px] text-lightGreey">
                  Мы обеспечиваем бесперебойную транспортировку и заботимся обо
                  всех деталях
                </p>
              </div>
            </div>

            <div className="w-[95%] mx-auto flex flex-col">
              <div className="w-[100%] md:w-[80%] flex flex-col lg:pt-12">
                <button className="bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out  md:w-[95%] font-semibold text-white text-[18px] sm:text-[18px]  flex items-center justify-around py-2 sm:py-4 px-1 sm:px-8 rounded-lg">
                  Расчитайте цену сейчас <p className="hidden md:flex">и забронируйте напряму</p>
                  <div className="w-[30px] h-[30px] md:w-[38.89px] md:h-[38.89px] ">
                    <Image
                      className="sm:ml-3 ml-1"
                      src={"/calc.svg"}
                      alt="calc"
                      height={100}
                      width={100}
                    />
                  </div>
                </button>
              </div>
              <p className="mt-2 lg:mt-3 lg:text-[20px] font-medium text-lightGreey">
                за последние 12 месяцев было доставлено более 36 000 отправлений
              </p>
            </div>
          </div>
        </div>

        <div className="w-[100%] lg:w-[55%]  lg:flex justify-end relative">
          <div className="z-20 sticky ">
          <Image
            src={"/hero.svg"}
            alt={"hero"}
            width={1000}
            height={718}
            style={{zIndex: 2}}
          />
          </div>
          <div className="absolute right-0 bottom-0 md:mb-5 w-[320px] lg:w-[850px] z-10">
            <Image
              src={"/fullRight.svg"}
              width={850}
              alt={"check"}
              height={718}
              style={{zIndex: 1}}
            />
          </div>
        </div>
    </div>
  )
}

export default Hero