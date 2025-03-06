
export default function InstagramEmbed() {
  return (
    <div
      className="w-fit max-w-lg mx-5 p-5 my-5 rounded-2xl shadow-lg h-fit max-md:mt-5"
      // style={{ backgroundImage: "url('/src/assets/background_doctor.webp')" }}
    >
      <iframe
        className="w-full h-auto min-h-[400px] sm:min-h-[400px] md:min-h-[400px] rounded-2xl"
        src="https://www.instagram.com/lisayunita/embed/"
        // frameBorder="0"
        // scrolling="no"
        allowtransparency="true">
      </iframe>
    </div>
  );
}
