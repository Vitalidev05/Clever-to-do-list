import { CalendarActionType, IState } from '../../const';
import { removeItemAtIndex, overrideItemAtIndex } from '../../utils/arrayUtils';
import {
  DELETE_TASK,
  ADD_TASK,
  CHECK_TASK,
  SET_STATE,
  GET_TASK,
  UPDATE_TASK,
  DELETE_STATE,
} from '../actions/actionTypes';

interface Istate {
  tasks: IState[];
}

const initialState: Istate = {
  tasks: [],
};

const calendar = (state = initialState, action: CalendarActionType): Istate => {
  switch (action.type) {
    case DELETE_TASK: {
      const { key, taskId } = action.payload;

      const targetTaskIndex = state.tasks.findIndex(x => x.key === key);
      const targetTask = state.tasks[targetTaskIndex];
      const targetTodoIndex = targetTask.todos.findIndex(x => x.taskId === taskId);

      const updatedTask = {
        ...targetTask,
        todos: removeItemAtIndex(targetTask.todos, targetTodoIndex),
      };

      return {
        ...state,
        tasks: overrideItemAtIndex(state.tasks, updatedTask, targetTaskIndex),
      };
    }

    case DELETE_STATE: {
      return {
        ...state,
        tasks: [],
      };
    }

    case UPDATE_TASK: {
      const { taskName, key, taskId, taskText } = action.payload;
      const targetTaskIndex = state.tasks.findIndex(x => x.key === key);
      const targetTask = state.tasks[targetTaskIndex];
      const targetTodoIndex = targetTask.todos.findIndex(x => x.taskId === taskId);
      const targetTodo = targetTask.todos[targetTodoIndex];

      const updateTodo = {
        ...targetTodo,
        taskName,
        taskText,
      };

      const updateTask = {
        ...targetTask,
        todos: overrideItemAtIndex(targetTask.todos, updateTodo, targetTodoIndex),
      };

      return {
        ...state,
        tasks: overrideItemAtIndex(state.tasks, updateTask, targetTaskIndex),
      };
    }

    case ADD_TASK: {
      const { key, newTask } = action.payload;
      const targetTaskIndex = state.tasks.findIndex(x => x.key === key);
      const targetTask = state.tasks[targetTaskIndex];

      const updatedTask = {
        ...targetTask,
        todos: [...targetTask.todos, newTask],
      };

      return {
        ...state,
        tasks: overrideItemAtIndex(state.tasks, updatedTask, targetTaskIndex),
      };
    }
    case GET_TASK: {
      const { key, todos } = action.payload;

      return {
        ...state,
        tasks: [...state.tasks, { key, todos }],
      };
    }

    case SET_STATE: {
      const updateState = action.payload;

      return {
        ...state,
        tasks: updateState,
      };
    }
    case CHECK_TASK: {
      const { done, taskId, key } = action.payload;
      const targetTaskIndex = state.tasks.findIndex(x => x.key === key);
      const targetTask = state.tasks[targetTaskIndex];
      const targetTodoIndex = targetTask.todos.findIndex(x => x.taskId === taskId);
      const targetTodo = targetTask.todos[targetTodoIndex];

      const updateTodo = {
        ...targetTodo,
        done,
      };

      const updatedTask = {
        ...targetTask,
        todos: overrideItemAtIndex(targetTask.todos, updateTodo, targetTodoIndex),
      };

      return {
        ...state,
        tasks: overrideItemAtIndex(state.tasks, updatedTask, targetTaskIndex),
      };
    }

    default:
      return state;
  }
};

export default calendar;
