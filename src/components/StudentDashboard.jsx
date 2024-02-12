import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  LinearProgress,
} from '@mui/material';
import {
  removeCourse,
  markCourseAsComplete,
} from '../context/slices/courseSlice';

const StudentDashboard = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const enrolledCourses = useSelector((state) =>
    state.courses.enrolledCourses.filter((course) => !course.completed)
  );
  const completedCourses = useSelector((state) =>
    state.courses.enrolledCourses.filter((course) => course.completed)
  );
  const dispatch = useDispatch();

  const handleRemoveCourse = (id) => {
    dispatch(removeCourse(id));
  };

  const handleMarkComplete = (id) => {
    dispatch(markCourseAsComplete(id));
  };

  const calcDueDate = (duration) => {
    const today = new Date();
    const dueDate = new Date(today);
    dueDate.setDate(dueDate.getDate() + duration);
    return dueDate.toDateString();
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        My Courses
      </Typography>
      <List>
        {enrolledCourses.map((course) => (
          <div key={course.id}>
            <ListItem>
              <ListItemText
                primary={course.name}
                secondary={
                  <>
                    Instructor: {course.instructor}
                    <br />
                    Due Date: {calcDueDate(course.dueDays)}
                  </>
                }
              />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ marginRight: '10px' }}>
                  {course.progress}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={course.progress}
                  style={{ width: '150px' }}
                />
                <Button
                  variant="outlined"
                  onClick={() => handleMarkComplete(course.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Mark as Complete
                </Button>
                <Button
                  color="error"
                  sx={{ marginLeft: '10px' }}
                  onClick={() => handleRemoveCourse(course.id)}
                >
                  Remove
                </Button>
              </div>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={() => setShowCompleted(!showCompleted)}
        style={{ marginTop: '20px' }}
      >
        {showCompleted ? 'Hide Completed Courses' : 'Show Completed Courses'}
      </Button>
      {showCompleted && completedCourses.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
            Completed Courses
          </Typography>
          <List>
            {completedCourses.map((course) => (
              <div key={course.id}>
                <ListItem>
                  <ListItemText
                    primary={course.name}
                    secondary={`Instructor: ${course.instructor}`}
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default StudentDashboard;
