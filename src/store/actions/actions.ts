import { IAddTask, IDoneTask, ITask, IDeleteTask, IGetTask, IUpdateTask } from '../../const/index';

import {
  SET_AUTH_FALSE,
  SET_AUTH_TRUE,
  DELETE_TASK,
  ADD_TASK,
  CHECK_TASK,
  SET_STATE,
  GET_TASK,
  UPDATE_TASK,
  DELETE_STATE,
} from './actionTypes';

function googleAuth() {
  return async () => {};
}

function updateTask(obj: IUpdateTask) {
  return {
    type: UPDATE_TASK,
    payload: obj,
  };
}

function getTask(obj: IGetTask) {
  return {
    type: GET_TASK,
    payload: obj,
  };
}

function setAuthTrue() {
  return {
    type: SET_AUTH_TRUE,
  };
}

function setAuthFalse() {
  return {
    type: SET_AUTH_FALSE,
  };
}

function deleteTask(obj: IDeleteTask) {
  return {
    type: DELETE_TASK,
    payload: obj,
  };
}

function checkTask(obj: IDoneTask) {
  return {
    type: CHECK_TASK,
    payload: obj,
  };
}

function addTask(obj: IAddTask) {
  return {
    type: ADD_TASK,
    payload: obj,
  };
}

function setState(obj: ITask[]) {
  return {
    type: SET_STATE,
    payload: obj,
  };
}

function deleteState() {
  return {
    type: DELETE_STATE,
  };
}

export {
  setAuthTrue,
  setAuthFalse,
  deleteTask,
  addTask,
  checkTask,
  setState,
  googleAuth,
  getTask,
  updateTask,
  deleteState,
};
