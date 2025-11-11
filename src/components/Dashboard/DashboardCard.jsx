export default function DashboardCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 flex items-center justify-between transition hover:shadow-md">
      <div>
        <h3 className="text-gray-600 font-medium">{title}</h3>
        <p className="text-3xl font-bold text-goo-blue mt-1">{value}</p>
      </div>
      {Icon && <Icon className="text-goo-violet" size={32} />}
    </div>
  );
}
