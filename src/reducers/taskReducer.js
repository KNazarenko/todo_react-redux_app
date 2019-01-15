import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  UPDATE_TASK,
  REMOVE_CURRENT_TASK,
  SET_CURRENT_SELECT
} from './../actions/type';

const initialState = {
  // All tasks
  items: [
    {
      ID: '1',
      name: 'Task01',
      project: 'Project1',
      priority: '2',
      description: 'to make some coffee'
    },
    {
      ID: '2',
      name: 'Task02',
      project: 'Project1',
      priority: '3',
      description: 'to go for a walk'
    },
    {
      ID: '3',
      name: 'Task03',
      project: 'Project2',
      priority: '1',
      description: 'to buy a car'
    },
    {
      ID: '4',
      name: 'Task04',
      project: 'Project2',
      priority: '2',
      description: 'do the exercises'
    }
  ],
  // Current task
  currentItem: [],
  // For filter by select method
  selectedFlag: 'All tasks',
  // Selected project name
  selectedProjectName: '',
  // Selected tasks by project name
  selectedItems: []
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
        ...state
      };
    case ADD_TASK:
      return {
        ...state,
        items: [...state.items, action.payload],
        selectedItems: []
      };
    case DELETE_TASK:
      console.log('DELETE_TASK');
      return {
        ...state,
        items: state.items.filter(item => item.ID !== action.payload),
        selectedItems: []
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        currentItem: state.items.filter(item => item.ID === action.payload)
      };
    case UPDATE_TASK:
      console.log('UPDATE_TASK');
      return {
        ...state,
        items: state.items.map(item =>
          item.ID === action.payload.id ? (item = action.payload.task) : item
        ),
        selectedItems: []
      };
    case REMOVE_CURRENT_TASK:
      console.log('REMOVE_CURRENT_TASK');
      return {
        ...state,
        currentItem: []
      };
    case SET_CURRENT_SELECT:
      console.log('SET_CURRENT_SELECT', action.payload, state.items[0].project);
      // debugger;
      return {
        ...state,
        selectedProjectName: action.payload,
        selectedItems: state.items.filter(
          item => item.project === action.payload
        )
      };
    default:
      return state;
  }
}
