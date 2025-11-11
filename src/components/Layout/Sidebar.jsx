import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BarChart2, ListChecks, User } from "lucide-react";
import logo from "../../images/o2.svg"; // usa sua logo

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Hábitos", icon: ListChecks, path: "/habits" },
    { name: "Estatísticas", icon: BarChart2, path: "/stats" },
    { name: "Perfil", icon: User, path: "/profile" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#0c0150] text-white flex flex-col justify-between shadow-lg">
  {/* Logo centralizada */}
  <div className="p-8 flex flex-col items-center justify-center">
    <img
      src={logo}
      alt="goo logo"
      className="w-32 mb-10 select-none drop-shadow-lg"
    />


        {/* Menu */}
        <nav className="flex flex-col gap-2 w-full">
          {menuItems.map(({ name, icon: Icon, path }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 ${
                  active
                    ? "bg-[#6b5cff] text-white font-semibold shadow-md"
                    : "text-gray-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span>{name}</span>
                {active && (
                  <span className="ml-auto w-2 h-2 bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer opcional */}
      <div className="p-4 text-xs text-gray-300 text-center opacity-80">
        © 2025 goo!
      </div>
    </aside>
  );
}
