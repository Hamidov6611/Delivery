"use client"
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
import { BASE_URL } from '@/helpers/usefetch';
interface userProps {
  username: string,
   password: string
}
const AdminHeader = () => {
  let data

  
  
  useEffect(() => {
    let user = Cookies.get("user")
    if(user !== undefined) {
      data = JSON.parse(user)
    }

    
  }, [])
  // console.log(data)
  return (
    <div className='h-[100px] bg-Primary flex flex-row items-center'>
      <div className='w-[100%] flex flex-row justify-between'>
        <div className='ml-8'>
          <IconButton>
            <DehazeIcon sx={{color:"white"}} fontSize='medium' />
          </IconButton>
        </div>
        <div className='flex items-center mr-8'>
          <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
            <p className='text-Primary font-semibold text-[18px]'>A</p>
          </div>
          <div className='flex ml-6'>
            <p className='font-bold text-lg text-white mr-4 font-montserrat'>Админ</p>
            <img src="./Vector.svg" alt="vector" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader