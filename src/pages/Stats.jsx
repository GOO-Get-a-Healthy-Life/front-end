import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Stats() {
  // Dados mockados (substituíveis futuramente pelo backend)
  const progressoSemanal = [
    { dia: "SEG", Caminhar: 40, Meditar: 30, Ler: 50 },
    { dia: "TER", Caminhar: 60, Meditar: 35, Ler: 60 },
    { dia: "QUA", Caminhar: 90, Meditar: 45, Ler: 55 },
    { dia: "QUI", Caminhar: 70, Meditar: 60, Ler: 65 },
    { dia: "SEX", Caminhar: 80, Meditar: 70, Ler: 75 },
    { dia: "SÁB", Caminhar: 85, Meditar: 65, Ler: 80 },
    { dia: "DOM", Caminhar: 95, Meditar: 75, Ler: 85 },
  ];

  const habitosConsistentes = [
    { name: "Meditar", valor: 85 },
    { name: "Caminhar", valor: 70 },
    { name: "Ler", valor: 60 },
  ];

  const categorias = [
    { name: "Saúde", valor: 40 },
    { name: "Produtividade", valor: 35 },
    { name: "Bem-estar", valor: 25 },
  ];

  const cores = ["#8B5CF6", "#06B6D4", "#FACC15"];

  return (
    <div className="p-10 font-inter bg-[#f9fafb] min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10">Estatísticas</h2>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-2xl p-6 border-l-4 border-green-500 text-center">
          <p className="text-gray-500 font-medium">Taxa de Conclusão</p>
          <p className="text-4xl font-bold text-green-600 mt-2">68%</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 border-l-4 border-orange-400 text-center">
          <p className="text-gray-500 font-medium">Sequência Atual</p>
          <p className="text-4xl font-bold text-orange-500 mt-2">5 dias</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6 border-l-4 border-yellow-400 text-center">
          <p className="text-gray-500 font-medium">Melhor Sequência</p>
          <p className="text-4xl font-bold text-yellow-500 mt-2">12 dias</p>
        </div>
      </div>

      {/* Gráfico principal */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Progresso Semanal
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={progressoSemanal}>
            <XAxis dataKey="dia" stroke="#999" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Caminhar" stroke="#06B6D4" strokeWidth={3} />
            <Line type="monotone" dataKey="Meditar" stroke="#8B5CF6" strokeWidth={3} />
            <Line type="monotone" dataKey="Ler" stroke="#F59E0B" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráficos inferiores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gráfico de barras */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Hábitos Mais Consistentes
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={habitosConsistentes}>
              <XAxis dataKey="name" />
              <Bar dataKey="valor" radius={[10, 10, 0, 0]}>
                {habitosConsistentes.map((_, i) => (
                  <Cell key={i} fill={cores[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de pizza */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Distribuição por Categoria
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categorias}
                dataKey="valor"
                nameKey="name"
                outerRadius={80}
                label
              >
                {categorias.map((_, i) => (
                  <Cell key={i} fill={cores[i]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
