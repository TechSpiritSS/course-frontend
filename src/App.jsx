import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './context/store';
import CourseListingPage from './components/CourseListingPage';
import CourseDetailsPage from './components/CourseDetailsPage';
import Navbar from './components/Navbar';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
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
  );
}

export default App;

