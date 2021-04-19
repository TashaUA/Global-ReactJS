import React from 'react';
import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import AddEditForm from '../../../components/Form/AddEditForm';
import renderConnected from "../../utils/renderConnected";
import constants from "../../../utils/constants";

describe('AddEditForm', () => {
    let handleSubmit, handleChange, selectMovie, closeDialog;

    beforeEach(() => {
        handleSubmit = jest.fn();
        handleChange = jest.fn();
        selectMovie = jest.fn();
        closeDialog = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders AddEditForm component', () => {
        renderConnected(<AddEditForm dialogOpened='true' errors={{}} values={{}} />);
    });


    it('should add new movie when submit button clicked', async () => {

        const { getByTestId } = renderConnected(<AddEditForm dialogOpened='true'
                                                             handleChange={handleChange}
                                                             handleSubmit={handleSubmit}
                                                             errors={{}} values={{}} selectedMovie={{}} />);

        userEvent.type(screen.getByLabelText(/title/i), 'Transformers 7');
        userEvent.type(screen.getByLabelText(/release Date/i), '2019-06-26');
        userEvent.type(screen.getByLabelText(/movie url/i), 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg');
        userEvent.type(screen.getByLabelText(/genre/i), ['Comedy']);
        userEvent.type(screen.getByLabelText(/overview/i), 'Plot unknown.');
        userEvent.type(screen.getByLabelText(/runtime/i), '200');

        //userEvent.click(screen.getByRole('button', { name: /Submit/i }));
        fireEvent.submit(getByTestId("form"));

        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalled()
        )
    });

    it('calls "onClick" prop on reset click', async () => {
        renderConnected(<AddEditForm dialogOpened='true' closeDialog={closeDialog} selectMovie={selectMovie} handleChange={handleChange} handleSubmit={handleSubmit} errors={{}} values={constants.initialMovieState} selectedMovie={constants.initialMovieState} />);

        userEvent.click(screen.getByRole('link', { name: /reset/i }));
        expect(closeDialog).toHaveBeenCalled();
    });
});
