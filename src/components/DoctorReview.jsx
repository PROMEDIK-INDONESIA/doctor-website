import React from 'react'
import Marquee from "react-fast-marquee";

function DoctorReview() {
  const DataSet = [
    {
      comment: "bagi mereka yang memuji seolah-olah itu adalah kenikmatan yang besar bagi mereka sendiri, saat mereka membutuhkan rasa sakit, tetapi seolah-olah mereka menolak dan menuduh dengan bijak"
    },
    {
      comment: "dilahirkan tanpa tujuan, tidak ada rasa sakit, tidak ada kesenangan, tidak pernah dan semua dibutakan bahwa kesalahan apa pun kesenangan mudah untuk dilahirkantidak ada kesenangan kita yang menolak dan"
    },
    {
      comment: "u adalaketika kita memimpin dan benar-benar kesenangan kecuali untuk alasan yang lembut"
    },
    {
      comment: "bagi merekaereka membutuhkan rasa sakit, tetapi seolah-olah mereka menolak dan menuduh dengan bijak"
    },
    {
      comment: "kenikmatan yang besar bagi mereka sendiri, saat mereka membutuhkan rasa sakit, tetapi seolah-olah mereka menolak dan menuduh dengan bijak"
    },
    {
      comment: "seolah-olah mereka menolak dan menuduh dengan bijak kenikmatan yang besar bagi mereka sendiri, saat mereka membutuhkan rasa sakit, tetapi seolah-olah mereka menolak dan menuduh dengan bijak"
    },
  ]

  return (
    <Marquee
      className=" -top-15 z-10"
      speed={60}
      // gradient
      // gradientWidth={50}
      play={true}
      pauseOnHover
    >
      {Array(5).fill(1).map((x, i) => {
        return (
          <div
            key={i}
            className="select-none h-50 w-80 bg-white m-5 shadow-lg flex flex-col justify-center items-center my-10 rounded-2xl "
          >
            <div
              className="
                 shadow-lg p-5 w-15 h-15 rounded-4xl border-4
                 bg-amber-300 items-center justify-center 
                 flex border-white absolute
                 "
              style={{
                top: '10px'
              }}
            >
              <div className="text-2xl font-bold text-white ">
                V
              </div>
            </div>
            <div className="mt-5 flex flex-col items-center">
              <div className="text-lg font-bold text-black">
                Vika Winata
              </div>
              <div className="text-xs px-10 py-2 leading-5 line-clamp-3 line max-h-[70px] text-black">
                {DataSet[i + 1]?.comment}
              </div>
              <div className="text-sm">
                ⭐️⭐️⭐️⭐️⭐️
              </div>
              <div className="text-[10px] text-black">
                18 October, 2021
              </div>
            </div>
          </div>
        )
      })}

    </Marquee>
  )
}

export default DoctorReview