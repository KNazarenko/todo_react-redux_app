import { OPEN_ADD, CLOSE_ADD } from './../actions/type';

const initialState = { closeAddForm: true };

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_ADD:
      return { ...state, closeAddForm: action.payload };
    case CLOSE_ADD:
      return { ...state, closeAddForm: action.payload };
    default:
      return state;
  }
}
