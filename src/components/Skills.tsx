import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  value: number;
}

interface SkillsProps {
  categories: {
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
  };
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const skillsList: SkillsProps = {
    categories: {
      frontend: [
        { name: "JavaScript", value: 90 },
        { name: "React.js", value: 90 },
        { name: "Next.js", value: 85 },
        { name: "Blazor", value: 70 },
        { name: "HTML", value: 100 },
        { name: "CSS", value: 85 },
        { name: "TypeScript", value: 85 },
        { name: "Bootstrap", value: 90 },
      ],
      backend: [
        { name: "Node.js", value: 90 },
        { name: "Express.js", value: 85},
        { name: ".NET", value: 75 },
        { name: "Python", value: 50 },
        { name: "C#", value: 75 },
        { name: "Solidity", value: 50 }
      ],
      tools: [
        { name: "AWS", value: 75 },
        { name: "Digital Ocean", value: 60},
        { name: "Git/Github", value: 75 },
        { name: "SQL Server", value: 85},
        { name: "MongoDB", value: 75 },
        { name: "Socket.IO", value: 65}
      ]
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {Object.entries(categories).map(([key, title]) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1
        });

        return (
          <motion.div
          key={key}
          ref={ref}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700"
          variants={item}
        >
          <h3 className="text-xl font-semibold mb-4 text-cyan-600 dark:text-cyan-400">{title}</h3>
          <div className="space-y-3">
            {skillsList.categories[key as keyof typeof skillsList.categories].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"
                initial={{ width: "0%" }}
                animate={inView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-cyan-500 dark:bg-cyan-400 text-white dark:text-gray-900 text-sm font-medium py-1 px-4 rounded-full"
                  style={{ width: `${skill.value}%` }}
                  initial={{ x: -100 }}
                  animate={inView ? { x: 0 } : { x: -100 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        );
      })}
    </motion.div>
  );
};