export default function Profile() {
  const user = {
    nome: "Gabriel Andrade",
    nivel: 7,
    pontos: 12202,
  };

const conquistas = [
  "Foco Total (7 dias seguidos)",
  "100 dias de conquista",
  "Em Ascensão",
  "Autocuidado em Alta",
  "Aprendiz Constante",
  "Apaixonado por Movimento",
];

  return (
    <div className="p-10 font-inter">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Meu Perfil
      </h2>

      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 flex gap-10">
        {/* Painel lateral do usuário */}
        <div className="w-1/3 border-r border-gray-200 pr-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
            <p className="font-semibold text-lg">{user.nome}</p>
            <p className="text-gray-600">Nível: {user.nivel}</p>
            <p className="mt-4 font-bold text-goo-blue text-xl">
              {user.pontos.toLocaleString()} pontos
            </p>
            <button className="mt-6 bg-goo-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Editar Perfil
            </button>
          </div>
        </div>

        {/* Conquistas */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Conquistas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {conquistas.map((c) => (
              <div
                key={c}
                className="bg-blue-50 border border-blue-200 text-blue-700 py-3 px-4 rounded-lg text-center font-medium"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
