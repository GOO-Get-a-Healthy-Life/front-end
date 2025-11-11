import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext"; // 🔹 importa o contexto global

export default function Profile() {
  const { user } = useApp(); // 🔹 pega os dados globais do usuário
  const navigate = useNavigate();

  const conquistas = [
    { nome: "Foco Total", descricao: "7 dias seguidos", cor: "#4ade80" },
    { nome: "100 Dias", descricao: "de conquista", cor: "#facc15" },
    { nome: "Em Ascensão", descricao: "Progresso constante", cor: "#fb923c" },
    { nome: "Autocuidado", descricao: "em Alta", cor: "#a78bfa" },
    { nome: "Aprendiz", descricao: "Constante", cor: "#60a5fa" },
    { nome: "Apaixonado", descricao: "por Movimento", cor: "#f472b6" },
  ];

  return (
    <div className="p-10 font-inter bg-[#f5f5fa] min-h-screen">
      {/* Card principal */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 flex items-center justify-between mb-10">
        {/* Avatar + Nome */}
        <div className="flex items-center gap-6">
          <div className="relative">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#1800ad]"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#1800ad] to-[#4b1bff] flex items-center justify-center text-3xl font-bold text-white">
                {user?.name ? user.name[0] : "?"}
              </div>
            )}
            <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow">
              <div className="w-4 h-4 bg-[#1800ad] rounded-full" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {user?.name || "Usuário"}
            </h2>
            <p className="text-gray-500 text-sm">
              Membro desde {user?.membroDesde || "Janeiro 2024"}
            </p>
          </div>
        </div>

        {/* Nível e Pontos */}
        <div className="text-right">
          <p className="text-gray-800 font-semibold">
            Nível {user?.level || 1}
          </p>
          <div className="w-40 bg-gray-200 h-2 rounded-full mt-1 mb-2">
            <div
              className="h-2 bg-[#1800ad] rounded-full"
              style={{ width: `${(user?.progress || 60)}%` }}
            />
          </div>
          <p className="text-gray-600 text-sm">
            {(user?.points || 0).toLocaleString()} pontos
          </p>

          <button
            onClick={() => navigate("/edit-profile")}
            className="mt-6 bg-[#1800ad] text-white px-4 py-2 rounded-lg hover:bg-[#0f008a] transition"
          >
            Editar Perfil
          </button>
        </div>
      </div>

      {/* Conquistas */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Conquistas</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {conquistas.map((c, i) => (
            <div
              key={i}
              className="rounded-xl text-white p-4 font-medium shadow"
              style={{ backgroundColor: c.cor }}
            >
              <p className="text-base">{c.nome}</p>
              <p className="text-sm opacity-90">{c.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
