import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [habits, setHabits] = useState([]);
  const [user, setUser] = useState({ name: "Nicollas", level: 1, points: 0 });

  const addHabit = (habit) => setHabits([...habits, habit]);
  const updateHabit = (id, updates) =>
    setHabits(habits.map(h => (h.id === id ? { ...h, ...updates } : h)));
  const deleteHabit = (id) => setHabits(habits.filter(h => h.id !== id));

  return (
    <AppContext.Provider value={{ habits, addHabit, updateHabit, deleteHabit, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
