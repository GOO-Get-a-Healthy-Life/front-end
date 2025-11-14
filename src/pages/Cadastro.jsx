import { Link, useNavigate } from "react-router-dom";
import logo from "../images/o.svg"; // (Este caminho deve estar correto na sua estrutura)
import { useState } from "react";
import { useApp } from "../context/AppContext.jsx"; // 1. Adicionada a extensão .js

export default function Cadastro() {
  const GOO_COLOR = "#0c0150";
  const navigate = useNavigate();
  const { register } = useApp(); // 2. Pega a função 'register' do contexto

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (!name || !email || !password) {
      setError("Por favor, preencha todos os campos.");
      setIsLoading(false);
      return;
    }

    try {
      // 3. CHAMA A FUNÇÃO DO CONTEXTO
      const response = await register(name, email, password);

      setSuccess(response.message);
      setIsLoading(false);

      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (apiError) {
      setError(apiError);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0c0150] font-inter relative">
      <div className="relative bg-white shadow-xl rounded-2xl p-10 w-80">
        
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="goo logo"
            className="w-24 md:w-28 lg:w-32 select-none drop-shadow-md"
          />
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Criar Conta
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            className={`p-3 rounded-xl bg-gray-100 border border-transparent focus:border-[${GOO_COLOR}] focus:outline-none`}
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input
            type="email"
            placeholder="Email"
            className={`p-3 rounded-xl bg-gray-100 border border-transparent focus:border-[${GOO_COLOR}] focus:outline-none`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className={`p-3 rounded-xl bg-gray-100 border border-transparent focus:border-[${GOO_COLOR}] focus:outline-none`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button
            type="submit"
            className={`bg-[${GOO_COLOR}] hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition drop-shadow-md mt-2 disabled:bg-gray-400`}
            disabled={isLoading}
          >
            {isLoading ? "Criando..." : "Criar Conta"}
          </button>

          {error && <p className="text-sm text-center text-red-600 mt-2">{error}</p>}
          {success && <p className="text-sm text-center text-green-600 mt-2">{success}</p>}

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          O futuro da sua saúde começa aqui. Crie hábitos, veja resultados.
        </p>
        
        <p className="text-sm text-center text-gray-500 mt-2">
          Já possui conta?{" "}
          <Link to="/login" className={`text-[${GOO_COLOR}] hover:underline font-semibold`}>
            Fazer login
          </Link>
        </p>
      </div>
    </div>
  );
}