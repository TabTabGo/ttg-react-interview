import { TodoActionTypes } from './stores/actions'; // Import action types from actions file
import { combineReducers } from 'redux'; // Import combineReducers from redux to combine multiple reducers

// Define the structure of a Task object
interface Task {
  id: number;
  title: string;
}

// Define the structure of an Action object
interface Action {
  type: string;
  payload: any;
}

// Define the default state as an empty array of tasks
const defaultState: Task[] = [];

// Define the todoReducer to handle different action types
const todoReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case TodoActionTypes.addTodo:
      // Add a new task to the state array
      return [...state, action.payload];
    case TodoActionTypes.deleteTodo:
      // Remove a task from the state array based on its id
      return state.filter(task => task.id !== action.payload);
    case TodoActionTypes.getTodos:
      // Set the state to the payload (an array of tasks)
      return [...action.payload];
    default:
      // Return the current state if the action type doesn't match any cases
      return state;
  }
};

// Combine the todoReducer into the rootReducer, allowing for future expansion
const rootReducer = combineReducers({
  tasks: todoReducer,
});

export default rootReducer; // Export the rootReducer as the default export
