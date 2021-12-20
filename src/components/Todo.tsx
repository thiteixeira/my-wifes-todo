import React, { useContext, useState, memo } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { EditTodoForm } from "./EditTodoForm";
import { ConfirmDialog } from "./ConfirmationDialog";
import { TodosContext } from "../context/TodosContext";
import { useToggle } from "../hooks/useToggleState";

export const Todo = memo(
  ({
    id,
    date,
    type,
    description,
    isPriority,
    isCompleted,
  }: ITodo): JSX.Element => {
    const { dispatch } = useContext(TodosContext);
    const [isEditing, toggleEditing] = useToggle(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <ListItem
        style={{
          minHeight: "4rem",
          borderLeft: isPriority ? "4px solid #d32f2f" : "none",
        }}
      >
        {isEditing ? (
          <EditTodoForm
            id={id}
            description={description}
            toggleEditForm={toggleEditing}
          />
        ) : (
          <React.Fragment>
            <ListItemText
              style={{ textDecoration: isCompleted ? "line-through" : "none" }}
            >
              {description}
            </ListItemText>
            <ListItemSecondaryAction>
              <Checkbox
                tabIndex={-1}
                checked={isCompleted}
                onClick={() =>
                  dispatch({ type: "TOGGLE", payload: { id: id } })
                }
              />
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
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <Delete />
              </IconButton>
              <ConfirmDialog
                title={"Are you sure you want to delete this item?"}
                isOpen={isOpen}
                setOpen={setIsOpen}
                onConfirm={() => {
                  dispatch({ type: "REMOVE", payload: { id: id } });
                }}
              >
                <Typography>There is no turning back</Typography>
              </ConfirmDialog>
            </ListItemSecondaryAction>
          </React.Fragment>
        )}
      </ListItem>
    );
  }
);
