import React, { useContext } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { EditTodoForm } from "./EditTodoForm";
import { TodosContext } from "../context/TodosContext";
import { useToggle } from "../hooks/useToggleState";

export const Todo = ({
  id,
  date,
  type,
  description,
  isPriority,
  isCompleted,
}: ITodo): JSX.Element => {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, toggleEditing] = useToggle(false);

  return (
    <ListItem style={{ height: "4rem" }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          description={description}
          toggleEditForm={toggleEditing}
        />
      ) : (
        <React.Fragment>
          <Checkbox
            tabIndex={-1}
            checked={isCompleted}
            onClick={() => dispatch({ type: "TOGGLE", payload: { id: id } })}
          />
          <ListItemText
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            {description}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              color="primary"
              aria-label="Edit"
              onClick={toggleEditing}
            >
              <Edit />
            </IconButton>
            <IconButton
              color="error"
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", payload: { id: id } })}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </React.Fragment>
      )}
    </ListItem>
  );
};
