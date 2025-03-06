import Accordion from "@/components/Accordion";
import { PromedikGreen } from "@/app/assets/colors";

const FAQ = () => {

  const items = [
    { title: "Apa itu akupunktur?", content: "Akupunktur adalah teknik pengobatan tradisional Tiongkok yang menggunakan jarum tipis yang dimasukkan ke titik-titik tertentu di tubuh untuk merangsang energi atau aliran darah, membantu penyembuhan, dan meredakan nyeri." },
    { title: "Bagaimana cara kerja akupunktur?", content: "Akupunktur bekerja dengan merangsang titik-titik tertentu di tubuh yang berhubungan dengan jalur energi (meridian). Stimulasi ini dipercaya membantu menyeimbangkan energi tubuh, meningkatkan sirkulasi darah, dan merangsang pelepasan endorfin untuk mengurangi rasa sakit." },
    { title: "Apakah akupunktur aman?", content: "Ya, akupunktur aman jika dilakukan oleh praktisi terlatih dan bersertifikat. Jarum yang digunakan harus steril dan sekali pakai untuk mencegah infeksi." },
    { title: "Apakah akupunktur menyakitkan?", content: "Sebagian besar pasien hanya merasakan sensasi ringan seperti ditusuk atau kesemutan saat jarum dimasukkan. Beberapa titik mungkin lebih sensitif, tetapi secara umum, prosedur ini tidak menyakitkan." },
    { title: "Kondisi apa saja yang bisa diobati dengan akupunktur?", content: "Akupunktur sering digunakan untuk mengatasi nyeri kronis (seperti nyeri punggung, leher, dan migrain), gangguan pencernaan, insomnia, stres, kecemasan, infertilitas, alergi, dan berbagai kondisi lainnya." },
    { title: "Berapa lama sesi akupunktur berlangsung?", content: "Satu sesi akupunktur biasanya berlangsung antara 20 hingga 60 menit, tergantung pada kondisi yang ditangani dan metode yang digunakan oleh praktisi." },
    { title: "Berapa kali saya harus menjalani akupunktur untuk melihat hasilnya?", content: "Jumlah sesi yang diperlukan bervariasi tergantung pada kondisi individu. Beberapa orang merasakan perbaikan setelah satu sesi, sementara yang lain mungkin memerlukan beberapa minggu atau bulan dengan 1-2 sesi per minggu." },
    { title: "Apakah ada efek samping dari akupunktur?", content: "Efek samping akupunktur umumnya ringan, seperti memar kecil di area jarum ditusukkan, rasa mengantuk, atau sedikit pusing. Efek samping serius jarang terjadi jika dilakukan oleh profesional." },
    { title: "Bisakah akupunktur dikombinasikan dengan pengobatan medis lainnya?", content: "Ya, akupunktur dapat dikombinasikan dengan pengobatan konvensional untuk meningkatkan efektivitas penyembuhan. Namun, sebaiknya konsultasikan dengan dokter terlebih dahulu." },
    { title: "Siapa yang tidak boleh menjalani akupunktur?", content: "Akupunktur mungkin tidak disarankan untuk orang dengan gangguan pembekuan darah, wanita hamil (terutama di trimester pertama), atau orang dengan kondisi medis tertentu. Selalu konsultasikan dengan profesional sebelum menjalani terapi." }
  ];

  return (
    <div className="select-none my-20 md:px-30 lg:px-50 2xl:px-100 max-md:px-5 bg-white flex flex-col justify-center items-center">
      <div
        className="max-md:text-2xl md:text-3xl flex flex-col justify-center items-center"
        style={{ color: PromedikGreen }}
      >
        <div className="my-10 text-center">
          Frequently Asked Questions (FAQ)
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <Accordion items={items} />
      </div>
    </div>
  )
};

export default FAQ