import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function page() {
  return (
    <div>
      <Header index={5} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default page;
