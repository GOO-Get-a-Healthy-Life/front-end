import { useApp } from "../context/AppContext";
import DashboardCard from "../components/Dashboard/DashboardCard";

export default function Home() {
  const { habits, user } = useApp();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Olá, {user.name} 👋</h2>
      <p className="text-gray-600 mb-6">Aqui está seu progresso de hoje:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Hábitos Ativos" value={habits.length} />
        <DashboardCard title="Nível" value={user.level} />
        <DashboardCard title="Pontos" value={user.points} />
      </div>
    </div>
  );
}
