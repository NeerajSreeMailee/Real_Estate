import Link from "next/link";

// Import project images
import ProjectImage1 from "../../assets/project1.avif";
import ProjectImage2 from "../../assets/project2.avif";
import ProjectImage3 from "../../assets/project3.avif";
import ProjectImage4 from "../../assets/project4.jpeg";
import ProjectImage5 from "../../assets/project5.jpeg";
import ProjectImage6 from "../../assets/project6.jpg";
import Image from "next/image";

// Sample projects data
const projects = [
  {
    id: 1,
    name: "Project 1",
    imageSrc: ProjectImage1.src,
    link: "/project", // Project page link
  },
  {
    id: 2,
    name: "Project 2",
    imageSrc: ProjectImage2.src,
    link: "/projects/2",
  },
  {
    id: 3,
    name: "Project 3",
    imageSrc: ProjectImage3.src,
    link: "/projects/3",
  },
  {
    id: 4,
    name: "Project 4",
    imageSrc: ProjectImage4.src,
    link: "/projects/4",
  },
  {
    id: 5,
    name: "Project 5",
    imageSrc: ProjectImage5.src,
    link: "/projects/5",
  },
  {
    id: 6,
    name: "Project 6",
    imageSrc: ProjectImage6.src,
    link: "/projects/6",
  },
  // More projects can be added as needed
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer">
      <Link href={project.link}>
        <a>
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image
              src={project.imageSrc}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      </Link>

      <div className="p-4 flex-grow">
        <Link href={project.link}>
          <a>
            <h3 className="text-lg font-semibold text-[#1a1a1a] hover:text-[#333] transition-colors duration-200">
              {project.name}
            </h3>
          </a>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-[#c5deff] min-h-screen w-screen flex flex-col items-center justify-center">
      {/* Updated Heading */}
      <h2 className="text-5xl font-extrabold text-[#1a1a1a] mb-12 pt-8 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-xl px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;