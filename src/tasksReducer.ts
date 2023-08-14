import { Action } from './actions';

export interface TasksState {
  tasks: string[];
}

const initialState = {
  tasks: [],
};

export const tasksReducer = (
  state: TasksState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case 'ADD_TASK': {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    default:
      return state;
  }
};
