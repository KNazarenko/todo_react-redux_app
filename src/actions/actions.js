import {
  OPEN_ADD,
  CLOSE_ADD,
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  UPDATE_TASK,
  REMOVE_CURRENT_TASK,
  SET_CURRENT_SELECT,
  SET_CURRENT_SELECT_lIST
} from './type';

// New task form
// open
export function openAdd() {
  console.log('open add form');
  return {
    type: OPEN_ADD,
    payload: false
  };
}

// close
export function closeAdd() {
  console.log('close add form');
  return {
    type: CLOSE_ADD,
    payload: true
  };
}

// Get tasks
export function getTasks() {
  console.log('get tasks');
  return {
    type: GET_TASKS
  };
}

// Add new task
export function addTask(task) {
  console.log('add task');
  return {
    type: ADD_TASK,
    payload: task
  };
}

// Delete task
export function deleteTask(id) {
  console.log('delete task', id);
  // debugger;
  return {
    type: DELETE_TASK,
    payload: id
  };
}

// Set current task to edit
export function setCurrentTask(id) {
  console.log('set current task');
  return {
    type: SET_CURRENT_TASK,
    payload: id
  };
}

// Update new task
export function updateTask(task, id) {
  return {
    type: UPDATE_TASK,
    payload: { task, id }
  };
}

// Remove current task to unmount edit component
export function removeCurrentTask() {
  console.log('remove current task');
  return {
    type: REMOVE_CURRENT_TASK
  };
}

/**
|--------------------------------------------------
| Select
|--------------------------------------------------
*/

// Set current select project
export function setCurrentSelect(name) {
  console.log('setCurrentSelect:', name);
  return {
    type: SET_CURRENT_SELECT,
    payload: name
  };
}
