import { v4 as uuidv4 } from "uuid";
import { TodoType } from "../context/TodosContext";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          date: new Date(),
          id: uuidv4(),
          description: action.payload.description,
          isCompleted: false,
          isPriority: false,
          type: TodoType.Task,
        },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, description: action.payload.newDescription }
          : todo
      );
    default:
      return state;
  }
};

export default todosReducer;
