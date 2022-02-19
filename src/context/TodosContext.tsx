import { createContext, useReducer } from "react";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import todosReducer from "../reducers/TodosReducer";

export enum TodoType {
  Anniversary = "DateRangeOutlined",
  Birthday = "CakeOutlined",
  Deadline = "HourglassBottomOutlined",
  Task = "TaskOutlined",
  Reminder = "AlarmOutlined",
  Financial = "AccountBalanceOutlined",
  Other = "AnnouncementOutlined",
}

const defaultTodos = [
  {
    id: uuidv4(),
    date: format(new Date(), "yyyy-MM-dd"),
    type: TodoType.Task,
    description: "This is a sample task",
    isPriority: false,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    date: format(new Date(), "yyyy-MM-dd"),
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
