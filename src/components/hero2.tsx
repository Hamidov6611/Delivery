import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="flex lg:flex-row flex-col w-[100%] mx-auto">
      <div className="w-[95%] lg:w-[45%] pl-4 sm:pl-0 sm:px-0 sm:ml-[5%] mt-[3%] z-40">
        <p className="hidden md:flex font-semibold md:font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[55px] text-[#2F2E40]">
          Курьерская служба для прямых перевозок
        </p>
        <p className="flex md:hidden text-center font-semibold md:font-bold text-[18px] mb-4 sm:mb-0 sm:text-[24px] md:text-[28px] lg:text-[65px] text-[#2F2E40]">
          Быстрая и надежная доставка – ваше время ценится!
        </p>
        <p className="font-normal text-[18px] md:text-[21px] text-lightGreey">
          Упрощение перевозок после BREXIT между Великобританией и странами ЕС
          Добро пожаловать в UK2EU, вашего надежного экспедитора для
          бесперебойных транспортных решений между Великобританией и странами
          ЕС. Располагая собственным автопарком, предназначенным для
          экспресс-перевозок, и сетью надежных субподрядчиков для перевозок
          грузовыми автомобилями (LTL), мы здесь для того, чтобы упростить ваши
          транспортные потребности после BREXIT.
        </p>
        <p className="mt-4 md:mt-8 font-normal text-[18px] md:text-[21px] text-lightGreey">
          Поскольку эпоха после BREXIT ставит новые задачи в области
          трансграничной логистики, наша главная цель - сделать международные
          перевозки простыми и беспроблемными для наших уважаемых клиентов. Наша
          команда экспертов хорошо разбирается в тонкостях правил и таможенных
          процедур после BREXIT, обеспечивая бесперебойную доставку на каждом
          этапе.
        </p>
        <div className="w-[95%] mx-auto flex flex-col mt-4">
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
            </div>
      </div>
      <div className="w-[100%] lg:w-[55%]  lg:flex justify-end relative z-20">
        <div className="z-20 sticky ">
          <Image
            src={"/hero2.svg"}
            alt={"hero"}
            width={700}
            height={718}
            className="z-20"
          />
        </div>

        <div className="absolute right-0 bottom-0  w-[320px] lg:w-[850px] z-10">
          <Image
            src={"/fullRight.svg"}
            width={850}
            alt={"check"}
            height={718}
            className="z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
