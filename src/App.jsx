import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

// Layout principal
import MainLayout from "./components/Layout/MainLayout";

// Páginas
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Rotas protegidas (com layout) */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="habits" element={<Habits />} />
            <Route path="stats" element={<Stats />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Rota padrão */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
