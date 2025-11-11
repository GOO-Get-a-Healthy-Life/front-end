export default function Habits() {
  const habits = [
    { name: "Caminhar", progress: 70 },
    { name: "Exercício", progress: 40 },
    { name: "Ler", progress: 20 },
    { name: "Beber Água", progress: 10 },
  ];

  return (
    <div className="p-10 font-inter">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Hábitos
      </h2>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <button className="bg-goo-blue text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-600">
          Novo Hábito
        </button>

        <div className="flex flex-col gap-4">
          {habits.map((habit) => (
            <div
              key={habit.name}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-800">{habit.name}</p>
                <div className="w-48 bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    className="bg-goo-blue h-2 rounded-full"
                    style={{ width: `${habit.progress}%` }}
                  />
                </div>
              </div>
              <button className="bg-goo-blue text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                Marcar Hoje
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
