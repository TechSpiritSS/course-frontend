import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './context/store';
import CourseListingPage from './components/CourseListingPage';
import CourseDetailsPage from './components/CourseDetailsPage';
import Navbar from './components/Navbar';
import StudentDashboard from './components/StudentDashboard';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Define custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  shape: {
    borderRadius: 25,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<CourseListingPage />} />
            <Route path="/courses/:id" element={<CourseDetailsPage />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

