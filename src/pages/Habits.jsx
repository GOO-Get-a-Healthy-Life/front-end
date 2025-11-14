import { useState, useEffect } from "react";
import { PlusCircle, Check, X, Bell } from "lucide-react";
import { useApp } from "../context/AppContext.jsx"; // 1. Adicionada a extensão .js

export default function Habits() {
  // 2. PEGA OS HÁBITOS E FUNÇÕES DIRETAMENTE DO CONTEXTO
  const { habits, addHabit, updateHabit, deleteHabit } = useApp();

  const [showModal, setShowModal] = useState(false);
  const [newHabit, setNewHabit] = useState({
    name: "",
    meta: "",
    category: "",
    frequency: "Diário",
    icon: "🌟",
    reminder: false,
    time: "09:00",
  });
  
  const [modalError, setModalError] = useState(null);

  const categories = ["Saúde", "Produtividade", "Bem-estar", "Educação"];
  const icons = ["🚶‍♂️", "🧘‍♀️", "📖", "🏃‍♀️", "💧", "🥦", "❤️", "📱"];

  const handleAddHabit = async () => {
    if (!newHabit.name.trim() || !newHabit.meta.trim()) {
       setModalError("Nome e Meta são obrigatórios.");
       return;
    }
    setModalError(null);

    try {
      // 3. CHAMA A FUNÇÃO DO CONTEXTO
      await addHabit(newHabit);
      
      setNewHabit({ name: "", meta: "", category: "", frequency: "Diário", icon: "🌟", reminder: false, time: "09:00" });
      setShowModal(false);
    } catch (error) {
       console.error(error);
       setModalError("Erro ao salvar o hábito. Tente novamente.");
    }
  };

  const handleMarkHabit = (index) => {
    const habitToUpdate = habits[index];
    // 4. Chama a função de update do contexto
    updateHabit(habitToUpdate.id, { progress: 100 });
  };

  return (
    <div className="p-10 font-inter bg-[#f5f6fa] min-h-screen">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">Hábitos</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#6b5cff] hover:bg-[#5a4bff] text-white font-medium px-5 py-2.5 rounded-lg shadow-md transition"
        >
          <PlusCircle size={20} />
          Novo Hábito
        </button>
      </div>

      {/* Lista de Hábitos */}
      <div className="flex flex-col gap-6 max-w-4xl">
        {/* 5. Renderiza os hábitos do CONTEXTO */}
        {habits.length === 0 ? (
          <p className="text-gray-600 text-center">
            Você ainda não cadastrou nenhum hábito. Comece clicando em "Novo Hábito"!
          </p>
        ) : (
          habits.map((habit, index) => (
            <div
              key={habit.id || index}
              className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 ${habit.color || 'bg-sky-500'} flex items-center justify-center rounded-full text-white text-xl`}
                >
                  {habit.icon || '🌟'}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{habit.title}</h3>
                  <p className="text-sm text-gray-500">Meta: {habit.description}</p>
                  <div className="mt-2 w-48 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-green-500 rounded-full transition-all duration-300"
                      style={{ width: `${habit.progress || 0}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{habit.progress || 0}% concluído</p>
                </div>
              </div>

              <button
                onClick={() => handleMarkHabit(index)}
                className={`flex items-center gap-2 ${
                  (habit.progress || 0) === 100
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                } text-white font-medium px-5 py-2 rounded-lg shadow transition`}
                disabled={(habit.progress || 0) === 100}
              >
                <Check size={18} />
                {(habit.progress || 0) === 100 ? "Concluído" : "Marcar Hoje"}
              </button>
            </div>
          ))
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[480px] p-6 relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={22} />
            </button>

            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Adicionar Novo Hábito
            </h3>
            
            {modalError && <p className="text-sm text-center text-red-600 mb-4">{modalError}</p>}

            {/* Nome */}
            <label className="block text-sm text-gray-600 mb-1">Nome do Hábito</label>
            <input
              type="text"
              value={newHabit.name}
              onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
              placeholder="Ex: Caminhar, Ler, Meditar..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#6b5cff]"
            />

            {/* Meta */}
            <label className="block text-sm text-gray-600 mb-1">Meta</label>
            <input
              type="text"
              value={newHabit.meta}
              onChange={(e) => setNewHabit({ ...newHabit, meta: e.target.value })}
              placeholder="Ex: 30 minutos, 20 páginas..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#6b5cff]"
            />
            
            {/* Categoria */}
            <label className="block text-sm text-gray-600 mb-2">Categoria</label>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setNewHabit({ ...newHabit, category: cat })}
                  className={`px-3 py-1 rounded-full border text-sm transition ${
                    newHabit.category === cat
                      ? "bg-[#6b5cff] text-white border-[#6b5cff]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Frequência */}
            <label className="block text-sm text-gray-600 mb-2">Frequência</label>
            <div className="flex gap-2 mb-4">
              {["Diário", "Semanal", "Personalizado"].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setNewHabit({ ...newHabit, frequency: freq })}
                  className={`px-3 py-1 rounded-full border text-sm transition ${
                    newHabit.frequency === freq
                      ? "bg-[#6b5cff] text-white border-[#6b5cff]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>

            {/* Ícones */}
            <label className="block text-sm text-gray-600 mb-2">Escolha um ícone</label>
            <div className="flex flex-wrap gap-2 mb-4">
              {icons.map((ic) => (
                <button
                  key={ic}
                  onClick={() => setNewHabit({ ...newHabit, icon: ic })}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border text-xl transition ${
                    newHabit.icon === ic
                      ? "bg-[#6b5cff] text-white border-[#6b5cff]"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {ic}
                </button>
              ))}
            </div>

            {/* Lembrete */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={newHabit.reminder}
                  onChange={(e) => setNewHabit({ ...newHabit, reminder: e.target.checked })}
                  className="accent-[#6b5cff] w-4 h-4"
                />
                Lembrete Diário
              </label>

              {newHabit.reminder && (
                <div className="flex items-center gap-2">
                  <Bell size={18} className="text-[#6b5cff]" />
                  <input
                    type="time"
                    value={newHabit.time}
                    onChange={(e) => setNewHabit({ ...newHabit, time: e.target.value })}
                    className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#6b5cff]"
                  />
                </div>
              )}
            </div>
            

            {/* Botões finais */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddHabit}
                className="px-5 py-2 rounded-lg bg-[#6b5cff] hover:bg-[#5a4bff] text-white font-medium"
              >
                Adicionar Hábito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}