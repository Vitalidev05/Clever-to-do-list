import { TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import 'regenerator-runtime';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useActions } from '../../../hooks/useAction';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import style from './AddTodo.scss';

interface ITodosProps {
  selectedDate: string;
}

export const AddTodo = (props: ITodosProps) => {
  const { auth, firestore } = useTypedSelector(store => store.authFirebase);
  const [user] = useAuthState(auth);
  const { addTask } = useActions();

  const { selectedDate } = props;
  const [todoText, setTodoText] = useState('');
  const [todoName, setTodoName] = useState('');
  const [completed, setComplited] = useState(false);

  const setNull = () => {
    setTodoText('');
    setTodoName('');
    setComplited(false);
  };

  const sendTask = async () => {
    const taskRef = firestore
      .collection('users')
      .doc(user.uid)
      .collection('date')
      .doc(selectedDate)
      .collection('todos')
      .doc();
    const taskId = taskRef.id;
    const data = {
      date: JSON.stringify(new Date()),
      done: completed,
      taskName: todoName,
      taskText: todoText,
    };
    await taskRef.set(data);
    addTask({
      key: selectedDate,
      newTask: {
        ...data,
        taskId,
      },
    });
    setNull();
  };

  return (
    <div className={style.flex}>
      <p className={style.date}>{selectedDate}</p>
      <TextField
        rowsMax={2}
        value={todoName}
        variant="filled"
        label="Task name"
        onChange={e => setTodoName(e.target.value)}
        className={style.text_field}
      />
      <TextField
        rowsMax={2}
        variant="filled"
        label="Task text"
        value={todoText}
        className={style.text_field}
        onChange={e => setTodoText(e.target.value)}
      />
      <FormControlLabel
        value="start"
        control={(
          <Checkbox
            color="primary"
            checked={completed}
            onChange={e => setComplited(e.target.checked)}
          />
        )}
        className={style.radio}
        label="Complite task"
        labelPlacement="start"
      />
      <Button
        variant="contained"
        color="primary"
        className={style.button}
        onClick={sendTask}
        disabled={!todoText || !todoName}
      >
        send
      </Button>
    </div>
  );
};
