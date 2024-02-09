import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="bg-slate-300 h-dvh">
      <div className="mx-12 flex flex-col">
        <h1 className="text-[40px] font-semibold text-center mt-6">
          Redux toolkit
        </h1>
        <AddTodo />
        <Todos></Todos>
      </div>
    </div>
  );
};

export default App;
