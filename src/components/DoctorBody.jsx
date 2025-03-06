import React from 'react'
import InstagramEmbed from './DoctorInstagramEmbed'
import DoctorArticles from './DoctorArticles'

function DoctorBody() {
  return (
    <div className='-mt-20 bg-white select-none'>
      <div className='grid grid-cols-2 lg:grid-cols-2 md:pb-10 overflow-hidden max-sm:flex max-sm:flex-col justify-center items-center'>
        <div className='flex justify-center bg-white z-10'>
          <InstagramEmbed />
        </div>
        <div className='md:my-10 bg-white z-10'>
          <DoctorArticles />
        </div>
      </div>
    </div>
  )
}

export default DoctorBody