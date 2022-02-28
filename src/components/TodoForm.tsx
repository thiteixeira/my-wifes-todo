import { useContext, useState } from 'react';
import { format } from 'date-fns';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useInputState } from '../hooks/useInputState';
import { useToggle } from '../hooks/useToggleState';
import { TodoType, TodosContext } from '../context/TodosContext';

const OPTIONS = [
  {
    component: <TaskOutlinedIcon />,
    key: TodoType.Task,
    description: 'Task',
  },
  {
    component: <DateRangeOutlinedIcon />,
    key: TodoType.Anniversary,
    description: 'Anniversary',
  },
  {
    component: <CakeOutlinedIcon />,
    key: TodoType.Birthday,
    description: 'Birthday',
  },
  {
    component: <HourglassBottomOutlinedIcon />,
    key: TodoType.Deadline,
    description: 'Deadline',
  },
  {
    component: <AccountBalanceOutlinedIcon />,
    key: TodoType.Financial,
    description: 'Financial',
  },
  {
    component: <AnnouncementOutlinedIcon />,
    key: TodoType.Other,
    description: 'Other',
  },
  {
    component: <AlarmOutlinedIcon />,
    key: TodoType.Reminder,
    description: 'Reminder',
  },
];

export const TodoForm = (): JSX.Element => {
  const { dispatch } = useContext(TodosContext);
  const [inputValue, handleInputChange, reset] = useInputState('');
  const [taskType, setTaskType] = useState(TodoType.Task);
  const [isPrioritized, togglePrioritized] = useToggle(false);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    dispatch({
      type: 'ADD',
      payload: {
        date: format(new Date(), 'yyyy-MM-dd'),
        description: inputValue,
        task: taskType,
        isPriority: isPrioritized,
        isCompleted: false,
      },
    });
    reset();
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTaskType(evt.target.value as TodoType);
  };

  return (
    <Paper style={{ margin: '1rem 0' }}>
      <FormControl fullWidth>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <TextField
              required
              id='todo-input'
              value={inputValue}
              onChange={handleInputChange}
              label='Add new entry'
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id='task-type-selector'
              select
              label='Select Task Type'
              value={taskType}
              onChange={handleChange}
              fullWidth
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              {OPTIONS.map((option, idx) => (
                <MenuItem
                  key={option.key}
                  value={option.key}
                  divider={idx === 0 ? true : false}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '1.33rem',
                    }}
                  >
                    <ListItemIcon>{option.component}</ListItemIcon>
                    <ListItemText>{option.description}</ListItemText>
                  </div>
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={1} style={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton
              color='primary'
              aria-label='favorite'
              onClick={togglePrioritized}
            >
              {isPrioritized ? (
                <StarOutlinedIcon />
              ) : (
                <StarBorderOutlinedIcon />
              )}
            </IconButton>
            <IconButton
              color='primary'
              sx={{ p: '10px' }}
              aria-label='add new entry'
              onClick={handleSubmit}
            >
              <AddOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </FormControl>
    </Paper>
  );
};
