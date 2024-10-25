import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project }) => {
    return (
      <div className="bg-card-white shadow-md rounded-lg overflow-hidden hover:bg-card-hover hover:shadow-lg transition-shadow duration-300">
        <Image
          width={300}
          height={300} 
          src={project.mainImage} 
          alt={project.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-5 text-center">
          <h3 className="text-xl font-bold text-text-dark mb-3">{project.name}</h3>
          <p className="text-card-color mb-4 line-clamp-2 ">{project.description}</p>
          <div className="flex justify-center">
          <Link 
            href={`/projects/${project._id}`}
            className="inline-block bg-main-yellow text-text-dark font-bold px-4 py-2 rounded-full hover:bg-hover-yellow transition-colors"
          >
            View Project
          </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectItem;
  