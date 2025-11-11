import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/o.svg";
import bgImage from "../images/bg-fitness.jpg"; // Garanta que este caminho está correto (jpeg ou jpg)

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
      {/* 1. Lado da imagem com OVERLAY (Melhoria de Fundo) */}
      <div className="hidden md:block relative">
        <div 
          className="h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        {/* Overlay azul escuro semi-transparente para melhor contraste */}
        <div className="absolute inset-0 bg-[#0c0150] opacity-50"></div>
      </div>

      {/* Lado direito (formulário) */}
      <div className="flex flex-col items-center justify-center bg-[#0c0150]">
        
        {/* 2. CARD DO FORMULÁRIO: p-10 e shadow-xl para profundidade */}
        <div className="bg-white shadow-xl rounded-2xl p-10 w-80">
          
          {/* LOGO EMBUTIDA */}
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="goo logo" 
              className="w-24 md:w-28 lg:w-32 select-none drop-shadow-md"
            />
          </div>

          {/* 3. TÍTULO: Mais impacto (text-3xl font-bold) e mais espaçamento (mb-8) */}
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Entrar
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* 4. INPUTS: Rounded-xl e foco com border sutil */}
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="p-3 rounded-xl bg-gray-100 border border-transparent focus:border-[#0c0150] focus:outline-none"
            />
            {/* 4. BOTÃO: Altura maior (py-3), rounded-xl e drop-shadow-md */}
            <button
              type="submit"
              className="bg-[#0c0150] hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition drop-shadow-md mt-2"
            >
              Entrar
            </button>
          </form>

          {/* 5. MENSAGEM MOTIVACIONAL */}
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