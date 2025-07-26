import { motion } from 'framer-motion';
import { Project } from '../components/Project';

const projects = [
  {
    title: "Monitoramento de temperatura",
    description: "App para monitoramento remoto da temperatura em salas de servidores, com acesso de qualquer lugar.",
    tech: [
      { name: "TypeScript", color: "blue" },
      { name: "React", color: "cyan" },
      { name: "CSS", color: "purple" },
    ],
    link: "https://github.com/VictorBritto/systemTCC"
  },
  {
    title: "CloneApple",
    description: "Mini Projeto: Uma réplica do site da Apple.",
    tech: [
      { name: "Vue", color: "green" },
      { name: "CSS", color: "purple" },
      { name: "JavaScript", color: "yellow" },
      { name: "HTML", color: "red" },
      
    ],
    link: "https://github.com/VictorBritto/systemTCC"
  },
];

export const sections = [
    {
      title: "Expriência De Trabalho",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "Fundação Herminio Ometto",
              date: "2025 - Atualmente",
              title: "Suporte Informatica",
              description: ["Atualmente atuo com suporte de informática, auxiliando usuários e solucionando dúvidas relacionadas ao sistema da Fundação Hermínio Ometto."],
              dotColor: "bg-blue-500"
            }
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[20px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
              />
              <motion.div
                className="group py-1 transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Formação acadêmica",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "Fundação Herminio Ometto",
              date: "2023 - 2026",
              title: "Sistemas De Informação",
              description: ["Atualmente estou cursando sistemas de informação na instituição Fundação Herminio Ometto."],
              dotColor: "bg-green-900"
            }
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[20px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
              />
              <motion.div
                className="group py-1 transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Projetos",
      content: (
        <div className="space-y-4">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      )
    },
  ]