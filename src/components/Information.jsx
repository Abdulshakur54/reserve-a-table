import React from 'react'

export default function Information({label,value}) {
  return (
    <div className='flex flex-row w-full py-3 px-1'>
      <div className='w-[105px] font-semibold'>{label}:</div>
      <div className='flex-1'>{value}</div>
    </div>
  )
}
