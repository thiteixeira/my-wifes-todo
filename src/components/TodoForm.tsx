import { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { useInputState } from "../hooks/useInputState";
import { useToggle } from "../hooks/useToggleState";
import { TodoType, TodosContext } from "../context/TodosContext";

const OPTIONS = [
  {
    component: <TaskOutlinedIcon />,
    description: "Task (default)",
  },
  {
    component: <DateRangeOutlinedIcon />,
    description: "Anniversary",
  },
  {
    component: <CakeOutlinedIcon />,
    description: "Birthday",
  },
  {
    component: <HourglassBottomOutlinedIcon />,
    description: "Deadline",
  },
  {
    component: <AccountBalanceOutlinedIcon />,
    description: "Financial",
  },
  {
    component: <AnnouncementOutlinedIcon />,
    description: "Other",
  },
  {
    component: <AlarmOutlinedIcon />,
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
      <form onSubmit={handleSubmit}>
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
                  <MenuItem>
                    <ListItemIcon>{option.component}</ListItemIcon>
                    <ListItemText>{option.description}</ListItemText>
                  </MenuItem>
                  {idx === 0 && <Divider />}
                </>
              ))}
            </MenuList>
          </Select>
        </FormControl>
      </form>
    </Paper>
  );
};
