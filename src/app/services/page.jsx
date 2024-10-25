"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import { useSelector } from "react-redux";
function page() {
  const { services } = useSelector((state) => state.services);
  return (
    <>
      {" "}
      <div className="max-w-6xl mx-auto">
        <Header index={2} />
        <ServicesSection services={services} />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default page;
