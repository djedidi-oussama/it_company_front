import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function page() {
  return (
    <div>
        <Header index={1} />
        <AboutSection />
        <Footer />
    </div>
  )
}

export default page