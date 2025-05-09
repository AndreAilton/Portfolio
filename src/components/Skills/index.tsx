import SkillCard from "../Skillcard";


const skillItem = [
  {
    imgSrc: '/images/logos/figma.svg',
    label: 'Figma',
    desc: 'Design da Interface do Usuário'
  },
  {
    imgSrc: '/images/logos/css3.svg',
    label: 'CSS',
    desc: 'Estilização '
  },
  {
    imgSrc: '/images/logos/javascript.svg',
    label: 'JavaScript',
    desc: 'Linguagem de Programação'
  },
  {
    imgSrc: '/images/logos/typescript.svg',
    label: 'TypeScript',
    desc: 'Linguagem de Programação'
  },
  {
    imgSrc: '/images/logos/nodejs.svg',
    label: 'NodeJS',
    desc: 'JavaScript Runtime'
  },
  {
    imgSrc: '/images/logos/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/logos/mongodb.svg',
    label: 'MongoDB',
    desc: 'Banco de Dados'
  },
  {
    imgSrc: '/images/logos/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/logos/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Interface do Usuario'
  },
  {
    imgSrc: '/images/logos/mysql.svg',
    label: 'MySQL',
    desc: 'Banco de Dados'
  },
  {
    imgSrc: '/images/logos/docker.svg',
    label: 'Docker',
    desc: 'Containerization'
  },
  {
    imgSrc: '/images/logos/git.svg',
    label: 'Git',
    desc: 'Versionamento de Código'
  },
  {
    imgSrc: '/images/logos/aws.svg',
    label: 'Aws',
    desc: 'Serviços de Nuvem'
  },
  {
    imgSrc: '/images/logos/google-cloud.svg',
    label: 'Google Cloud',
    desc: 'Serviços de Nuvem'
  },
  {
    imgSrc: '/images/logos/github.svg',
    label: 'GitHub',
    desc: 'Repositório de Código'
  },
  {
    imgSrc: '/images/logos/linux.svg',
    label: 'Linux',
    desc: 'Sistema Operacional'
  },
];
const Titulo = "Ferramentas e Tecnologias";
const Description = "Ferramentas e tecnologias que utilizo para desenvolver aplicações web, desde o design até a implementação e manutenção.";


const Skill = () => {
  return (
    <section id="skills" className="section ">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          {Titulo}
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          {Description}
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill