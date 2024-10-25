import React from 'react';
import { ExternalLink, Github, Smartphone, TabletSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  viewProject: string;
  technologies: string[];
  github?: string;
  appStore?: string;
  playStore?: string;
}

interface ProjectsProps {
  content: {
    professional: {
      title: string;
      items: Project[];
    };
    hobby: {
      title: string;
      items: Project[];
    };
  };
}

const ProjectCard: React.FC<{ project: Project; imageUrl: string; index: number }> = ({ project, imageUrl, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-700"
    >
      <div className="relative group">
        <img 
          src={imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400"
            >
              <Github size={20} />
              <span className="text-sm">Source</span>
            </a>
          )}
          {project.appStore && (
            <a 
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400"
            >
              <Smartphone size={20} />
              <span className="text-sm">iOS</span>
            </a>
          )}
          {project.playStore && (
            <a 
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400"
            >
              <TabletSmartphone size={20} />
              <span className="text-sm">Android</span>
            </a>
          )}
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 ml-auto"
          >
            {project.viewProject} <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ content }) => {
  const professionalImages = [
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  ];

  const hobbyImages = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80"
  ];

  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-cyan-400">{content.professional.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.professional.items.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              imageUrl={professionalImages[index]}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-cyan-400">{content.hobby.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.hobby.items.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              imageUrl={hobbyImages[index]}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};