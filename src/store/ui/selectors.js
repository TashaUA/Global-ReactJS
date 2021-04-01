import constants from "../../utils/constants";

const getDialogs = state => state.ui.dialogs || [];

const isEditDialogOpened = state => getDialogs(state).find(dialog => dialog.type === constants.DialogNames.EDIT).isOpened || false;

const isDeleteDialogOpened = state => getDialogs(state).find(dialog => dialog.type === constants.DialogNames.DELETE).isOpened || false;

export default {
    isEditDialogOpened,
    isDeleteDialogOpened,
}