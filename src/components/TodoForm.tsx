import { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { useInputState } from "../hooks/useInputState";
import { useToggle } from "../hooks/useToggleState";
import { TodoType, TodosContext } from "../context/TodosContext";

const OPTIONS = [
  {
    component: <TaskOutlinedIcon />,
    key: TodoType.Task,
    description: "Task (default)",
  },
  {
    component: <DateRangeOutlinedIcon />,
    key: TodoType.Anniversary,
    description: "Anniversary",
  },
  {
    component: <CakeOutlinedIcon />,
    key: TodoType.Birthday,
    description: "Birthday",
  },
  {
    component: <HourglassBottomOutlinedIcon />,
    key: TodoType.Deadline,
    description: "Deadline",
  },
  {
    component: <AccountBalanceOutlinedIcon />,
    key: TodoType.Financial,
    description: "Financial",
  },
  {
    component: <AnnouncementOutlinedIcon />,
    key: TodoType.Other,
    description: "Other",
  },
  {
    component: <AlarmOutlinedIcon />,
    key: TodoType.Reminder,
    description: "Reminder",
  },
];

export const TodoForm = (): JSX.Element => {
  const { dispatch } = useContext(TodosContext);
  const [inputValue, handleInputChange, reset] = useInputState("");
  const [taskType, setTaskType] = useState(TodoType.Task);
  const [isPrioritized, togglePrioritized] = useToggle(false);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        description: inputValue,
        task: taskType,
        isPriority: isPrioritized,
      },
    });
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0" }}>
      <FormControl fullWidth>
        <TextField
          required
          id="todo-input"
          value={inputValue}
          onChange={handleInputChange}
          label="Add new entry"
          fullWidth
        />
        <Select>
          <MenuList>
            {OPTIONS.map((option, idx) => (
              <>
                <MenuItem onClick={() => setTaskType(option.key)}>
                  <ListItemIcon>{option.component}</ListItemIcon>
                  <ListItemText>{option.description}</ListItemText>
                </MenuItem>
                {idx === 0 && <Divider />}
              </>
            ))}
          </MenuList>
        </Select>
        <IconButton
          color="primary"
          aria-label="favorite"
          onClick={togglePrioritized}
        >
          {isPrioritized ? <StarOutlinedIcon /> : <StarBorderOutlinedIcon />}
        </IconButton>
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="add new entry"
          onClick={handleSubmit}
        >
          <AddOutlinedIcon />
        </IconButton>
      </FormControl>
    </Paper>
  );
};
