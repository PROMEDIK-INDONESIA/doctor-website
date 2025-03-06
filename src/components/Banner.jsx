import Image from "next/image";
import BannerBackground from "@/app/assets/background_doctor.webp";
import DokterLisa from "@/app/assets/dokter_lisa.webp";

export default function Banner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] -mt-16">
      {/* Background (Small screens) */}
      <div
        className="flex justify-end absolute inset-0 bg-cover bg-center md:hidden overflow-hidden"
        style={{ backgroundImage: `url(${BannerBackground.src})` }} // ✅ Background as div style
      >
        <Image
          className="mt-20 h-auto object-contain relative md:left-0 max-md:left-25"
          src={DokterLisa}
          alt="Dokter Lisa"
        />
        <div className="absolute inset-0 bg-white/60"></div> {/* White Overlay */}
      </div>

      {/* Layout Wrapper */}
      <div className="w-full h-full flex-col md:flex-row items-center grid grid-cols-2 overflow-hidden mt-15">
        {/* Left Section - Doctor Image (Medium & Up) */}
        <div
          className="hidden md:flex md:justify-center w-full flex-1 h-full bg-auto bg-center aspect-square"
          style={{
            backgroundImage: `url(${BannerBackground.src})`, // ✅ Background image inside div
            height: "500px",
          }}
        >
          <Image
            className="mt-20 h-auto object-contain relative md:left-0"
            src={DokterLisa}
            alt="Dokter Lisa"
          />
        </div>

        {/* Right Section - Text */}
        <div className="select-none relative max-md:w-1/2 text-center md:text-left z-10 flex flex-col gap-3 pl-10 min-w-min w-auto md:pr-[70px]">
          <div className="flex flex-col gap-1">
            <div
              className="text-5xl md:text-8xl lg:text-8xl text-left font-light text-black-100"
              style={{
                fontWeight: 50,
              }}
            >
              Lisa Yunita
            </div>
            <div className="text-[8px] md:text-base text-left md:pl-3 font-normal md:font-light flex items-center gap-2 text-black">
              <span className="w-4 border-t-[0.5px] md:w-10 border-black" />
              Dokter Spesialis Akupunktur
            </div>
          </div>
          <div className="text-xs md:text-l text-left md:pl-3 text-black">
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.
          </div>
          <div className="flex flex-row gap-2 max-md:px-3 md:ml-3 items-center px-5 py-2 bg-amber-400 w-fit rounded-sm">
            <div className="w-3 h-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
              </svg>
            </div>
            <div>
              <span className="text-xs md:text-sm">Jadwal Praktek</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
