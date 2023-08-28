"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import './side.css'
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname()
  return (
    <div className="w-[20%] fixed top-0 left-0 h-[100vh] bg-[#2F2E40]">
      <div className="w-[100%] flex flex-col">
        <div className="h-[133px] bg-Primary flex justify-center items-center">
          <p className="text-[30px] font-semibold text-white mb-4">
            Администратор
          </p>
        </div>
        <div className="flex flex-col mt-8 gap-y-8">
          <Link href={"/admin"} className={`${pathname == '/admin' ? 'bg-[#ffffff4d] py-4 text-white': 'text-heroLight'} nav-link flex justify-between items-center`}>
            <div className="flex w-[100%] mx-6">
              <div className="w-7 h-6">
                <Image src="/side1.svg" alt="side1" width={100} height={100} />
              </div>
              <div>
                <p className="ml-4 text-heroLight font-medium">
                  Информационная панель
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/client"} className={`${pathname == '/client'  ? 'bg-[#ffffff4d] py-4 text-heroLight': 'text-white'} nav-link flex justify-between items-center`}>
            <div className="flex w-[100%] mx-6 items-center justify-between">
              <div className="flex">
                <div className="w-7 h-6">
                  <Image
                    src="/side2.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 text-heroLight font-medium">Клиенты</p>
                </div>
              </div>
              <div className="w-2 h-2">
                <Image src="/side.svg" alt="side1" width={100} height={100} />
              </div>
            </div>
          </Link>
          <Link href={"/admin"} className="nav-link flex">
            <div className="flex w-[100%] mx-6 items-center justify-between">
              <div className="flex">
                <div className="w-6 h-5">
                  <Image
                    src="/side3.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 text-heroLight font-medium">
                    Грузоотправители
                  </p>
                </div>
              </div>
              <div className="w-2 h-2">
                <Image src="/side.svg" alt="side1" width={100} height={100} />
              </div>
            </div>
          </Link>
          <Link href={"/admin"} className="nav-link flex">
          <div className="flex w-[100%] mx-6 items-center justify-between">
              <div className="flex">
                <div className="w-6 h-5">
                  <Image
                    src="/side3.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 text-heroLight font-medium">Грузополучатели</p>
                </div>
              </div>
              <div className="w-2 h-2">
                <Image src="/side.svg" alt="side1" width={100} height={100} />
              </div>
            </div>
          </Link>
          <Link href={"/admin"} className="nav-link flex">
          <div className="flex w-[100%] mx-6 items-center justify-between">
              <div className="flex">
                <div className="w-6 h-5">
                  <Image
                    src="/side4.svg"
                    alt="side1"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p className="ml-4 text-heroLight font-medium">Отправки</p>
                </div>
              </div>
              <div className="w-2 h-2">
                <Image src="/side.svg" alt="side1" width={100} height={100} />
              </div>
            </div>
          </Link>
          <Link href={"/admin"} className="nav-link flex">
            <div className="flex w-[100%] mx-6">
              <div className="w-7 h-6">
                <Image src="/side5.svg" alt="side1" width={100} height={100} />
              </div>
              <div>
                <p className="ml-4 text-heroLight font-medium">
                Сообщения
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/wallet"} className={`${pathname == '/wallet' ? 'bg-[#ffffff4d] py-4 text-white': 'text-heroLight'} nav-link flex justify-between items-center`}>
            <div className="flex w-[100%] mx-6">
              <div className="w-7 h-6">
                <Image src="/side6.svg" alt="side1" width={100} height={100} />
              </div>
              <div>
                <p className="ml-4 text-heroLight font-medium">
                Кошелек
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/admin"} className="nav-link flex">
            <div className="flex w-[100%] mx-6">
              <div className="w-7 h-6">
                <Image src="/side7.svg" alt="side1" width={100} height={100} />
              </div>
              <div>
                <p className="ml-4 text-heroLight font-medium">
                Тарифы
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/admin"} className="nav-link flex">
            <div className="flex w-[100%] mx-6">
              <div className="w-7 h-6">
                <Image src="/side8.svg" alt="side1" width={100} height={100} />
              </div>
              <div>
                <p className="ml-4 text-heroLight font-medium">
                В пути
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/admin"} className="nav-link flex">
            <div className="flex w-[100%] mx-6">
              <div className="w-7 h-6">
                <Image src="/side9.svg" alt="side1" width={100} height={100} />
              </div>
              <div>
                <p className="ml-4 text-heroLight font-medium">
                Настройки
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
