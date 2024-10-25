"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProjectsSection from '@/components/ProjectsSection'
import React from 'react'
import { useSelector } from 'react-redux';

function page() {
  const {projects} = useSelector((state) => state.projects);
  return (
    <>
    <div className="max-w-6xl mx-auto">
        <Header index={3} />
        <ProjectsSection projects={projects} />
 
    </div>
    <div className="w-full">
    <Footer />
  </div>
  </>
  )
}

export default page