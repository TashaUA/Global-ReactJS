import React from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../store/reducer";

const renderConnected = (
    ui,
    { initialState, ...renderOptions } = {}
) => {
    const store = createStore(reducer, initialState);
    const Wrapper = ({ children }) => (
        <Provider store={store}>{children}</Provider>
    );

    return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderConnected;

