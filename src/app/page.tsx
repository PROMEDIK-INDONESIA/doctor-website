import Banner from "@/components/Banner";
import DoctorReview from "@/components/DoctorReview";
import DoctorBody from "@/components/DoctorBody"

export default function Home() {
  return (
    <>
      <Banner />
      <div className="relative bg-white">
        <DoctorReview />
      </div>
      <DoctorBody />
    </>
  );
}