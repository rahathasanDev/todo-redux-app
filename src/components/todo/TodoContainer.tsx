import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const {todos} = useAppSelector ((state)=> state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
       
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full  rounded p-[4px] ">
        <div className="bg-white p-5 space-y-3">
         {
          todos.map((item) => (
            <TodoCard title={item.title} description={item.description}></TodoCard>
          ))
         }
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
