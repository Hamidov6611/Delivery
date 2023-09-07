"use client";

import { Switch } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FullscreenControl, GeoObject, GeolocationControl, Map, YMaps, ZoomControl,} from "react-yandex-maps";

const Step2 = () => {
  const [checked, setChecked] = useState(false);
  const [startCity, setStartCity] = useState<string>('');
  const [endCity, setEndCity] = useState<string>('');
  let lot1: number[] = []
  let lot2: number[] = []
  const [st, setSt] = useState<number[]>()
  const [st2, setSt2] = useState<number[]>()
  const [view, setView] = useState(false)
  const [distance, setDistance] = useState<string | number>();


  const handleStartCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCity(e.target.value);
  };

  const handleEndCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndCity(e.target.value);
  };
  const KEY = '96b947a45d33d7dc1c49af3203966408'
  const getData = async (city: string) => {
    try {
      const base  = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    const req = await fetch(base + query)
    const data = await req.json()
    // console.log(data)
    let a = data.coord.lat
    let b = data.coord.lon
    lot1 = [a, b]
    // console.log(typeof lot2)
    setSt(lot1)
    } catch (error) {
      console.log(error)
    }
}
useEffect(() => {
  getData('London')
}, [])
const getData2 = async (city: string) => {
  const base  = 'https://api.openweathermap.org/data/2.5/weather'
  const query = `?q=${city}&units=metric&appid=${KEY}`
  // loader(true)
  const req = await fetch(base + query)
  const data = await req.json()
  // lot2[0] = (data.coord.lat)
  // lot2[1] = (data.coord.lon)
  // console.log(lot2)
  let a = data.coord.lat
  let b = data.coord.lon
  lot2 = [a, b]
  setSt2(lot2)
}

// const calculateDistance = () => {
//   if(view) {
//     // 2 ta shahar uchun kordinatalar
//   let lat1 = st && parseFloat(String(st[0]).split('.')[0]);
//   let lon1 = st && parseFloat(String(st[1]).split('.')[1]);
//   let lat2 = st2 &&  parseFloat(String(st2[0]).split('.')[0]);
//   let lon2 = st2 && parseFloat(String(st2[1]).split('.')[1]);
// console.log(lat1)
//   // Haversine formulasi orqali masofani hisoblash
//   let R = 6371; // Yer radiusi (km)
//   let dLat = (lat2 - lat1) * (Math.PI / 180);
//   let dLon = (lon2 - lon1) * (Math.PI / 180);
//   let a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1 * (Math.PI / 180)) *
//       Math.cos(lat2 * (Math.PI / 180)) *
//       Math.sin(dLon / 2) *
//       Math.sin(dLon / 2);
//       let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       let result: string | number = R * c;

//   setDistance(result.toFixed(2)); // Masofani km da hisoblash va 2 desimal songacha qat'iy qilib olish
//   }
// };

// function calculateDistance2(lat1: number, lon1: number, lat2: number, lon2: number) {
//   var R = 6371; // Radius of the earth in km
//   var dLat = deg2rad(lat2-lat1);  // deg2rad below
//   var dLon = deg2rad(lon2-lon1); 
//   var a = 
//     Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
//     Math.sin(dLon/2) * Math.sin(dLon/2)
//     ; 
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//   var d = R * c; // Distance in km
//   console.log(d)

//   return d;
// }
// lat1 = st[0], lon1 = st[1], lat2 = st2[0], lon2 = st2[1]

