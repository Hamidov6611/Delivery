import { RatesTable } from '@/components'
import React from 'react'

const Rates = () => {
  return (
    <div className='p-6'>
    <p className="text-[18px] sm:text-[20px] md:text-[32px] lg:text-[45px] text-lightGreey font-semibold">Тарифы на перевозку грузов</p>
        <div className='my-8'>
            <RatesTable />
        </div>
  </div>
  )
}

export default Rates