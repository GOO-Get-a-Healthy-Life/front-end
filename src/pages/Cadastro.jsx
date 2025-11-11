import { Link } from "react-router-dom";
import logo from "../images/o.svg";

export default function Cadastro() {
  // Definindo a cor principal para uso consistente (Azul Escuro: #1800ad)
  const GOO_COLOR = "#0c0150";

  return (
    // Fundo azul escuro forte
    <div className="flex items-center justify-center min-h-screen bg-[#0c0150] font-inter relative">
      
      {/* CARD PRINCIPAL: p-10 e shadow-xl para visual mais premium */}
      <div className="relative bg-white shadow-xl rounded-2xl p-10 w-80">
        
        {/* LOGO EMBUTIDA: mb-8 para mais espaçamento antes do título */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="goo logo"
            className="w-24 md:w-28 lg:w-32 select-none drop-shadow-md"
          />
        </div>

        {/* TÍTULO: Mais impacto (text-3xl font-bold) */}
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Criar Conta
        </h2>

        {/* FORMULÁRIO */}
        <form className="flex flex-col gap-4">
          {/* INPUTS: Rounded-xl e foco com border sutil */}
          <input
            type="text"
            placeholder="Nome"
            className={`p-3 rounded-xl bg-gray-100 border border-transparent focus:border-[${GOO_COLOR}] focus:outline-none`}
          />
          <input
            type="email"
            placeholder="Email"
            className={`p-3 rounded-xl bg-gray-100 border border-transparent focus:border-[${GOO_COLOR}] focus:outline-none`}
          />
          <input
            type="password"
            placeholder="Senha"
            className={`p-3 rounded-xl bg-gray-100 border border-transparent focus:border-[${GOO_COLOR}] focus:outline-none`}
          />
          
          {/* BOTÃO: Altura maior (py-3), rounded-xl e drop-shadow-md */}
          <button
            type="submit"
            className={`bg-[${GOO_COLOR}] hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition drop-shadow-md mt-2`}
          >
            Criar Conta
          </button>
        </form>

        {/* MENSAGEM MOTIVACIONAL (Rodapé 1) */}
        <p className="text-center text-sm text-gray-600 mt-6">
            O futuro da sua saúde começa aqui. Crie hábitos, veja resultados.
        </p>
        
        {/* LINK PARA LOGIN (Rodapé 2) */}
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