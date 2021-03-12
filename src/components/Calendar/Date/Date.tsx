import { Card, CardContent, Typography, CardActionArea } from '@material-ui/core';
import React from 'react';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import style from './Date.scss';

interface IDateProps {
  setDateAndIndex: (value: string) => void;
  value: string;
  dateArrayIndex: number;
  dateArrayValue: string;
}

export const Date = (props: IDateProps) => {
  const { setDateAndIndex, value, dateArrayIndex, dateArrayValue } = props;
  const { tasks } = useTypedSelector(store => store.calendar);

  return (
    <Card className={style.date_card} variant="outlined">
      <CardActionArea onClick={() => setDateAndIndex(dateArrayValue)}>
        <CardContent>
          <Typography variant="h5" component="h2" className={style.typography}>
            {value.split(' ').map(mapValue => (
              <p key={mapValue}>{mapValue}</p>
            ))}
            <div className={style.dot_container}>
              {tasks[dateArrayIndex]?.todos ? (
                tasks[dateArrayIndex]?.todos.some(x => x.done) ? (
                  <div className={style.dot_complited} />
                ) : null
              ) : null}
              {tasks[dateArrayIndex]?.todos ? (
                tasks[dateArrayIndex]?.todos.some(x => !x.done) ? (
                  <div className={style.dot_uncomplited} />
                ) : null
              ) : null}
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
