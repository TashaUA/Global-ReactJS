import types from "./types";

const dialogs = [
        {type: 'edit', isOpened: false},
        {type: 'delete', isOpened: false}
    ];

const initialState = {
    dialogs: dialogs,
};

export default function ui(state = initialState, action) {
    switch (action.type) {
        case types.OPEN_DIALOG:
            return {
                ...state,
                ...state.dialogs.map(obj => { return (obj.type === action.payload) ? obj.isOpened = true : '' }),
            };
        case types.CLOSE_DIALOG:
            return {
                ...state,
                ...state.dialogs.map(obj => { return (obj.type === action.payload) ? obj.isOpened = false : '' }),
            };
        default:
            return state;
    }
}