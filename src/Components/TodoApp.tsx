import {useState, type ChangeEvent, type SubmitEvent} from "react";
import FormComponent from "./FormComponent";
import todosContainer from "./TodosContainer";


export interface TodoCardProps {
    id:string;
    title string;
    checked boolean;

}

export inerface TodoCardFunction extends TodoCardProps{
    handleToCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
    handleDeleteTodo: (id: string) => void;
    handleEdittdo: (id: string) => void;
}

export interface TodosContainerProps {
   todoList: TodoCardProps[];
   handleTodoCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
   handleDeletetodo: (id: string ) => void;
   handleDeletetodo: (id: string) => void;
}

export interface FromCompnentProps extends TodoCardProps {
    handleFormOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleOnSubmit: (e: SubmitEvent<HTMLFormElement>) => void;


}

export default function TodoApp() {
//states
//a state to store the input change
//once the submit button is cliked , the state will be stored
// as a todo entry in other state that will save a list of todos
const [todo,setTodo] = useState<TodoCardProps>({
    id: "",
    title: "",
    checked: false,
});

//second state: a state to store all the todos entry in one array
const  [todoList, setTodosList] = useState<TodoCardProps[]>([]);


//Handlers
const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
     setTodo((prevTodo) => ({ ...prevTodo, [e.target.name]: else.target.value}));
};

const handleFormOnChange = (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTodosList((prevList) => [...prevList, {
        id:crypto.randomUUID(),
        title: todo.title,
        checked: false,
    },
  ]);
  setTodo({
    id:"",
    title: "",
    checked: false,

  })
};

const handleTodoCheck = (e: ChangeEvent<HTMLInputElement>, id: string ) => {
    setTodosList((prevList) =>
        prevList.map((entry) =>
            entry.id === id
    ? {...entry,checked: e.target.checked }
       {entry},
 ),
 );

};

//4 handler delete
const handleDeleteTodo = (id: string) => {
   setTodosList((prevList)=> prevList.filter((entry) => entry.id !== id));

};

const handleEdittodo = (id: string) => {
    const todoEntry = todos:ist.find((entry)) => FileSystemEntry.id === id) || {title: "", id: ""}
    setTodo({ ...todoEntry })
};

//Main Return
return (
    <div>
     <h1>Todo List App</h1>
     <FormComponent 
     {...todo} 
     handleFormOnChange={handleFormOnChange} 
     handleOnSubmit=(handleOnSubmit) 
    />

    <todosContainer
    todosList={todoList}
    handleToCheck={handletodoCheck}
    handleDeleteTodo={handleDeletetodo}
    handleEdittdo={handleEdittodo}
    />

</div>
);




}