import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  title: string;
  jobs: Job[];
}

export const Experience: React.FC<ExperienceProps> = ({ title, jobs }) => {
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Briefcase className="text-cyan-500" />
          {title}
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {jobs.map((job, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={item}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.h3 
                  className="text-xl font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {job.role}
                </motion.h3>
                <motion.div 
                  className="text-cyan-600 mb-2"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {job.company}
                </motion.div>
                <motion.div 
                  className="text-gray-500 text-sm mb-4"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {job.period}
                </motion.div>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {job.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};