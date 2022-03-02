import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { TodosContext } from '../context/TodosContext';
import { useInputState } from '../hooks/useInputState';

interface IEditFormProps {
  id: string;
  description: string;
  toggleEditForm: any;
}

export function EditTodoForm({
  id,
  description,
  toggleEditForm,
}: IEditFormProps): JSX.Element {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(description);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: 'EDIT',
          payload: { id, newDescription: value },
        });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
