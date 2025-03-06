import React from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'

export default function DoctorBanner() {
  return (
    <div className='md:grid grid-cols-2 h-180'>
      {/* <div className='text-2xl'>DoctorBanner</div> */}
      <div className="flex justify-center items-center relative">
        <div className="md:absolute md:inset-0 bg-[url(/src/assets/background_doctor.webp)] bg-right bg-cover flex justify-center items-end">
          <img
            className=" mt-20 w-4/5 h-auto object-contain relative md:left-0"
            src='/src/assets/dokter_lisa.webp'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center gap-10 p-10'>
        <div className='flex flex-col gap-3'>
          <div className='text-5xl md:text-9xl text-left font-light'>
            Lisa Yunita
          </div>
          <div className='text-l md:text-xl text-left pl-3 font-light flex items-center gap-3'>
            <span className='w-10 border-t md:w-20 ' />
            Dokter Spesialis Akupunktur
          </div>
        </div>
        <div className='text-l text-left pl-3'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
      </div>
    </div>
  )
}
