import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
        <Button className="text-xl font-semibold">Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full  rounded p-[4px] ">
        <div className="bg-white p-5 space-y-3">
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
