import { Container, Divider } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import dateArray, { dateArr } from '../../const/date';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../Loader/index';

import AddTodo from './AddTodo';
import style from './Calendar.scss';
import 'regenerator-runtime';
import Date from './Date';
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
      <div className={style.date_card_container}>
        {dateArr.map((value, index) => (
          <Date
            dateArrayValue={dateArray[index]}
            setDateAndIndex={setDateAndIndex}
            dateArrayIndex={index}
            value={value}
            key={value}
          />
        ))}
      </div>

      {taskIndex >= 0 ? (
        <div className={style.tasks_num}>
          <p>
            TASKS FOR 
            {' '}
            {dateArr[taskIndex]}
            {' '}
            <span className={style.tasks_span}>{tasks[taskIndex].todos.length || 0}</span>
          </p>
        </div>
      ) : null}

      {taskIndex >= 0 ? <AddTodo selectedDate={selectedDate} /> : null}

      {taskIndex >= 0 ? (
        <div>
          <Divider variant="fullWidth" className={style.divider} />
          <h2 className={style.h2}>Tasks</h2>
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
        </div>
      ) : null}
    </Container>
  );
};

export { Calendar };
