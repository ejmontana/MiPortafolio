import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillsProps {
  categories: {
    frontend: string;
    backend: string;
    tools: string;
  };
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const skillsList = {
    frontend: ["React", "Next.js", "Blazor", "HTML", "CSS", "TypeScript", "Bootstrap"],
    backend: ["Node.js", "Express.js", ".NET", "Python", "C#", "Solidity"],
    tools: ["AWS", "Digital Ocean", "Git/Github", "SQL Server", "MongoDB", "Socket.IO"]
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
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            variants={item}
          >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="space-y-3">
              {skillsList[key as keyof typeof skillsList].map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 rounded-full overflow-hidden"
                  initial={{ width: "0%" }}
                  animate={inView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="bg-cyan-500 text-white text-sm font-medium py-1 px-4 rounded-full"
                    style={{ width: `${85 + Math.random() * 15}%` }}
                    initial={{ x: -100 }}
                    animate={inView ? { x: 0 } : { x: -100 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {skill}
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