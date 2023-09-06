"use client"
import React, { useState } from 'react';

function GoogleMaps() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [er, setEr] = useState("")

  const handleInputChange = (event: any) => {
    setCity(event.target.value);
  };

  const convertCityToCoordinates = () => {
    // Shahar nomini kordinatalarga o'girish uchun ulashingiz kerak bo'lgan xizmat yoki API-ni ishlatishingiz kerak.
    // Bu qismni o'zgartiring va istalgan xizmatni ishlatishni o'rganing.

    // Masalan: Geonames API-ni ishlatish
    fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=dima66116611`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.geonames && data.geonames.length > 0) {
          const firstResult = data.geonames[0];
          setLatitude(firstResult.lat);
          setLongitude(firstResult.lng);
        } else {
          console.error('Shahar topilmadi');
          setEr("Shahar Topilmadi")
        }
      })
      .catch((error) => {
        console.error('Xatolik:', error);
      });
  };

  const KEY = '96b947a45d33d7dc1c49af3203966408'


// https://api.openweathermap.org/data/2.5/weather?q=London&appid=96b947a45d33d7dc1c49af3203966408





  return (
    <div className='m-4'>
      <h1>Shahar nomni kordinatalarga o'girish</h1>
      <input
        type="text"
        placeholder="Shahar nomini kiriting"
        value={city}
        onChange={handleInputChange}
        className='border px-3  m-4 '
      />
      <button onClick={convertCityToCoordinates} className='bg-Primary text-white p-2'>O'girish</button>
      {latitude !== null && longitude !== null && (
        <div>
          <p>Kenglik: {latitude}</p>
          <p>Uzunlik: {longitude}</p>
        </div>
      )}
    </div>
  );
}

export default GoogleMaps;
