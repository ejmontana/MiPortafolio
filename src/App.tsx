import React, { useState } from 'react';
import { translations } from './translations';
import { LanguageToggle } from './components/LanguageToggle';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Github, Linkedin, Mail, Code2, User, Cpu, Send } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <LanguageToggle currentLang={lang} onToggle={toggleLanguage} />
      <Hero content={t.hero} />

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
                alt="Developer workspace"
                className="rounded-lg shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="md:w-1/2">
              <motion.h2 
                className="text-3xl font-bold mb-6 flex items-center gap-2 text-cyan-400"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <User className="text-cyan-400" />
                {t.about.title}
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {t.about.p1}
              </motion.p>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {t.about.p2}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center text-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Cpu className="text-cyan-400" />
            {t.skills.title}
          </motion.h2>
          <Skills categories={t.skills.categories} />
        </div>
      </section>

      {/* Experience Section */}
      <Experience title={t.experience.title} jobs={t.experience.jobs} />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center text-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Code2 className="text-cyan-400" />
            {t.projects.title}
          </motion.h2>
          <Projects content={t.projects} />
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center text-cyan-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Send className="text-cyan-400" />
            {t.contact.title}
          </motion.h2>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col space-y-4">
              <motion.div 
                className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="text-cyan-400" />
                <div>
                  <h3 className="font-medium text-gray-100">{t.contact.email}</h3>
                  <p className="text-gray-300">contact@endersonmontana.dev</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Linkedin className="text-cyan-400" />
                <div>
                  <h3 className="font-medium text-gray-100">{t.contact.linkedin}</h3>
                  <p className="text-gray-300">linkedin.com/in/endersonmontana</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Github className="text-cyan-400" />
                <div>
                  <h3 className="font-medium text-gray-100">{t.contact.github}</h3>
                  <p className="text-gray-300">github.com/endersonmontana</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;