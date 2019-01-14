import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT_TASK,
  UPDATE_TASK,
  REMOVE_CURRENT_TASK
} from './../actions/type';

const initialState = {
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
    }
  ],
  currentItem: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state
      };
    case ADD_TASK:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        items: state.items.filter(item => item.ID !== action.payload)
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
        )
      };
    case REMOVE_CURRENT_TASK:
      return {
        ...state,
        currentItem: []
      };
    default:
      return state;
  }
}
