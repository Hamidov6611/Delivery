"use client"
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from '@mui/material';
import React from 'react'

const AdminHeader = () => {
  return (
    <div className='h-[133px] bg-Primary flex flex-row items-center'>
      <div className='w-[100%] flex flex-row justify-between'>
        <div className='ml-8'>
          <IconButton>
            <DehazeIcon sx={{color:"white"}} fontSize='large' />
          </IconButton>
        </div>
        <div className='flex items-center mr-8'>
          <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center'>
            <p className='text-Primary font-semibold text-[18px]'>A</p>
          </div>
          <div className='flex ml-6'>
            <p className='font-bold text-lg text-white mr-4'>Админ</p>
            <img src="./Vector.svg" alt="vector" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader