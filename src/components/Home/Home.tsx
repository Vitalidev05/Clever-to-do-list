import firebase from 'firebase';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import dateArray from '../../const/date';
import { IGetTasks } from '../../const/index';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Calendar from '../Calendar/index';

export const Home = () => {
  const { auth } = useTypedSelector(store => store.authFirebase);
  const [user] = useAuthState(auth);
  const { getTask, addTask } = useActions();

  function getData(date: string) {
    return firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('date')
      .doc(date)
      .collection('todos');
  }
  useEffect(() => {
    const func = () => {
      dateArray.forEach(async date => {
        getTask({ key: date, todos: [] });
        const snapshot = await getData(date).get();
        if (snapshot) {
          snapshot.forEach((doc: firebase.firestore.DocumentData) => {
            const data = doc.data() as IGetTasks;
            addTask({
              key: date,
              newTask: {
                ...data,
                taskId: doc.id,
              },
            });
          });
        }
      });
    };
    func();
  }, []);

  return <Calendar />;
};
