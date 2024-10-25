import ProjectItemCard from "./ProjectItem"; // Reuse the ProjectItemCard component

const OtherProjects = ({ otherProjects }) => {
  return (
    <section className="bg-bg-light py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Other Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectItemCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
