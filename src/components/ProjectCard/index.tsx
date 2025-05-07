import React from "react";

interface ProjectCardProps {
  imgSrc: string;
  title: string; // Corrigi o nome da prop de "label" para "title" para maior clareza
  descricao?: string; // Opcional, pois pode não ser passado
  tags: string[]; // Corrigi o nome de "Tecnologia" para "tags" para consistência
  projectLink?: string; // Corrigi o nome de "ProjectLink" para "projectLink" para seguir convenções de camelCase
  classes?: string; // Opcional, pois pode não ser passado
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  title,
  descricao,
  tags,
  projectLink,
  classes = "", // Definindo um valor padrão vazio para classes
}) => {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-2 ${classes}`}
    >
      <img src={imgSrc} alt={title} className="rounded-3xl" />
      <div className="flex justify-between items-center mt-4">
        <div className="mt-2">
          <h2 className="text-2xl font-bold mt-4">{title}</h2>
          <p className="text-zinc-400 mb-2 mt-2 max-w-[40ch]">{descricao}</p>
        </div>
        <a
          href={projectLink}
          target="_blank"
          className="btn-primary text-white rounded-2xl p-2 hover:bg-green-600 transition-colors duration-300"
        >
          <span className="material-symbols-outlined">north_east</span>
        </a>
      </div>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="text-sm bg-zinc-700 text-white rounded-full px-5 py-1 mr-2 mt-2 inline-block"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ProjectCard;
