import { createAction } from 'redux-actions';

import types from './types';

const openDialog = createAction(types.OPEN_DIALOG);
const closeDialog = createAction(types.CLOSE_DIALOG);

export default {
  openDialog,
  closeDialog,
};
