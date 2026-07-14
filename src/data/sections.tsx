import { motion } from 'framer-motion';
import { Project } from '../components/Project';
import projeto1 from '../assets/images/projeto1.png';
import projeto2 from '../assets/images/projeto2.png';
import projeto3 from '../assets/images/projeto3.png'

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
  {
  title: "Sistema De Agendamento",
  description: "Agendify • Sistema inteligente de agendamentos e reservas online. Automatize seus agendamentos com facilidade!",
  tech: [],
  link: "https://github.com/VictorBritto/LandingPageAgendamento",
  previewLink: "https://landing-page-agendamento.vercel.app",
  image: projeto3
}

];


export const sections = [
  {
    title: "Experiência",
    content: (
      <div className="space-y-6 mb-8">
        {[
          {
            company: "Fundação Herminio Ometto",
            date: "2022 - Atualmente",
            title: "Suporte Informática",
            description: ["Atualmente atuo com suporte de informática, auxiliando usuários e solucionando dúvidas relacionadas ao sistema da Fundação Hermínio Ometto."],
          }
        ].map((item) => (
          <motion.div
            key={item.company + item.date}
            className="relative group p-5 rounded-xl liquid-glass hover:bg-white/[0.06] transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <p className="font-semibold text-white">{item.company}</p>
              <p className="text-xs text-gray-500 font-mono mt-1 sm:mt-0">{item.date}</p>
            </div>
            <p className="text-sm text-cyan-400 font-medium mb-2">{item.title}</p>
            <ul className="text-sm text-gray-400 space-y-1">
              {item.description.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-violet-400 mt-1">›</span>
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    title: "Formação",
    content: (
      <div className="space-y-6 mb-8">
        {[
          {
            company: "Fundação Herminio Ometto",
            date: "2023 - 2026",
            title: "Sistemas De Informação",
            description: ["Atualmente estou cursando sistemas de informação na instituição Fundação Herminio Ometto."],
          }
        ].map((item) => (
          <motion.div
            key={item.company + item.date}
            className="relative group p-5 rounded-xl liquid-glass hover:bg-white/[0.06] transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <p className="font-semibold text-white">{item.company}</p>
              <p className="text-xs text-gray-500 font-mono mt-1 sm:mt-0">{item.date}</p>
            </div>
            <p className="text-sm text-cyan-400 font-medium mb-2">{item.title}</p>
            <ul className="text-sm text-gray-400 space-y-1">
              {item.description.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-violet-400 mt-1">›</span>
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    title: "Projetos",
    content: (
      <div className="space-y-6">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    )
  },
]
