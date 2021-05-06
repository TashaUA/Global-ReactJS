import types from './types';

const dialogs = [
  { type: 'edit', isOpened: false },
  { type: 'delete', isOpened: false },
];

const initialState = {
  dialogs,
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_DIALOG:
      return {
        ...state,
        dialogs: [...state.dialogs].map((obj) => ({ ...obj, isOpened: obj.type === action.payload ? true : obj.isOpened })),
      };
    case types.CLOSE_DIALOG:
      return {
        ...state,
        dialogs: [...state.dialogs].map((obj) => ({ ...obj, isOpened: obj.type === action.payload ? false : obj.isOpened })),
      };
    default:
      return state;
  }
}
