"use client";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import React, { FC, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const handleClick = () => setIsMenu((prev) => !prev);

  const [isLang, setIsLang] = useState(false);
  const changeLang = () => setIsLang((prev) => !prev);
  return (
    <div>
      <div
        className={`h-[90px] lg:h-[133px] w-full bg-[#1348F9] hidden lg:flex items-center`}
      >
        <div className="w-[100%] md:w-[90%] mx-auto lg:flex items-center hidden">
          <Link href={"/"} className="w-[18%]">
            <Image
              src={"/logo1.svg"}
              alt="logo"
              width={118}
              height={108}
              className="object-cover"
            />
          </Link>
          <div className="w-[82%] flex justify-between">
            <div className="flex w-[45%] justify-between items-center">
              <div className="flex">
                <Link
                  href={"/services"}
                  className="mr-2 hover:text-gray-900 text-[20px] text-white"
                >
                  Услуги
                </Link>
                <Image
                  src={"/Vector.svg"}
                  className="mr-5"
                  alt="vector"
                  width={15}
                  height={5}
                />
              </div>
              <Link
                href={"/calculator"}
                className="mr-5 hover:text-gray-900 font-medium text-[20px] text-white"
              >
                Калькулятор
              </Link>
              <Link
                href={"/reviews"}
                className="mr-5 hover:text-gray-900 font-medium text-[20px] text-white"
              >
                Отзывы
              </Link>
              <Link
                href={"/blog"}
                className="mr-5 hover:text-gray-900 font-medium text-[20px] text-white"
              >
                Блог
              </Link>
            </div>
            <div className="w-[55%] flex justify-end items-center">
              <Link
                href={"/"}
                className="text-[18px] font-semibold text-white mr-5 hover:text-gray-900"
              >
                Вход
              </Link>
              <Link
                href={"/"}
                className="font-bold mr-5 text-[17px] border text-white p-3 rounded-md  hover:border-transparent transition duration-200 ease-in-out hover:bg-white hover:text-[#1348F9]"
              >
                Регистрация
              </Link>
              <div className="flex">
                <Image
                  src={"/ru.svg"}
                  alt="ru"
                  width={29}
                  height={20}
                  className="cursor-pointer mr-3"
                />
                <Image
                  src={"/Vector.svg"}
                  alt="ru"
                  width={15}
                  height={5}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[80px] lg:hidden">
        <Box sx={{ flexGrow: 1 }}>
          <div
            style={{ position: "fixed", top: 0 }}
            className={`${
              isMenu ? "bg-[#050038]" : "bg-white"
            } w-[100%] shadow-xl py-2 px-3 sticky top-0 z-50`}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link href={"/"}>
                <div className="w-[38%]">
                  {isMenu ? (
                    <Image
                      src={"/logo1.svg"}
                      alt="logo"
                      width={118}
                      height={108}
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src={"/logo7.svg"}
                      alt="logo"
                      width={118}
                      height={108}
                      className="object-cover"
                    />
                  )}
                </div>
              </Link>

              <div>
                {!isMenu && (
                  <Link
                    href={"/"}
                    className="bg-[#1348F9] mr-5 py-2 px-4 rounded-full text-white font-semibold"
                  >
                    Регистрация
                  </Link>
                )}
                {isMenu ? (
                  <IconButton
                    onClick={handleClick}
                    size="large"
                    edge="start"
                    sx={{ color: "white" }}
                    aria-label="menu"
                  >
                    <ClearIcon fontSize="medium" />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={handleClick}
                    size="large"
                    edge="start"
                    sx={{ color: "black" }}
                    aria-label="menu"
                  >
                    <MenuIcon fontSize="medium" />
                  </IconButton>
                )}
              </div>
            </div>
          </div>
        </Box>
      </div>

      {isMenu && (
        <div className="w-[100%] h-[100vh] fixed flex flex-col justify-start items-start top-0 left-0 bg-[#050038] z-50 ">
          <div className="w-[100%] mt-[80px] flex flex-col px-4">
            <div className="h-[2px] w-[100%] bg-heroGreey rounded-lg mb-2 mt-2"></div>
            <div className="flex justify-between ">
              <Link
                href={"/services"}
                className="mr-2 text-[20px] text-white font-semibold"
                onClick={() => setIsMenu(false)}
              >
                Услуги
              </Link>
              <Image
                src={"/Vector.svg"}
                className="mr-5"
                alt="vector"
                width={15}
                height={5}
              />
            </div>
            <div className="h-[2px] w-[100%] bg-heroGreey rounded-lg mb-2 mt-2"></div>

            <Link
              onClick={() => setIsMenu(false)}
              href={"/calculator"}
              className="mr-5  text-[20px] text-white  font-semibold"
            >
              Калькулятор
            </Link>
            <div className="h-[2px] w-[100%] bg-heroGreey rounded-lg mb-2 mt-2"></div>

            <Link
            onClick={() => setIsMenu(false)}
              href={"/reviews"}
              className="mr-5   text-[20px] text-white  font-semibold"
            >
              Отзывы
            </Link>
            <div className="h-[2px] w-[100%] bg-heroGreey rounded-lg mb-2 mt-2"></div>

            <Link
              onClick={() => setIsMenu(false)}
              href={"/blog"}
              className="mr-5 font-semibold text-[20px] text-white"
            >
              Блог
            </Link>
          </div>

          <div className="mt-9 w-[100%] flex justify-center pt-9 flex-col items-center">
            <Link href={"/"} className="w-[200px]">
              <p className="bg-[#1348F9] text-white py-3 px-8 text-center rounded-full font-semibold mb-8  ">
                Регистрация
              </p>
            </Link>

            <Link href={"/"} className="flex">
              <p className="text-white text-md font-semibold mr-5">Логин</p>
              <p className="text-white text-md font-semibold">
                Связаться с нами!
              </p>
            </Link>

            <div className="mt-8 flex items-center">
              <LanguageIcon
                fontSize="large"
                sx={{ color: "white", marginRight: "20px" }}
              />
              <div className="flex">
                <Image
                  onClick={changeLang}
                  src={"/ru.svg"}
                  alt="ru"
                  width={29}
                  height={20}
                  className="cursor-pointer mr-3"
                />
                <Image
                  onClick={changeLang}
                  src={"/Vector.svg"}
                  alt="ru"
                  width={15}
                  height={5}
                  className="cursor-pointer"
                />
              </div>
            </div>
            {isLang && (
              <div className="bg-white h-[135px] w-[250px] rounded-lg ml-5 p-2 mt-6 flex flex-col">
                <div className="flex mb-4 mt-2">
                  <Image
                    src={"/gl.svg"}
                    alt="ru"
                    width={29}
                    height={20}
                    className="cursor-pointer mr-3"
                  />
                  <p className="text-black  font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                    Netherlands
                  </p>
                </div>

                <div className="flex mb-4 ">
                  <Image
                    src={"/fr.svg"}
                    alt="ru"
                    width={29}
                    height={20}
                    className="cursor-pointer mr-3"
                  />
                  <p className="text-black  font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                    France
                  </p>
                </div>

                <div className="flex mb-4 ">
                  <Image
                    src={"/en.svg"}
                    alt="ru"
                    width={29}
                    height={20}
                    className="cursor-pointer mr-3"
                  />
                  <p className="text-black  font-medium text-[15px] sm:text-[17px] md:text-[19px]">
                    England
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
