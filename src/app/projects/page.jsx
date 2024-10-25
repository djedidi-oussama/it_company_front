"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProjectsSection from '@/components/ProjectsSection'
import React from 'react'
import { useSelector } from 'react-redux';

function page() {
  const {projects} = useSelector((state) => state.projects);
  return (
    <div>
        <Header index={3} />
        <ProjectsSection projects={projects} />
        <Footer />
    </div>
  )
}

export default page