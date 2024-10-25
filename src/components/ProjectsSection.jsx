import ProjectItemCard from './ProjectItem'; // The card component

const ProjectsSection = ({ projects }) => {
  return (
    <section className="bg-bg-light py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-text-dark">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectItemCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
