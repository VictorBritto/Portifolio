import { motion } from 'framer-motion';
import { Project } from '../components/Project';
import projeto1 from '../assets/images/projeto1.png';
import projeto2 from '../assets/images/projeto2.png';

const projects = [
  {
    title: "Monitoramento de temperatura",
    description: "App para monitoramento remoto da temperatura em salas de servidores, com acesso de qualquer lugar.",
    tech: [
      { name: "TypeScript", color: "blue" },
      { name: "JavaScript", color: "orange" },
      { name: "CSS", color: "purple" },
    ],
    link: "https://github.com/VictorBritto/systemTCC",
    image: projeto1
  },
  {
    title: "Clone Site Apple",
    description: "Mini Projeto: Uma réplica do site da Apple.",
    tech: [
      { name: "Vue", color: "green" },
      { name: "CSS", color: "purple" },
      { name: "JavaScript", color: "orange" },
      { name: "HTML", color: "red" },

    ],
    link: "https://github.com/VictorBritto/CloneApple",
    image: projeto2
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
            date: "2022 - Atualmente",
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