// import React, { useState } from 'react'
// import DokterLisa from '../assets/dokter_lisa.webp'
// import { PromedikBlack, PromedikDarkGrey, PromedikGreen, PromedikGrey, PromedikLightGreen, PromedikLightGreenBG, PromedikOrange, PromedikWhite } from '../assets/colors'

// function DoctorBookingAppointment() {
//   const [isTelekonsul, setIsTelekonsul] = useState(false)

//   return (
//     <div
//       className="select-none my-20 px-30 max-md:px-15 bg-white flex justify-center"
//     >
//       <div className='flex-1 flex flex-col items-center gap-5'>
//         <div className=''>
//           <div className='font-medium' style={{ color: PromedikGreen }}>
//             Dokter Saya
//           </div>
//           <div className='flex items-center justify-center my-5'>
//             <div className='w-20 h-20 overflow-hidden rounded-full'>
//               <img
//                 className='object-cover object-top'
//                 src={DokterLisa}
//               />
//             </div>
//           </div>
//           <div className='flex flex-col gap-0.5'>
//             <div className='text-[14px] font-bold'>
//               Dokter Lisa
//             </div>
//             <div className='text-[10px] font-normal' style={{ color: PromedikDarkGrey }}>
//               dr. Lisa Yunita, Sp.Ak
//             </div>
//           </div>
//           <div className='px-3 py-1 bg-[#FEF7E1] rounded-2xl mt-3'>
//             <div className='text-[10px] font-medium' style={{ color: PromedikOrange }}>
//               Spesialis Akupunktur
//             </div>
//           </div>
//         </div>
//         <div className='border-b-2 border-gray-200 w-full' />
//         <div className=''>
//           <div>
//             30 menit
//           </div>
//           <div>
//             RS Evasari
//           </div>
//           <div>
//             22 Feb 2022
//           </div>
//           <div>
//             Rp. 250.000
//           </div>
//         </div>
//       </div>
//       <div className='flex-5'>
//         <div className='flex flex-col items-center'>
//           <div className='font-semibold'>
//             Pilih Lokasi
//           </div>
//           <div
//             className='py-3 px-5 border-2 border-gray-200 w-fit rounded-md text-[12px]'
//             style={{
//               color: isTelekonsul ? PromedikGreen : PromedikBlack,
//               backgroundColor: isTelekonsul ? PromedikLightGreenBG : PromedikWhite,
//               borderColor: isTelekonsul ? PromedikGreen : PromedikGrey,
//             }}
//             onClick={() => setIsTelekonsul(!isTelekonsul)}
//           >
//             Telekonsul
//           </div>
//           <div className='text-[10px]'>
//             ----- Telekonsul -----
//           </div>
//         </div>
//         <div className='border-b-2 border-gray-200 w-full' />
//         <div>
//           <div className=''>
//             Pilih Hari
//           </div>
//           <div className=''>
//             Pilih Hari
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DoctorBookingAppointment