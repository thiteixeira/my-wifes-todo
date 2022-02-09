import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";
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
import { TodoType } from "../context/TodosContext";

export const TodoForm = (): JSX.Element => {
  const { dispatch } = useContext(TodosContext);
  const [inputValue, handleInputChange, reset] = useInputState("");
  const [taskType, setTaskType] = useState(TodoType.Task);
  const [isPrioritized, togglePrioritized] = useToggle(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <MenuItem>
                <ListItemIcon>
                  <TaskOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Task (default)</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <DateRangeOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Anniversary</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <CakeOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Birthday</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <HourglassBottomOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Deadline</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <AccountBalanceOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Financial</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <AnnouncementOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Other</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <AlarmOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Reminder</ListItemText>
              </MenuItem>
            </MenuList>
          </Select>
        </FormControl>
      </form>
    </Paper>
  );
};
