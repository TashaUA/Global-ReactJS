import types from '../movies/types';

export const closeDialog = () => (dispatch) => {
  dispatch({ type: types.CLOSE_DIALOG });
};

export default {
  closeDialog,
};
