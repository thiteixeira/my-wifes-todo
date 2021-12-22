import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useInputState } from "../hooks/useInputState";

export const TodoForm = (): JSX.Element => {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    dispatch({
      type: "ADD",
      payload: { description: value },
    });
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          label="Add new entry"
          fullWidth
        />
      </form>
    </Paper>
  );
};
