import { v4 as uuidv4 } from 'uuid';

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          date: action.payload.date,
          id: uuidv4(),
          description: action.payload.description,
          isCompleted: action.payload.isCompleted,
          isPriority: action.payload.isPriority,
          type: action.payload.task,
        },
      ];
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.payload.id);
    case 'TOGGLE':
      return state.map((todo) => (todo.id === action.payload.id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo));
    case 'FAVORITE':
      return state.map((todo) => (todo.id === action.payload.id
        ? { ...todo, isPriority: !todo.isPriority }
        : todo));
    case 'EDIT':
      return state.map((todo) => (todo.id === action.payload.id
        ? { ...todo, description: action.payload.newDescription }
        : todo));
    default:
      return state;
  }
};

export default todosReducer;
