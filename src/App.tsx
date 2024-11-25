import "./App.css";
import { Button } from "./components/ui/button";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Todo Redux App</h1>
      <Todo></Todo>
    </> 
  );
}

export default App;
