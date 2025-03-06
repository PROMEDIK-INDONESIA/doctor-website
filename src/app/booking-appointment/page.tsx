'use client'

import React, { useEffect, useRef } from 'react'
import Script from "next/script";
import { PromedikGreen } from "@/app/assets/colors";

function BookingAppointment() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = `
      <link rel='stylesheet' href='https://api.promedik.com/embed/embed.css' id='promedik-button-styles' /><a href='https://my.promedik.com/embed/booking/22312313333123' target='_blank' class='promedik-embed-button'><div class='inner-content' style='padding-top:10px;padding-bottom:10px;height:auto'><img src='https://cdn.promedik.com/Indra.png' alt=''><p>Indra Gusti Mansur,</p><small>Andrologi</small></div></a><script src='https://api.promedik.com/embed/embed.js' async></script>
      `;
    }
  }, []);

  return (
    <div className="select-none my-20 md:px-30 lg:px-50 2xl:px-100 max-md:px-5 bg-white flex flex-col justify-center items-center">
      <div className='flex flex-col-reverse items-center'>
        <div ref={containerRef}></div>
        <Script src="https://api.promedik.com/embed/embed.js" strategy="lazyOnload" />
        <div
          className="max-md:text-2xl md:text-3xl flex flex-col justify-center items-center"
          style={{ color: PromedikGreen }}
        >
          <div className="my-10 text-center">
            Booking Doctor Appointment
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingAppointment