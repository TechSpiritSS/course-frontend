import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from '@mui/material';
import { Search } from '@mui/icons-material';

const CourseListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const courses = useSelector((state) => state.courses.courses);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <TextField
        fullWidth
        margin="normal"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: <Search />,
        }}
      />
      <Grid container spacing={2}>
        {filteredCourses.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Link
              to={`/courses/${course.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={course.thumbnail}
                  alt={course.name}
                  sx={{ objectFit: 'fill' }}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {course.name}
                  </Typography>
                  <Typography variant="body1">{course.instructor}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseListingPage;
