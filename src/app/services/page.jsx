"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServicesSection from '@/components/ServicesSection'
import { useSelector } from 'react-redux';
function page() {
  const { services } = useSelector((state) => state.services);
  return (
    <div>
        <Header index={2} />
        <ServicesSection  services={services}/>
        
    </div>
  )
}

export default page