// function deg2rad(deg: number) {
//   console.log(typeof deg)
//   return deg * (Math.PI/180)
// }

  const getFullData = async (e: any) => {
    e.preventDefault()
    if(startCity.length > 0 && endCity.length > 0) {
      await getData(startCity)
      await getData2(endCity)
      //  calculateDistance()
      //  if(st && st2) {
      //   calculateDistance2(st[0], st[1], st2[0], st2[1])
      //  }
      setView(true)
    }


  }



  // console.log(st, st2, distance)
  // console.log(st && String(st[0])?.split('.')[0])


  return (
    <div className="sm:mt-12">
      <p className="text-center font-montserrat font-semibold text-[17px] lg:hidden">
        Маршрут и даты
      </p>
      <p className="text-center font-normal text-lightGreey text-[15px] mt-2 sm:text-[20px]">
        Перевозка мебели
      </p>
      <p className="text-center font-montserrat font-semibold text-[17px] mt-2 text-lightGreey mb-4">
        Выберите маршрут
      </p>

      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-[100%] md:w-[35%]">
          <div className="flex flex-col">
            <div className="w-[100%] mb-6 p-6 md:p-12 shadow-lg border rounded-lg flex flex-col justify-center items-center">
              <div className="w-[100%] mb-4">
                <p className="mb-2 font-normal text-[18px] sm:text-[22px] text-lightGreey">
                  от
                </p>
                <div className="relative">
                  <input
                  value={startCity}
                  onChange={handleStartCityChange}
                    placeholder={`Введите адрес доставки`}
                    type="text"
                    className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-12 font-medium"
                  />
                  <div className="w-[17px] h-[22px] absolute top-2 left-4">
                    <Image
                      src={"/loc1.svg"}
                      alt="location"
                      width={100}
                      height={100}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%]">
                <p className="mb-2 font-normal text-[18px] sm:text-[22px] text-lightGreey">
                  для
                </p>
                <div className="relative">
                  <input
                  value={endCity}
                  onChange={handleEndCityChange}
                    placeholder={`Введите адрес доставки`}
                    type="text"
                    className="border w-[100%] py-2 rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-12 font-medium"
                  />
                  <div className="w-[17px] h-[22px] absolute top-2 left-4">
                    <Image
                      src={"/loc2.svg"}
                      alt="location"
                      width={100}
                      height={100}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
              </div>
              <button className="mt-4 bg-Primary text-white py-2 px-8 rounded-lg font-bold" onClick={getFullData}>Qidirish</button>
            </div>
            <div className="w-[100%] mb-6 p-6 md:p-12 shadow-lg border rounded-lg flex flex-col justify-center items-center">
              <div className="w-[100%] mb-4">
                <div className="flex items-center ">
                  <p className=" sm:font-normal text-[15px] font-montserrat sm:text-[18px] md:text-[22px] font-semibold text-lightGreey mr-5">
                    Я хочу указать дату
                  </p>
                  <div className="flex items-center">
                    <Switch
                      defaultChecked={checked}
                      onClick={() => setChecked((prev) => !prev)}
                    />
                    <p className="ml-2 sm:ml-8 font-normal font-montserrat text-[15px] sm:text-[20px] text-lightGreey mr-2">
                      {checked ? "Да" : "Нет"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex sm:flex-row flex-col justify-between mt-3 sm:items-center">
                    <p className="text-[15px] sm:text-[18px] font-montserrat font-normal text-lightGreey mb-2 sm:mb-0">
                      ДАТА ПОЛУЧЕНИЯ
                    </p>
                    <div>
                      <input
                        type="date"
                        placeholder="Выберите дату"
                        className="border w-[100%] py-2 rounded-md text-[#667085] font-montserrat text-[14px]  focus:outline-[#1348F9] px-6 sm:px-12 font-medium"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col justify-between mt-3 sm:items-center">
                    <p className="text-[15px] sm:text-[18px]  font-montserrat font-normal text-lightGreey">
                      ДАТА ДОСТАВКИ
                    </p>
                    <div>
                      <input
                        type="date"
                        placeholder="Выберите дату"
                        className="border w-[100%] py-2 font-montserrat rounded-md text-[#667085] text-[14px]  focus:outline-[#1348F9] px-6 sm:px-12 font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[62%] flex flex-col">
          {/* <div className="flex flex-col w-[100%]">
            <Image
              src={"/map.svg"}
              alt="map"
              width={100}
              height={100}
              className="w-[100%] h-[100%]"
            />
            <Image
              src={"/submap.svg"}
              alt="map"
              width={100}
              height={100}
              className="w-[100%] h-[100%"
            />
          </div> */}
          <YMaps>
            <div>
                <Map
                defaultState={{
                  center: [55.751574, 37.573856],
                  zoom: 9,
                
                }}
                width={"100%"}
                height={"550px"}
              >
                {(view && st && st2)&& (
                  <GeoObject
                  geometry={{
                    type: "LineString",
                    coordinates: [
                      st,
                      st2,
                    ],
                  }}
                  options={{
                    geodesic: true,
                    strokeWidth: 5,
                    strokeColor: "#fc030f",
                  }}
                />
                )}
                <FullscreenControl options={{ float: "left" }} />
                <GeolocationControl options={{ float: "right" }} />
                <ZoomControl options={{ float: "right" }} />
              </Map>
               
            </div>
          </YMaps>
          {/* <p className="text-[19px] text-lightGreey font-montserrat mt-6">{distance ? parseInt(distance) + " km": ""}</p> */}
        </div>
      </div>
      <div className="mt-12 flex w-[100%] justify-center">
        <button className="bg-[#85858538] rounded-lg mr-5">
          <div className="flex flex-col w-[100%] py-1 px-4 sm:py-3 sm:px-8">
            <Image
              src={"/leftleft.svg"}
              alt="map"
              width={100}
              height={100}
              className="w-[100%] h-[100%]"
            />
          </div>
        </button>

        <button className="bg-heroPrimary hover:bg-Primary transition duration-200 ease-in-out  font-semibold text-white text-[15px] sm:text-[18px]  flex items-center justify-around py-2 sm:py-4 px-3 sm:px-8 rounded-lg">
          Перейдите к деталям товара
        </button>
      </div>
    </div>
  );
};

export default Step2;
