import {useCallback} from "react";
import DialogNames from "../../utils/constants";
import types from "../movies/types";
import axios from "axios";

export const closeDialog = (type) => {
    return (dispatch) => {
        dispatch({ type: types.CLOSE_DIALOG });

    };
};