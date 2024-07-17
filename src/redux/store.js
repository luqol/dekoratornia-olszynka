import { configureStore } from '@reduxjs/toolkit';
import initialState from './initState';
import galleryReducer from './galerryRedux';

const subreducers = {
    gallery: galleryReducer,
};

const store = configureStore({
    reducer: subreducers,
    preloadedState: initialState,
});

export default store;