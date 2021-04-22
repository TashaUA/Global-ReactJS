import React from 'react';
import { screen } from "@testing-library/react";
import Dialog from '../../components/Dialog';
import userEvent from "@testing-library/user-event";
import renderConnected from "../utils/renderConnected";

describe('Dialog', () => {

    it('calls "onClick" prop on button click',  (done) => {
        renderConnected(<Dialog type="edit" title="Add movie" />);
        userEvent.click(screen.getByRole('link', { name: /close/i }));
        done();
    });
});