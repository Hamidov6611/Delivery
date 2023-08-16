const About = () => {
  return (
    <>
      <div className="w-[90%] mx-auto grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 xl:gap-x-8 mt-[100px]">
        <div className="bg-#FBFBFB border p-5 rounded-2xl">
          <div className="w-[60px] h-[60px] flex items-center justify-center bg-heroGreey rounded-[16px]">
            1
          </div>
          <p className="text-[#2F2E40] font-semibold text-[20px] md:text-[25px] line-clamp-1 mt-3 ">
            Эффективные экспресс-перевозки:
          </p>
          <p className="font-normal line-clamp-5 text-[18px] lg:text-[21px] text-[#2F2E40]">
            Наш собственный парк транспортных средств адаптирован для обработки
            экспресс-отправлений, что позволяет нам обеспечивать более быстрое
            время транспортировки и своевременную доставку.
          </p>
        </div>
        <div className="bg-#FBFBFB border p-5 rounded-2xl">
          <div className="w-[60px] h-[60px] flex items-center justify-center bg-heroGreey rounded-[16px]">
            2
          </div>
          <p className="text-[#2F2E40] font-semibold text-[20px] md:text-[25px] line-clamp-1 mt-3 ">
            Надежные решения LTL
          </p>
          <p className="font-normal line-clamp-5 text-[18px] lg:text-[21px] text-[#2F2E40]">
            Для небольших объемов грузов наши надежные субподрядчики предлагают
            гибкие и экономичные варианты LTL, соответствующие вашим конкретным
            потребностям в перевозке.
          </p>
        </div>
        <div className="bg-#FBFBFB border p-5 rounded-2xl">
          <div className="w-[60px] h-[60px] flex items-center justify-center bg-heroGreey rounded-[16px]">
            3
          </div>
          <p className="text-[#2F2E40] font-semibold text-[20px] md:text-[25px] line-clamp-1 mt-3 ">
            Прозрачность и коммуникация
          </p>
          <p className="font-normal line-clamp-5 text-[18px] lg:text-[21px] text-[#2F2E40]">
            Мы верим в прозрачную коммуникацию, информируя вас на протяжении
            всего процесса транспортировки. Наша служба поддержки клиентов
            всегда готова оперативно ответить на ваши запросы.
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex md:flex-row flex-col gap-y-12 mt-12 justify-between mb-20">
        <div className="bg-#FBFBFB border p-5 rounded-2xl w-[100%] md:w-[40%]">
          <div className="w-[60px] h-[60px] flex items-center justify-center bg-heroGreey rounded-[16px]">
            2
          </div>
          <p className="text-[#2F2E40] font-semibold text-[20px] md:text-[25px] line-clamp-1 mt-3 ">
            Постоянное совершенствование
          </p>
          <p className="font-normal line-clamp-5 text-[18px] lg:text-[21px] text-[#2F2E40]">
            Мы стремимся к постоянному совершенствованию, регулярно
            совершенствуя наши услуги, чтобы адаптироваться к меняющемуся
            ландшафту после BREXIT и соответствовать вашим меняющимся
            требованиям.
          </p>
        </div>
        <div className="bg-#FBFBFB border p-5 rounded-2xl  w-[100%] md:w-[58%]">
          <p className="font-normal text-[18px] lg:text-[19px] text-[#2F2E40] leading-[31.5px]">
            В UK2EU мы гордимся тем, что упрощаем ваш транспортный процесс. Наше
            внимание к удовлетворенности клиентов побуждает нас предоставлять
            надежные, эффективные и экономичные решения для всех ваших
            потребностей в доставке. Выберите UK2EU в качестве вашего партнера
            по перевозкам и позвольте нам разобраться в сложностях перевозок
            после BREXIT, в то время как вы сосредоточитесь на развитии своего
            бизнеса. По любым вопросам или для того, чтобы начать работу с
            вашими отправками, пожалуйста, не стесняйтесь обращаться к нашей
            специализированной команде. Мы с нетерпением ждем возможности
            служить вам! Команда UK2EU
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
