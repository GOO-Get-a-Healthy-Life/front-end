import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/o.svg";
import bgImage from "../images/bg-fitness.jpeg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode validar o login futuramente (ex: backend ou localStorage)
    if (email && senha) {
      navigate("/"); // 👈 redireciona para o Dashboard
    } else {
      alert("Preencha o email e a senha para continuar!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen font-inter">
      {/* Lado da imagem */}
      <div
        className="hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Lado direito (formulário) */}
      <div className="flex flex-col items-center justify-center bg-gray-50">
        <img src={logo} alt="goo logo" className="w-24 mb-8 select-none" />

        <div className="bg-white shadow-md rounded-2xl p-8 w-80">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Entrar
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goo-blue"
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goo-blue"
            />
            <button
              type="submit"
              className="bg-goo-blue hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Entrar
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-goo-blue hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
