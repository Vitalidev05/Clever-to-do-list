import { Container, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import dateArray from '../../const/date';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../Loader/index';

import AddTodo from './AddTodo';
import style from './Calendar.scss';
import 'regenerator-runtime';
import Todo from './Todo';

const Calendar = () => {
  const { auth } = useTypedSelector(store => store.authFirebase);
  const { tasks } = useTypedSelector(store => store.calendar);
  const [, loading] = useAuthState(auth);
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);
  const [taskIndex, setTaskIndex] = useState(-1);

  const setDateAndIndex = (value: string) => {
    setSelectedDate(value);
    const targetTaskIndex = tasks.findIndex(x => x.key === value);
    setTaskIndex(targetTaskIndex);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      {dateArray.map(value => (
        <Button key={value} onClick={() => setDateAndIndex(value)} variant="outlined">
          {value}
        </Button>
      ))}
      {taskIndex >= 0 ? <AddTodo selectedDate={selectedDate} /> : null}

      {taskIndex >= 0 ? (
        <div className={style.card_container}>
          {tasks[taskIndex].todos.map(task => {
            const { done, date, taskName, taskId, taskText } = task;
            return (
              <Todo
                selectedDate={selectedDate}
                taskId={taskId}
                key={taskId}
                date={date}
                done={done}
                taskName={taskName}
                taskText={taskText}
              />
            );
          })}
        </div>
      ) : null}
    </Container>
  );
};

export { Calendar };
