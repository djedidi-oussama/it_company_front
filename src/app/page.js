"use client"
import LocationSection from "@/components/ LocationSection";
import ClientTestimonials from "@/components/ClientTestimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const {services} = useSelector((state) => state.services);
  const {blogs} = useSelector((state) => state.blogs);

  return (
    <div>
      <Header index ={0} />
      <Hero />
      <ServicesOverview services={services} />
      <LatestBlogPosts blogs={blogs}  />
      <WhyChooseUs />
      <ClientTestimonials />
      <LocationSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
