"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const AdminSidebar = () => {
  const [side1Drop, setSide1Drop] = useState(true);
  const [side2Drop, setSide2Drop] = useState(true);
  const [side3Drop, setSide3Drop] = useState(true);
  const [side4Drop, setSide4Drop] = useState(true);
  const [side5Drop, setSide5Drop] = useState(true);
  return (
    <div className="w-[20%] fixed top-0 left-0  h-[100vh] bg-[#2F2E40]">
      <div className="w-[100%] flex flex-col">
        <div className="h-[133px] bg-Primary flex justify-center items-center">
          <p className="text-[30px] font-semibold text-white mb-4">
            Администратор
          </p>
        </div>
        <div className="">
          <div className="flex flex-col mt-8 gap-y-8 ">
            <Link
              href={"/admin"}
              passHref
              className={`text-heroLight nav-link focus:bg-white focus:py-3 focus:text-black flex justify-between items-center`}
            >
              <div className="flex w-[100%] mx-6">
                <div className="w-7 h-6">
                  <Image
                    src="/side1.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 font-medium">Информационная панель</p>
                </div>
              </div>
            </Link>
            <div
              className={`text-heroLight cursor-pointer nav-link flex justify-between items-center`}
            >
              <div className="flex w-[100%] mx-6 items-center justify-between">
                <div className="flex  focus:text-black">
                  <div className="w-7 h-6 cursor-pointer">
                    <Image
                      src="/side2.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p
                      className="ml-4 font-medium"
                      onClick={() => setSide1Drop((prev) => !prev)}
                    >
                      Клиенты
                    </p>
                  </div>
                </div>
                {side1Drop ? (
                  <div
                    className="w-2 h-2"
                    onClick={() => setSide1Drop((prev) => !prev)}
                  >
                    <Image
                      src="/side.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <div
                    className="w-3 h-2"
                    onClick={() => setSide1Drop((prev) => !prev)}
                  >
                    <Image
                      src="/back.svg"
                      alt="side2"
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>
            </div>
            {!side1Drop && (
              <div className="flex flex-col bg-[#888]">
                <Link
                  href={"/addclient"}
                  passHref
                  className={`text-[#0000009c] focus:text-[#000] nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">Добавить клиента</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/client"}
                  passHref
                  className={`text-[#0000009c]  focus:text-[#000] nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">Список клиентов</p>
                    </div>
                  </div>
                </Link>
              </div>
            )}
            <div
              className={`text-heroLight cursor-pointer nav-link flex justify-between items-center`}
            >
              <div className="flex w-[100%] mx-6 items-center justify-between">
                <div className="flex  focus:text-black">
                  <div className="w-7 h-6 cursor-pointer">
                    <Image
                      src="/side3.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p
                      className="ml-4 font-medium"
                      onClick={() => setSide2Drop((prev) => !prev)}
                    >
                      Грузоотправители
                    </p>
                  </div>
                </div>
                {side2Drop ? (
                  <div
                    className="w-2 h-2"
                    onClick={() => setSide2Drop((prev) => !prev)}
                  >
                    <Image
                      src="/side.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <div
                    className="w-3 h-2"
                    onClick={() => setSide2Drop((prev) => !prev)}
                  >
                    <Image
                      src="/back.svg"
                      alt="side2"
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>
            </div>
            {!side2Drop && (
              <div className="flex flex-col bg-[#888]">
                <Link
                  href={"/addshippers"}
                  passHref
                  className={`text-[#0000009c] focus:text-[#000] nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">
                        Добавить грузоотправителя
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/shippers"}
                  passHref
                  className={`text-[#0000009c] focus:text-[#000] nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">
                        Список грузоотправителей
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            <div
              className={`text-heroLight cursor-pointer nav-link flex justify-between items-center`}
            >
              <div className="flex w-[100%] mx-6 items-center justify-between">
                <div className="flex  focus:text-black">
                  <div className="w-7 h-6 cursor-pointer">
                    <Image
                      src="/side3.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p
                      className="ml-4 font-medium"
                      onClick={() => setSide3Drop((prev) => !prev)}
                    >
                      Грузополучатели
                    </p>
                  </div>
                </div>
                {side3Drop ? (
                  <div
                    className="w-2 h-2"
                    onClick={() => setSide3Drop((prev) => !prev)}
                  >
                    <Image
                      src="/side.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <div
                    className="w-3 h-2"
                    onClick={() => setSide3Drop((prev) => !prev)}
                  >
                    <Image
                      src="/back.svg"
                      alt="side2"
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>
            </div>
            {!side3Drop && (
              <div className="flex flex-col bg-[#888]">
                <Link
                  href={"/addconsignees"}
                  passHref
                  className={`text-[#0000009c] focus:text-black nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">
                        Добавить грузоотправителя
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/consignees"}
                  passHref
                  className={`text-[#0000009c] focus:text-black nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">
                        Список грузоотправителей
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            <div
              className={`text-heroLight cursor-pointer nav-link flex justify-between items-center`}
            >
              <div className="flex w-[100%] mx-6 items-center justify-between">
                <div className="flex  focus:text-black">
                  <div className="w-7 h-6 cursor-pointer">
                    <Image
                      src="/side4.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p
                      className="ml-4 font-medium"
                      onClick={() => setSide4Drop((prev) => !prev)}
                    >
                      Отправки
                    </p>
                  </div>
                </div>
                {side4Drop ? (
                  <div
                    className="w-2 h-2"
                    onClick={() => setSide4Drop((prev) => !prev)}
                  >
                    <Image
                      src="/side.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <div
                    className="w-3 h-2"
                    onClick={() => setSide4Drop((prev) => !prev)}
                  >
                    <Image
                      src="/back.svg"
                      alt="side2"
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>
            </div>
            {!side4Drop && (
              <div className="flex flex-col bg-[#888]">
                <Link
                  href={"/adddispatch"}
                  passHref
                  className={`text-[#0000009c] focus:text-black nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">Добавить отправки</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"/dispatch"}
                  passHref
                  className={`text-[#0000009c] focus:text-black nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">
                        Список грузополучателей
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            <div
              className={`text-heroLight cursor-pointer nav-link flex justify-between items-center`}
            >
              <div className="flex w-[100%] mx-6 items-center justify-between">
                <div className="flex  focus:text-black">
                  <div className="w-7 h-6 cursor-pointer">
                    <Image
                      src="/side5.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p
                      className="ml-4 font-medium"
                      onClick={() => setSide5Drop((prev) => !prev)}
                    >
                      Сообщения
                    </p>
                  </div>
                </div>
                {side5Drop ? (
                  <div
                    className="w-2 h-2"
                    onClick={() => setSide5Drop((prev) => !prev)}
                  >
                    <Image
                      src="/side.svg"
                      alt="side1"
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <div
                    className="w-3 h-2"
                    onClick={() => setSide5Drop((prev) => !prev)}
                  >
                    <Image
                      src="/back.svg"
                      alt="side2"
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>
            </div>
            {!side5Drop && (
              <div className="flex flex-col bg-[#888]">
                <Link
                  href={"/message"}
                  passHref
                  className={`text-[#0000009c] focus:text-black nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">SMS-отправка</p>
                    </div>
                  </div>
                </Link>
                {/* <Link
                  href={"/dispatch"}
                  passHref
                  className={`text-[#0000009c] focus:text-black nav-link flex justify-between items-center focus:bg-[#48475874] py-3 `}
                >
                  <div className="flex w-[100%] mx-6 ">
                    <div className="ml-2 mt-[6px]  w-[14px] h-[14px] rounded-full border-2 object-cover border-white"></div>
                    <div className="">
                      <p className="ml-4  font-medium">
                      Сообщения
                      </p>
                    </div>
                  </div>
                </Link> */}
              </div>
            )}

            {/* <Link href={"/admin"} className="nav-link flex">
              <div className="flex w-[100%] mx-6">
                <div className="w-7 h-6">
                  <Image
                    src="/side5.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 text-heroLight font-medium">Сообщения</p>
                </div>
              </div>
            </Link> */}
            <Link
              href={"/wallet"}
              className={`text-heroLight nav-link flex justify-between items-center`}
            >
              <div className="flex w-[100%] mx-6">
                <div className="w-7 h-6">
                  <Image
                    src="/side6.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 text-heroLight font-medium">Кошелек</p>
                </div>
              </div>
            </Link>
            <Link
              href={"/rates"}
              className={`text-heroLight nav-link flex justify-between items-center`}
            >
              <div className="flex w-[100%] mx-6">
                <div className="w-7 h-6">
                  <Image
                    src="/side7.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 text-heroLight font-medium">Тарифы</p>
                </div>
              </div>
            </Link>
            <Link
              href={"/way"}
              className={`text-heroLight nav-link flex justify-between items-center`}
            >
              <div className="flex w-[100%] mx-6">
                <div className="w-7 h-6">
                  <Image
                    src="/side8.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 text-heroLight font-medium">В пути</p>
                </div>
              </div>
            </Link>
            <Link href={"/admin"} className="nav-link flex">
              <div className="flex w-[100%] mx-6">
                <div className="w-7 h-6">
                  <Image
                    src="/side9.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 text-heroLight font-medium">Настройки</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
