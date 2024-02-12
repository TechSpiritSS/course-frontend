// src/features/coursesSlice.js

import { createSlice } from '@reduxjs/toolkit';
import sampleCourses from '../../sample';

const initialState = {
  courses: sampleCourses, // Initial state for courses
  enrolledCourses: [], // Initial state for enrolled courses
  selectedCourse: null, // Initial state for selected course
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    selectCourse(state, action) {
      state.selectedCourse = action.payload;
    },
    enrollCourse(state, action) {
      state.enrolledCourses.push(action.payload);
    },
    removeCourse(state, action) {
      state.enrolledCourses = state.enrolledCourses.filter(
        (course) => course.id !== action.payload
      );
    },
    markCourseAsComplete(state, action) {
      const courseIndex = state.enrolledCourses.findIndex(
        (course) => course.id === action.payload
      );
      if (courseIndex !== -1) {
        state.enrolledCourses[courseIndex].completed = true;
      }
    },
  },
});

export const {
  setCourses,
  selectCourse,
  enrollCourse,
  removeCourse,
  markCourseAsComplete,
} = coursesSlice.actions;
export default coursesSlice.reducer;
