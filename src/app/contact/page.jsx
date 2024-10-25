import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function page() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header index={5} />
        <ContactSection />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}

export default page;
