import React from 'react'
import ArtikelThumbnail from '@/app/assets/background_doctor.webp'
import Image from 'next/image'

function DoctorArticles() {
  return (
    <div className='w-full h-full sm:min-h-[400px] md:min-h-[500px]flex items-center md:overflow-scroll max-sm:grid max-sm:grid-cols-2 max-sm:my-5 bg-white z-10'>
      {Array(3).fill(1).map((a, i) => {
        return (
          <div key={i} className='p-5 md:flex md:flex-row'>
            <div>
              <Image
                className="w-100 h-full md:w-50"
                src={ArtikelThumbnail}
                alt="Dokter Lisa"
              />
            </div>
            <div className='flex flex-col items-start justify-center md:pl-5'>
              <div className='font-bold text-2xl sm:text-base text-start max-sm:text-lg leading-6'>
                Mengatur Stress Saat Belum Berhasil Program Hamil
              </div>
              <div className='max-sm:flex-col flex flex-row sm:flex-col text-start'>
                <div className='text-xs'>
                  15 January, 2025
                </div>
                <div className='text-xs'>
                  Posted in Sperma, Umum
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DoctorArticles