import { useApp } from "../../context/AppContext";
import { Trash2, CheckCircle2 } from "lucide-react";

export default function HabitList() {
  const { habits, deleteHabit, updateHabit } = useApp();

  return (
    <ul className="space-y-2">
      {habits.map((habit) => (
        <li key={habit.id} className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm">
          <span className={`${habit.done ? "line-through text-gray-400" : ""}`}>{habit.name}</span>
          <div className="flex gap-2">
            <button onClick={() => updateHabit(habit.id, { done: !habit.done })}>
              <CheckCircle2 className={habit.done ? "text-green-500" : "text-gray-400"} />
            </button>
            <button onClick={() => deleteHabit(habit.id)}>
              <Trash2 className="text-red-400" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
