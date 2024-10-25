import React from 'react'
import Carousel from './Carousel'; // Carousel component for project images
import OtherProjects from './OtherProjects'; // Other projects section
function ProjectDetails({ project, otherProjects }) {
  return (
    <div className="bg-bg-light text-text-dark">
      {/* Project Header */}
      <header className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center">{project.name}</h1>
        <p className="text-center text-lg mt-4">{project.description}</p>
      </header>

      {/* Carousel for Images */}
      <section className="container mx-auto mb-12">
        <Carousel images={project.images} />
      </section>

      {/* Project Content */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-semibold mb-4">About this Project</h2>
        <p>{project.content}</p>
      </section>

      {/* Other Projects */}
      <OtherProjects otherProjects={otherProjects} />

     
    </div>
  )
}

export default ProjectDetails