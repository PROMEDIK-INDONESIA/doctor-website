import { PromedikGreen } from "@/app/assets/colors";
import Image from "next/image";

const Artikel = () => {
  const dummy_image = [
    'https://health.osu.edu/-/media/health/images/stories/2022/02/acupuncture.jpeg?extension=webp&la=en&hash=E7E8809900F73E3F1AB20BB08693F828',
    'https://www.woninstitute.edu/wp-content/uploads/2018/11/Acupuncture-Chart-and-Meanings.jpg',
    'https://www.leylandphysio.co.uk/wp-content/uploads/elementor/thumbs/accupuncture-ogtnd7255wdbtx69vbmxsg7tc2r5n5cvcjzos2vrug.png',
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/07/Acupuncture.jpeg.jpg',
    'https://www.lispinemed.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/long-term-benefits-acupunture.jpg.webp',
    'https://www.launcestonacupuncture.com.au/img/containers/main/2022/images/pages/img_1838.JPG/c39e29e50a2da2b8eb56b033822dc983.JPG',
    'https://health.osu.edu/-/media/health/images/stories/2022/02/acupuncture.jpeg?extension=webp&la=en&hash=E7E8809900F73E3F1AB20BB08693F828',
    'https://www.woninstitute.edu/wp-content/uploads/2018/11/Acupuncture-Chart-and-Meanings.jpg',
    'https://www.leylandphysio.co.uk/wp-content/uploads/elementor/thumbs/accupuncture-ogtnd7255wdbtx69vbmxsg7tc2r5n5cvcjzos2vrug.png',
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/07/Acupuncture.jpeg.jpg',
    'https://www.lispinemed.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/long-term-benefits-acupunture.jpg.webp',
    'https://www.launcestonacupuncture.com.au/img/containers/main/2022/images/pages/img_1838.JPG/c39e29e50a2da2b8eb56b033822dc983.JPG'
  ]

  return (
    <div
      className="select-none my-20 px-30 max-md:px-15 bg-white flex flex-col justify-center items-center"
    >
      <div className="my-10 flex items-center">
        <div
          className="max-md:text-2xl md:text-3xl flex items-center"
          style={{ color: PromedikGreen }}
        >
          Artikel
        </div>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
        {dummy_image.map((image: string, i: number) => {
          return (
            <div key={i} className="flex flex-col gap-2">
              <Image
                className="w-100 aspect-3/2 object-cover"
                src={image}
                alt="dummy artikel thumbnail"
              />
              <div style={{ color: PromedikGreen }} className="flex items-start text-[10px] font-bold">
                AKUPUNKTUR
              </div>
              <div className="font-bold text-2xl text-start max-sm:text-lg leading-8 hover:text-orange-400 text">
                Mengatur Stress Saat Belum Berhasil Program Hamil
              </div>
              <div className='text-[10px] text-start'>
                15 January, 2025
              </div>
              <div className="max-sm:flex-col flex flex-row sm:flex-col text-start">
                <div className="text-xs line-clamp-4">
                  The number of acupuncture points was originally established to correlate with the number of days in the year – 365, but because acupuncturists in all parts of Asia came to identify points on the body differently, there was never an exact standard number.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[10px] font-bold">
                  SELENGKAPNYA
                </div>
                <div className="w-2 h-2 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Artikel