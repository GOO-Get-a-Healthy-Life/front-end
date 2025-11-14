import { createContext, useContext, useState, useEffect } from "react";
import api from '../services/api.js'; // 1. Adicionada a extensão .js

const AppContext = createContext();

export function AppProvider({ children }) {
  // 2. Inicia o estado 'user' lendo do localStorage (ou null se não houver)
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  const [habits, setHabits] = useState([]);
  
  // 3. Estado para sabermos se o app já checou o localStorage
  const [isInitialized, setIsInitialized] = useState(false);

  // 4. Efeito que roda UMA VEZ quando o app carrega
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('authToken');

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
    setIsInitialized(true); // Marca que a verificação inicial foi feita
  }, []);

  // 5. Efeito que busca os HÁBITOS assim que o usuário é definido
  useEffect(() => {
    if (user) {
      const fetchHabits = async () => {
        try {
          const response = await api.get('/habits');
          setHabits(response.data.habits || []);
        } catch (error) {
          console.error("Erro ao buscar hábitos:", error);
          if (error.response?.status === 401) {
            logout();
          }
        }
      };
      fetchHabits();
    }
  }, [user]); // Roda toda vez que 'user' mudar

  // --- FUNÇÕES DE AUTENTICAÇÃO ---

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;

      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      setUser(user);
      return user;
    } catch (error) {
      throw error.response?.data?.message || "Erro ao fazer login.";
    }
  };

  const register = async (name, email, password) => {
    try {
      const response = await api.post('/auth/register', { name, email, password });
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Erro ao registrar.";
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    setHabits([]);
  };

  // --- FUNÇÕES DE HÁBITOS (AGORA CONECTADAS!) ---

  const addHabit = async (newHabitData) => {
    try {
      const habitToPost = {
        title: newHabitData.name,
        description: newHabitData.meta,
        frequency: newHabitData.frequency,
        icon: newHabitData.icon,
        category: newHabitData.category
      };
      const response = await api.post('/habits', habitToPost);
      setHabits(prev => [...prev, response.data.habit]);
    } catch (error) {
      console.error("Erro ao adicionar hábito:", error);
      throw error;
    }
  };

  const updateHabit = async (id, updates) => {
    try {
      const response = await api.put(`/habits/${id}`, updates);
      setHabits(habits.map(h => (h.id === id ? response.data.habit : h)));
    } catch (error) {
      console.error("Erro ao atualizar hábito:", error);
    }
  };

  const deleteHabit = async (id) => {
    try {
      await api.delete(`/habits/${id}`);
      setHabits(habits.filter(h => h.id !== id));
    } catch (error) {
      console.error("Erro ao deletar hábito:", error);
    }
  };

  const value = {
    user,
    setUser,
    habits,
    setHabits,
    addHabit,
    updateHabit,
    deleteHabit,
    login,
    logout,
    register,
    isInitialized
  };

  return (
    <AppContext.Provider value={value}>
      {isInitialized ? children : null}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);