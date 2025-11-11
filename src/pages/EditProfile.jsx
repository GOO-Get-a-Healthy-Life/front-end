import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function EditProfile() {
  const { user, setUser } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(user?.avatar || "");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // aqui futuramente podemos enviar ao backend
    setUser({ ...user, name, email, avatar });
    navigate("/profile");
  };

  return (
    <div className="p-10 font-inter bg-[#f9fafb] min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Editar Perfil</h2>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        {/* Foto do usuário */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <img
              src={avatar || "https://i.pravatar.cc/100"}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-[#1800ad]"
            />
            <label
              htmlFor="avatar"
              className="absolute bottom-0 right-0 bg-[#1800ad] text-white p-2 rounded-full cursor-pointer hover:bg-[#12008a] transition"
            >
              📷
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nome
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1800ad]"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1800ad]"
              placeholder="Seu e-mail"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nova Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1800ad]"
              placeholder="********"
            />
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#1800ad] text-white font-semibold hover:bg-[#0f008a] transition"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
