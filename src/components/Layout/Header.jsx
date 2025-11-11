import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

export default function Header() {
  const { user, setUser } = useApp();
  const navigate = useNavigate();

  // Função de logout
  const handleLogout = () => {
    setUser(null); // remove dados do usuário do contexto
    localStorage.removeItem("user"); // limpa armazenamento local
    navigate("/login"); // redireciona para tela de login
  };

  return (
    <header className="flex justify-end items-center px-10 py-4 bg-[#f5f6fa] border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-6">
        {/* Perfil */}
        <Link
          to="/profile"
          className="flex items-center gap-3 text-gray-700 hover:text-[#1800ad] transition"
        >
          <img
            src={user?.avatar || "https://i.pravatar.cc/40"}
            alt="Avatar do usuário"
            className="w-8 h-8 rounded-full object-cover border border-gray-300"
          />
          <span className="font-medium">Perfil</span>
        </Link>

        {/* Sair */}
        <button
          onClick={handleLogout}
          className="text-gray-600 hover:text-[#1800ad] font-medium transition"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
