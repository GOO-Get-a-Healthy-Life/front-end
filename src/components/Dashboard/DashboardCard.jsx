export default function DashboardCard({ title, value, gradient }) {
  return (
    <div
      className={`rounded-2xl text-white p-6 shadow-lg bg-gradient-to-r ${gradient} flex flex-col justify-center items-center`}
    >
      <h3 className="text-lg font-medium opacity-90 mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
