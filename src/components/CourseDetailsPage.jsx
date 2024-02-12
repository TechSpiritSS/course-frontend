import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardHeader,
  CardMedia,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { enrollCourse } from '../context/slices/courseSlice';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const selectedCourse = useSelector((state) =>
    state.courses.courses.find((course) => course.id === parseInt(id))
  );
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const dispatch = useDispatch();

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  const isEnrolled = enrolledCourses.some(
    (course) => course.id === selectedCourse.id
  );

  const handleEnroll = () => {
    dispatch(enrollCourse(selectedCourse));
  };

  return (
    <Container
      sx={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        color: '#fff',
        fontFamily: 'Comic Sans MS, cursive, sans-serif',
      }}
    >
      <div style={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          {selectedCourse.name}
        </Typography>
        <Card
          variant="outlined"
          sx={{
            border: '1px solid #fff',
            borderRadius: '10px',
          }}
        >
          <CardContent>
            <Typography variant="h5">
              Instructor: {selectedCourse.instructor}
            </Typography>
            <Typography variant="body1">
              Description: {selectedCourse.description}
              <br /> Enrollment Status: {selectedCourse.enrollmentStatus}
              <br /> Duration: {selectedCourse.duration}
              <br /> Schedule: {selectedCourse.schedule}
              <br />
              Location: {selectedCourse.location}
              <br />
              Prerequisites:
            </Typography>
            <Card
              variant="outlined"
              sx={{
                marginBottom: '10px',
              }}
            >
              <CardContent>
                <List
                  sx={{
                    margin: '0px',
                    padding: '0px',
                  }}
                >
                  {selectedCourse.prerequisites.map((prerequisite, index) => (
                    <ListItem
                      sx={{
                        margin: '0px',
                        padding: '0px',
                      }}
                      key={index}
                    >
                      <ListItemText primary={prerequisite} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
            <Typography variant="body1">Syllabus:</Typography>
            <Accordion
              sx={{
                marginBottom: '10px',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1">View Syllabus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {selectedCourse.syllabus.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={`Week ${item.week}: ${item.topic}`}
                        secondary={item.content}
                      />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
            {isEnrolled ? (
              <Typography variant="h6" color="success">
                You are already enrolled in this course
              </Typography>
            ) : selectedCourse.enrollmentStatus === 'Open' ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleEnroll}
                sx={{
                  borderRadius: '20px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  marginTop: '10px',
                }}
              >
                Enroll Now!
              </Button>
            ) : (
              <Typography variant="body1" color="error">
                Enrollment Closed
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
      <div style={{ flex: 1 }}>
        <Card variant="outlined">
          <CardHeader title="Course Thumbnail" />
          <CardContent>
            <CardMedia
              src={selectedCourse.thumbnail}
              component="img"
              alt="Course Thumbnail"
              sx={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover',
              }}
            />
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default CourseDetailsPage;
