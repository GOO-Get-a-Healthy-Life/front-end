import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BarChart2, ListChecks, User } from "lucide-react";
import logo from "../../images/o.svg"; // 👈 caminho ajustado

export default function Sidebar() {
  const location = useLocation();
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Hábitos", icon: ListChecks, path: "/habits" },
    { name: "Estatísticas", icon: BarChart2, path: "/stats" },
    { name: "Perfil", icon: User, path: "/profile" },
  ];

  return (
    <aside className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col p-4">
      <Link to="/">
        <img
          src={logo}
          alt="goo logo"
           className="w-20 md:w-28 lg:w-32 mb-8 select-none"
        />
      </Link>

      <nav className="flex flex-col gap-2">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <Link
            key={name}
            to={path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              location.pathname === path
                ? "bg-violet-100 text-violet-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon size={18} />
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
