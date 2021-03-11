import firebase from 'firebase';

import {
  SET_AUTH_TRUE,
  SET_AUTH_FALSE,
  DELETE_TASK,
  ADD_TASK,
  CHECK_TASK,
  SET_STATE,
  GET_TASK,
  UPDATE_TASK,
  DELETE_STATE,
} from '../store/actions/actionTypes';

interface IDoneTask {
  done: boolean;
  taskId: string;
  key: string;
}

interface ITask {
  date: string;
  taskName: string;
  taskText: string;
  taskId: string;
  done: boolean;
}

interface IGetTasks {
  date: string;
  taskName: string;
  taskText: string;
  done: boolean;
}

interface IDeleteTask {
  key: string;
  taskId: string;
}

interface IState {
  key: string;
  todos: ITask[];
}

interface IGetTask {
  todos: ITask[];
  key: string;
}

interface IAddTask {
  key: string;
  newTask: ITask;
}

interface IUpdateTask {
  key: string;
  taskId: string;
  taskText: string;
  taskName: string;
}

type AuthActionType =
  | {
      type: typeof SET_AUTH_TRUE;
    }
  | {
      type: typeof SET_AUTH_FALSE;
    };

type CalendarActionType =
  | {
      type: typeof SET_STATE;
      payload: IState[];
    }
  | {
      type: typeof DELETE_TASK;
      payload: IDeleteTask;
    }
  | {
      type: typeof CHECK_TASK;
      payload: IDoneTask;
    }
  | {
      type: typeof GET_TASK;
      payload: IGetTask;
    }
  | {
      type: typeof UPDATE_TASK;
      payload: IUpdateTask;
    }
  | {
      type: typeof DELETE_STATE;
    }
  | {
      type: typeof ADD_TASK;
      payload: IAddTask;
    };

interface StateProps {
  auth: firebase.auth.Auth;
}

interface CalendarStateProps {
  auth: firebase.auth.Auth;
  firestore: firebase.firestore.Firestore;
  tasks: ITask[];
}

interface CalendarDispatchProps {
  onDeleteTask: (id: string) => void;
  onCheckTask: (id: string, bool: boolean) => void;
  onAddTask: (date: string, taskName: string, taskText: string, taskId: string) => void;
}

interface HomeDispatchProps {
  onDeleteTask: (id: string) => void;
  onCheckTask: (id: string, bool: boolean) => void;
  onAddTask: (date: string, taskName: string, taskText: string, taskId: string) => void;
  onSetState: (tasks: ITask[]) => void;
}

interface LoginDispacthProps {
  onGoogleLogin: () => void;
}

export {
  AuthActionType,
  StateProps,
  CalendarStateProps,
  CalendarActionType,
  IAddTask,
  IDoneTask,
  CalendarDispatchProps,
  ITask,
  HomeDispatchProps,
  LoginDispacthProps,
  IDeleteTask,
  IState,
  IGetTask,
  IGetTasks,
  IUpdateTask,
};
