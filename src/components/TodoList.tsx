import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { TodosContext } from '../context/TodosContext';
import { Todo } from './Todo';

export function TodoList() {
  const { state } = useContext(TodosContext);

  return state.length ? (
    <Paper>
      <List style={{ padding: '0' }}>
        {state.map((todo, i) => (
          <React.Fragment key={uuidv4()}>
            {/* eslint-disable-next-line */}
            <Todo {...todo} key={todo.id} />
            {i < state.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  ) : null;
}
