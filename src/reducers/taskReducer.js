import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  UPDATE_TASK,
  REMOVE_CURRENT_TASK,
  SET_CURRENT_SELECT,
  DO_SORT
} from './../actions/type';

const initialState = {
  // All tasks
  items: [],
  // Sorted by priority tasks
  sortItems: [],
  // Current task
  currentItem: [],
  // For filter by select method
  selectedFlag: 'All tasks',
  // Selected project name
  selectedProjectName: '',
  // Selected tasks by project name
  selectedItems: [],
  // Selected and sorted tasks
  selectAndSortItems: [],
  // Sort by priority flag
  sortByPriority: false
};

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        items: [...state.items, action.payload],
        selectedItems: []
      };
    case DELETE_TASK:
      return {
        ...state,
        items: state.items.filter(item => item.ID !== action.payload),
        selectedItems: [],
        sortByPriority: false
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        currentItem: state.items.filter(item => item.ID === action.payload)
      };
    case UPDATE_TASK:
      return {
        ...state,
        items: state.items.map(item =>
          item.ID === action.payload.id ? (item = action.payload.task) : item
        ),
        selectedItems: [],
        sortByPriority: false
      };
    case REMOVE_CURRENT_TASK:
      return {
        ...state,
        currentItem: []
      };
    case SET_CURRENT_SELECT:
      return {
        ...state,
        selectedProjectName: action.payload,
        selectedItems: state.items.filter(
          item => item.project === action.payload
        ),
        sortByPriority: false
      };
    case DO_SORT:
      return {
        ...state,
        sortByPriority: action.payload,
        sortItems: [...state.items].sort(function(a, b) {
          return parseInt(a['priority']) > parseInt(b['priority']) ? 1 : -1;
        }),
        selectAndSortItems: [...state.selectedItems].sort(function(a, b) {
          return parseInt(a['priority']) > parseInt(b['priority']) ? 1 : -1;
        })
      };
    default:
      return state;
  }
}
