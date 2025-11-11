import { Link } from "react-router-dom";
import logo from "../images/o.svg";

export default function Cadastro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-goo-bg font-inter">
      <img
  src={logo}
  alt="goo logo"
  className="w-20 md:w-28 lg:w-32 mb-8 select-none"
/>

      <div className="bg-white shadow-md rounded-2xl p-8 w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Criar Conta
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goo-blue"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goo-blue"
          />
          <input
            type="password"
            placeholder="Senha"
            className="p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goo-blue"
          />
          <button
            type="submit"
            className="bg-goo-blue hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Criar Conta
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Já possui conta?{" "}
          <Link to="/login" className="text-goo-blue hover:underline">
            Fazer login
          </Link>
        </p>
      </div>
    </div>
  );
}
