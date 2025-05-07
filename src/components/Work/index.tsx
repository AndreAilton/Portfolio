import ProjectCard from "../ProjectCard";

interface WorkItemProps {
  imgSrc: string;
  title: string; // Alterado de "label" para "title" para consistência
  description: string; // Alterado de "descricao" para "description" para seguir o padrão em inglês
  tags: string[]; // Alterado de "Tecnologias" para "tags" para consistência
  projectLink: string; // Alterado de "ProjectLink" para "projectLink" para seguir camelCase
}

const WorkItems: WorkItemProps[] = [
  {
    imgSrc: "images/Banner/Pokedex.png",
    title: "Pokedex",
    description: "Bem vindo ao meu projeto Pokedex! Aqui você pode ver todos os pokemons e suas informações",
    tags: ["Javascript", "Css"],
    projectLink: "https://andreailton.github.io/Pokedex-Responsiva/",
  },
  {
    imgSrc: "images/Banner/Cardapio.png",
    title: "Cardapio",
    description: "Projeto de Cardapio responsivo com Tailwind",
    tags: ["React", "Node.js", "TailwindCss"],
    projectLink: "https://andreailton.github.io/Cardapio-Tailwind-Responsivo/",
  },
  {
    imgSrc: "images/Banner/Todolist.png",
    title: "Todo-List",
    description: "Projeto de lista de tarefas responsivo com Backend em Node.js e autenticação com JWT",
    tags: ["React", "Node.js", "Mariadb", "AWS", "Express"],
    projectLink: "https://andreailtondev.tech/agenda/",
  },
];


function index() {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="text-3xl font-bold">Projetos</h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Aqui estão alguns dos projetos que desenvolvi, utilizando as
            tecnologias mencionadas acima.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {WorkItems.map((item, index) => (
                    <ProjectCard
                        key={index}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        descricao={item.description}
                        tags={item.tags}
                        projectLink={item.projectLink}
                    />
                ))}
        </div>
        </div>

    </section>
  )
}

export default index