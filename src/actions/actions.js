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
  DO_SORT
} from './type';

import jsonData from './data.json';

/**
 |--------------------------------------------------
 | Get data
 |--------------------------------------------------
 */

// Get tasks
export function getTasks() {
  console.log('get data');
  const loadData = JSON.parse(JSON.stringify(jsonData));

  return {
    type: GET_TASKS,
    payload: loadData
  };
}

/**
|--------------------------------------------------
| New task form
|--------------------------------------------------
*/
// open
export function openAdd() {
  return {
    type: OPEN_ADD,
    payload: false
  };
}

// close
export function closeAdd() {
  return {
    type: CLOSE_ADD,
    payload: true
  };
}

/**
|--------------------------------------------------
| Add
|--------------------------------------------------
*/

// Add new task
export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  };
}

/**
|--------------------------------------------------
| Delete
|--------------------------------------------------
*/

// Delete task
export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: id
  };
}

/**
|--------------------------------------------------
| Edit
|--------------------------------------------------
*/

// Set current task to edit
export function setCurrentTask(id) {
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
  return {
    type: SET_CURRENT_SELECT,
    payload: name
  };
}

/**
|--------------------------------------------------
| Sort
|--------------------------------------------------
*/

// Set sort by priority flag
export function doSortByPriority(checked) {
  return {
    type: DO_SORT,
    payload: checked
  };
}
