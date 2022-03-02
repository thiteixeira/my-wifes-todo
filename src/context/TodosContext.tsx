import { createContext, useReducer, useMemo } from 'react';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import todosReducer from '../reducers/TodosReducer';

export enum TodoType {
  anniversary = 'DateRangeOutlined',
  birthday = 'CakeOutlined',
  deadline = 'HourglassBottomOutlined',
  task = 'TaskOutlined',
  reminder = 'AlarmOutlined',
  financial = 'AccountBalanceOutlined',
  other = 'AnnouncementOutlined',
}

const defaultTodos = [
  {
    id: uuidv4(),
    date: format(new Date(), 'yyyy-MM-dd'),
    type: TodoType.task,
    description: 'This is a sample task',
    isPriority: false,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    date: format(new Date(), 'yyyy-MM-dd'),
    type: TodoType.task,
    description: 'This is a prioritized task',
    isPriority: true,
    isCompleted: false,
  },
];

export const TodosContext = createContext<{
  state: ITodo[];
  dispatch:(action: Action) => void;
    }>({
      state: defaultTodos,
      dispatch: () => {},
    });

export function TodosProvider({ children }: any) {
  const [state, dispatch] = useReducer(todosReducer, defaultTodos);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
