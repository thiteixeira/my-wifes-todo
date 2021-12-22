import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import todosReducer from "../reducers/TodosReducer";

export enum TodoType {
  Birthday = "CakeOutlinedIcon",
  Task = "TaskOutlined",
  Reminder = "AlarmOutlinedIcon",
  Financial = "AccountBalanceOutlinedIcon",
  Other = "AnnouncementOutlinedIcon",
}

const defaultTodos = [
  {
    id: uuidv4(),
    date: new Date(),
    type: TodoType.Task,
    description: "This is a sample task",
    isPriority: false,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    date: new Date(),
    type: TodoType.Task,
    description: "This is a prioritized task",
    isPriority: true,
    isCompleted: false,
  },
];

export const TodosContext = createContext<{
  state: ITodo[];
  dispatch: (action: Action) => void;
}>({
  state: defaultTodos,
  dispatch: () => {},
});

export const TodosProvider = (props: any) => {
  const [state, dispatch] = useReducer(todosReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};
