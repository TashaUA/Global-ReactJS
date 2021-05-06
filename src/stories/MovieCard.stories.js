// MovieCard.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react'
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { withKnobs, select} from '@storybook/addon-knobs';
import configureStore from '../utils/configureStore';
import MovieCard from '../components/MovieCard';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'MovieCard',
    component: MovieCard,
};

const store = configureStore();

const withProvider = (story) => (
    <Provider store={store}>
        <Router>
            { story() }
        </Router>
    </Provider>
);

const arrayOfMovies = [
    {
        id: 337167,
        title: 'Fifty Shades Freed',
        tagline: "Don't miss the climax",
        vote_average: 6.1,
        vote_count: 1195,
        release_date: '2018-02-07',
        poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
        overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
        budget: 55000000,
        revenue: 136906000,
        genres: [
            'Drama',
            'Romance',
        ],
        runtime: 106,
    },
    {
        id: 269149,
        title: 'Zootopia',
        tagline: 'Welcome to the urban jungle.',
        vote_average: 7.7,
        vote_count: 6795,
        release_date: '2016-02-11',
        // "poster_path": "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
        overview: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
        budget: 150000000,
        revenue: 1023784195,
        genres: [
            'Animation',
            'Adventure',
            'Family',
            'Comedy',
        ],
        runtime: 108,
    },
];

storiesOf('MovieCard', module)
    .addDecorator(withKnobs)
    .addDecorator(withProvider)
    .add("default",
        () => <MovieCard entry={select('Movies', arrayOfMovies, arrayOfMovies[0])} />
    );

storiesOf('MovieCard', module);

