import { useState } from "react";
import { useApp } from "../../context/AppContext";

export default function HabitForm() {
  const { addHabit } = useApp();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addHabit({ id: Date.now(), name, done: false });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Novo hábito..."
        className="flex-1 p-2 border rounded-md"
      />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
        Adicionar
      </button>
    </form>
  );
}
