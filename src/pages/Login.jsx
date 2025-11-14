import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/o.svg";
import bgImage from "../images/bg-fitness.jpg";
import { useApp } from "../context/AppContext.jsx"; // 1. Adicionada a extensão .js

export default function Login() {
  const navigate = useNavigate();
  const { login } = useApp(); // 2. Pega a função 'login' do contexto
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!email || !password) {
      setError("Preencha o email e a senha para continuar!");
      setIsLoading(false);
      return;
    }

    try {
      // 3. CHAMA A FUNÇÃO DO CONTEXTO
      await login(email, password);
      
      setIsLoading(false);
      
      // 4. Redireciona para o Dashboard (Home)
      navigate("/"); 

    } catch (apiError) {
      setError(apiError);
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen font-inter">
      <div className="hidden md:block relative">
        <div 
          className="h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="absolute inset-0 bg-[#0c0150] opacity-50"></div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#0c0150]">
        
        <div className="bg-white shadow-xl rounded-2xl p-10 w-80">
          
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="goo logo" 
              className="w-24 md:w-28 lg:w-32 select-none drop-shadow-md"
            />
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Entrar
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-xl bg-gray-100 border border-transparent focus:border-[#1800ad] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-xl bg-gray-100 border border-transparent focus:border-[#0c0150] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#0c0150] hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition drop-shadow-md mt-2 disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </button>

            {error && <p className="text-sm text-center text-red-600 mt-2">{error}</p>}
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Sua melhor versão começa agora. Cadastre-se e construa hábitos que duram!
          </p> 
          
          <p className="text-center text-sm text-gray-500 mt-2">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="text-[#0c0150] hover:underline font-semibold">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}