// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './slices/courseSlice';

export default configureStore({
  reducer: {
    courses: coursesReducer,
  },
});
