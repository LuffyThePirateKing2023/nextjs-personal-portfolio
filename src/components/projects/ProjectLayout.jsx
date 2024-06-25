import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, demoLink, sourceCode }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="text-sm md:text-base flex items-center justify-center w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-between space-x-2 w-full ">
        <div className="flex items-center justify-center w-4/5">
          <h2 className="text-foreground w-2/5">{name}</h2>
          <p className="w-3/5 text-muted hidden sm:inline-block">{description}</p>
        </div>
        <Link href={sourceCode} target="_blank" passHref>
          <p className="text-foreground">
            Source Code
          </p>
        </Link>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
