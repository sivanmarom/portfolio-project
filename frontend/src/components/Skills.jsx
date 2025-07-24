import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiKubernetes, SiJenkins, SiPostgresql, SiTerraform } from 'react-icons/si';

export default function Skills() {
  const skillData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'HTML/CSS/JS' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
        { name: 'Django', icon: <SiDjango className="text-green-800" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> }
      ]
    },
    {
      category: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-400" /> },
        { name: 'Terraform', icon: <SiTerraform className="text-purple-600" /> },
        { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
        { name: 'Jenkins', icon: <SiJenkins className="text-red-500" /> }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
        { name: 'Linux' }
      ]
    }
  ];

  return (
    <motion.section
      id="skills"
      className="py-16 px-8 bg-gray-50 text-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-10">Skills & Technologies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {skillData.map(({ category, skills }) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-2 bg-white px-4 py-2 rounded shadow">
                  {icon}
                  <span className="font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}