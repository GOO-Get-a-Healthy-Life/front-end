import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useApp } from "../context/AppContext";
import DashboardCard from "../components/Dashboard/DashboardCard";

export default function Home() {
  const { habits, user } = useApp();

  // -----------------------------------------------------------------
  // ⬇️ CORREÇÃO ADICIONADA AQUI ⬇️
  // -----------------------------------------------------------------
  // Verifica se 'user' ou 'habits' ainda são nulos (carregando).
  // Se forem, exibe uma mensagem de "Carregando" em vez de quebrar a página.
  if (!user || !habits) {
    return (
      <div className="flex items-center justify-center min-h-screen p-10">
        <h2 className="text-2xl font-semibold text-gray-700">
          Carregando seus dados...
        </h2>
      </div>
    );
  }
  // -----------------------------------------------------------------
  // ⬆️ FIM DA CORREÇÃO ⬆️
  // -----------------------------------------------------------------

  // Se o código chegou até aqui, 'user' e 'habits' existem.
  // O resto do código agora é seguro.

  // Dados do gráfico de progresso
  const data = [
    { dia: "3/10", progresso: 10 },
    { dia: "4/10", progresso: 18 },
    { dia: "5/10", progresso: 25 },
    { dia: "6/10", progresso: 20 },
    { dia: "7/10", progresso: 28 },
    { dia: "8/10", progresso: 30 },
    { dia: "9/10", progresso: 40 },
  ];

  // Hábitos de hoje (simulados)
  const dailyHabits = [
    {
      name: "Beber Água",
      progress: 80,
      color: "from-blue-500 to-blue-300",
    },
    {
      name: "Ler 10min",
      progress: 60,
      color: "from-purple-500 to-purple-300",
    },
    {
      name: "Meditar",
      progress: 90,
      color: "from-green-500 to-green-300",
    },
  ];

  return (
    <div className="p-10 font-inter bg-[#f5f6fa] min-h-screen">
      {/* Saudação (Agora é seguro) */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          Olá, {user.name} 👋
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Aqui está seu progresso de hoje:
        </p>
      </div>

      {/* Cards principais (Agora é seguro) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <DashboardCard
          title="Hábitos Ativos"
          value={habits.length}
          gradient="from-[#8B5CF6] to-[#EC4899]"
        />
        <DashboardCard
          title="Nível"
          value={user.level}
          gradient="from-[#3B82F6] to-[#06B6D4]"
        />
        <DashboardCard
          title="Pontos"
          value={user.points}
          gradient="from-[#22C55E] to-[#16A34A]"
        />
      </div>

      {/* Atividade Recente */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Atividade Recente
        </h3>

        <div className="w-full h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="dia"
                stroke="#9ca3af"
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#9ca3af"
                tickLine={false}
                axisLine={false}
                width={30}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                }}
              />
              <Line
                type="monotone"
                dataKey="progresso"
                stroke="#6b5cff"
                strokeWidth={3}
                dot={{ r: 4, fill: "#6b5cff" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Hábitos de Hoje */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Hábitos de Hoje
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dailyHabits.map((habit, i) => (
            <div
              key={i}
              className={`p-4 bg-gradient-to-r ${habit.color} text-white rounded-xl shadow flex items-center justify-between`}
            >
              <div>
                <p className="font-semibold text-base">{habit.name}</p>
                <div className="w-28 bg-white bg-opacity-30 h-2 rounded-full mt-2">
                  <div
                    className="h-2 bg-white rounded-full"
                    style={{ width: `${habit.progress}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                <span className="text-green-500 text-sm font-bold">✔</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}