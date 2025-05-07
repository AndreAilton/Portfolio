import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar"; // Biblioteca para o calendário de contribuições

interface Repository {
  name: string;
  html_url: string;
  description: string;
  language: string;
}

const GitActive: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blockSize, setBlockSize] = useState<number>(15);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/AndreAilton/repos"
        );
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // Atualiza o tamanho dos blocos do calendário conforme a largura da tela
  useEffect(() => {
    const updateBlockSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setBlockSize(15); // desktop
      else if (width >= 768) setBlockSize(12); // tablet
      else setBlockSize(8); // mobile
    };

    updateBlockSize();
    window.addEventListener("resize", updateBlockSize);
    return () => window.removeEventListener("resize", updateBlockSize);
  }, []);

  // Paginação
  const totalPages = Math.ceil(repositories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRepositories = repositories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="github" className="section mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Minhas Contribuições no GitHub</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Aqui estão alguns dos meus repositórios públicos e contribuições no GitHub.
        </p>

        {/* Calendário de Contribuições Responsivo */}
        <div className="mb-8 overflow-hidden w-full">
          <GitHubCalendar
            username="AndreAilton"
            fontSize={16}
            blockSize={blockSize}
            blockMargin={4}
            colorScheme="dark"
            hideTotalCount={true}
            labels={{
              months: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
              ],
              weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
              totalCount: "{{count}} contribuições no total",
            }
            }
          />
        </div>

        {loading ? (
          <p className="text-zinc-400">Carregando repositórios...</p>
        ) : (
          <>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {currentRepositories.map((repo) => (
                <div
                  key={repo.name}
                  className="bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-white">{repo.name}</h3>
                  <p className="text-zinc-400 text-sm mt-2">
                    {repo.description || "Sem descrição"}
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    Linguagem: {repo.language || "Não especificada"}
                  </p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sky-400 hover:underline"
                  >
                    Ver Repositório
                  </a>
                </div>
              ))}
            </div>

            {/* Paginação */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="btn btn-outline"
              >
                Anterior
              </button>
              <span className="text-zinc-400">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="btn btn-outline"
              >
                Próxima
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitActive;
