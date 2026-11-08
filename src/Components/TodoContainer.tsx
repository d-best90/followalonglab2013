// this compnent will have a Todo list as a prop
// then we will map into several Todocards
import type { TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({ 
    todosList, 
    handleTodoCheck,
    handleDeletetodo,
    handleEditTodo,


}: TodosContainerProps) {
    return (
      <div>
        {todosList.length > 0 || "todo list is empty" }
        {todosList.map((todo) =>  (
        <TodoCard 
        Key={todo.id} 
        {...todo}
        handleTodoCheck={handleTodoCheck}
        handleDeletetodo={handleDeletetodo}
        handleEdittdo={handlEditTodo}
      />
        ))}
      </div>
    );
}
