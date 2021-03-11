import {
  CardContent,
  Card,
  TextField,
  CardActions,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import React, { useState } from 'react';
import 'regenerator-runtime';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import style from './Todo.scss';

interface ITodosProps {
  selectedDate: string;
  taskName: string;
  done: boolean;
  taskText: string;
  taskId: string;
  date: string;
}

export const Todo = (props: ITodosProps) => {
  const { date, done, taskName, taskText, taskId, selectedDate } = props;
  const [todoName, setTodoName] = useState(taskName);
  const [todoText, setTodoText] = useState(taskText);
  const [isDone, setIsDone] = useState(done);
  const { auth, firestore } = useTypedSelector(store => store.authFirebase);
  const [user] = useAuthState(auth);
  const { updateTask, deleteTask, checkTask } = useActions();

  const getTaskRef = () =>
    firestore
      .collection('users')
      .doc(user.uid)
      .collection('date')
      .doc(selectedDate)
      .collection('todos')
      .doc(taskId);

  const updateTodo = async () => {
    const taskRef = getTaskRef();

    await taskRef.update({
      taskName: todoName,
      taskText: todoText,
    });
    updateTask({ taskId, taskText: todoText, taskName: todoName, key: selectedDate });
  };

  const deleteTodo = async () => {
    const tasKRef = getTaskRef();
    await tasKRef.delete();
    deleteTask({ key: selectedDate, taskId });
  };

  const changeTaskStatus = async (taskDone: boolean) => {
    const taskRef = getTaskRef();
    await taskRef.update({
      done: taskDone,
    });
    checkTask({ key: selectedDate, done: taskDone, taskId });
    setIsDone(taskDone);
  };

  return (
    <Card variant="outlined">
      <CardContent className={style.card}>
        <TextField
          rowsMax={2}
          value={todoName}
          variant="outlined"
          label="Task name"
          onChange={e => setTodoName(e.target.value)}
          className={style.card__text_field}
        />
        <TextField
          rowsMax={2}
          value={todoText}
          variant="outlined"
          label="Task text"
          onChange={e => setTodoText(e.target.value)}
          className={style.card__text_field}
        />
        <TextField
          rowsMax={2}
          value={date}
          variant="outlined"
          label="date"
          className={style.card__text_field}
          disabled
        />
        <FormControlLabel
          value="start"
          control={(
            <Checkbox
              color="primary"
              checked={isDone}
              onChange={e => changeTaskStatus(e.target.checked)}
            />
          )}
          className={style.radio}
          label="Complite task"
          labelPlacement="start"
        />
      </CardContent>
      <CardActions className={style.card_actions}>
        <Button size="small" variant="outlined" color="primary" onClick={updateTodo}>
          UPDATE
        </Button>
        <Button size="small" variant="outlined" color="secondary" onClick={deleteTodo}>
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
};
