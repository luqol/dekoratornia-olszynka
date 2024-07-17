import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import galleryReducer from './galerryRedux';

const subreducers = {
    gallery: galleryReducer,
};

const store = configureStore({
    reducer: subreducers,
    preloadedState: initialState,
});

export default store;