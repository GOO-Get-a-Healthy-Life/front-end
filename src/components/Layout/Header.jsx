import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-end items-center bg-white border-b border-gray-200 px-6 py-3">
      <nav className="flex items-center gap-4">
        <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-goo-blue">
          <User size={18} />
          <span>Perfil</span>
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("usuario");
            window.location.href = "/login";
          }}
          className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition"
        >
          <LogOut size={18} />
          <span>Sair</span>
        </button>
      </nav>
    </header>
  );
}
