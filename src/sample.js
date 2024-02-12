const sampleCourses = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description:
      'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/150',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    progress: 50,
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content:
          'Overview of React Native, setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.',
      },
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
      },
    ],
  },
  {
    id: 2,
    name: 'Advanced JavaScript Concepts',
    instructor: 'Jane Smith',
    description:
      'Deep dive into advanced JavaScript concepts such as closures, prototypes, and async programming.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/150',
    duration: '10 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM-9:00 PM',
    location: 'Online',
    prerequisites: ['Intermediate JavaScript knowledge'],
    progress: 75,
    syllabus: [
      {
        week: 1,
        topic: 'Closures',
        content: 'Understanding lexical scope and closure mechanism.',
      },
      {
        week: 2,
        topic: 'Prototypes',
        content: 'Prototypal inheritance and object prototypes in JavaScript.',
      },
    ],
    students: [
      {
        id: 103,
        name: 'Charlie Brown',
        email: 'charlie@example.com',
      },
      {
        id: 104,
        name: 'Daisy Johnson',
        email: 'daisy@example.com',
      },
    ],
  },
  {
    id: 3,
    name: 'Python for Data Science',
    instructor: 'Michael Smith',
    description:
      'Comprehensive course covering Python programming for data science applications.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/150',
    duration: '12 weeks',
    schedule: 'Fridays, 5:00 PM-7:00 PM',
    location: 'Online',
    prerequisites: ['Basic Python knowledge'],
    progress: 30,
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Python',
        content: 'Basic syntax and data types in Python.',
      },
      {
        week: 2,
        topic: 'Data Manipulation with Pandas',
        content: 'Using the Pandas library for data manipulation and analysis.',
      },
    ],
    students: [
      {
        id: 105,
        name: 'Eva Martinez',
        email: 'eva@example.com',
      },
      {
        id: 106,
        name: 'Frank Johnson',
        email: 'frank@example.com',
      },
    ],
  },
  {
    id: 4,
    name: 'Web Development with React',
    instructor: 'Sarah Johnson',
    description:
      'Learn modern web development with React framework, including state management and routing.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/150',
    duration: '10 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
    location: 'Online',
    prerequisites: ['Basic HTML, CSS, and JavaScript knowledge'],
    progress: 90,
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React',
        content: 'Understanding React components and JSX syntax.',
      },
      {
        week: 2,
        topic: 'State Management with Redux',
        content: 'Using Redux for state management in React applications.',
      },
    ],
    students: [
      {
        id: 107,
        name: 'George Miller',
        email: 'george@example.com',
      },
      {
        id: 108,
        name: 'Hannah White',
        email: 'hannah@example.com',
      },
    ],
  },
  {
    id: 5,
    name: 'Machine Learning Fundamentals',
    instructor: 'David Brown',
    description:
      'Introduction to machine learning concepts and algorithms, including supervised and unsupervised learning.',
    enrollmentStatus: 'Open',

    thumbnail: 'https://via.placeholder.com/150',
    duration: '10 weeks',
    schedule: 'Wednesdays, 5:00 PM-7:00 PM',
    location: 'Online',
    prerequisites: [
      'Basic Python knowledge',
      'Understanding of basic statistics',
    ],
    progress: 40,
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Machine Learning',
        content: 'Basic concepts of machine learning and its applications.',
      },
      {
        week: 2,
        topic: 'Linear Regression',
        content: 'Understanding linear regression and its implementation.',
      },
    ],
    students: [
      {
        id: 109,
        name: 'Ivy Lee',
        email: 'ivy@example.com',
      },
      {
        id: 110,
        name: 'Jack Davis',
        email: 'jack@example.com',
      },
    ],
  },
  {
    id: 6,
    name: 'Digital Marketing Essentials',
    instructor: 'Emily Taylor',
    description:
      'Comprehensive course covering digital marketing strategies, SEO, social media, and content marketing.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/150',
    duration: '8 weeks',
    schedule: 'Mondays and Fridays, 10:00 AM-12:00 PM',
    location: 'Online',
    prerequisites: ['None'],
    progress: 20,
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing channels and strategies.',
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Understanding search engine optimization fundamentals.',
      },
    ],
    students: [
      {
        id: 111,
        name: 'Kevin Wilson',
        email: 'kevin@example.com',
      },
      {
        id: 112,
        name: 'Linda Clark',
        email: 'linda@example.com',
      },
    ],
  },
  {
    id: 7,
    name: 'Introduction to Data Structures',
    instructor: 'Christopher Lee',
    description:
      'Fundamental concepts of data structures including arrays, linked lists, stacks, and queues.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/150',
    duration: '6 weeks',
    schedule: 'Thursdays, 7:00 PM-9:00 PM',
    location: 'Online',
    prerequisites: ['Basic programming knowledge'],
    progress: 60,
    syllabus: [
      {
        week: 1,
        topic: 'Arrays and Lists',
        content: 'Introduction to arrays and linked lists data structures.',
      },
      {
        week: 2,
        topic: 'Stacks and Queues',
        content:
          'Understanding stack and queue data structures and their applications.',
      },
    ],
    students: [
      {
        id: 113,
        name: 'Mia Garcia',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Nathan Adams',
        email: 'nathan@example.com',
      },
    ],
  },
  {
    id: 8,
    name: 'Mobile App Design',
    instructor: 'Olivia Anderson',
    description:
      'Learn the principles of mobile app design, user experience (UX), and user interface (UI) design.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/150',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
    location: 'Online',
    prerequisites: ['Basic design knowledge'],
    progress: 80,
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Mobile Design',
        content: 'Understanding the fundamentals of mobile app design.',
      },
      {
        week: 2,
        topic: 'User Experience (UX) Design',
        content:
          'Designing intuitive and user-friendly interfaces for mobile apps.',
      },
    ],
    students: [
      {
        id: 115,
        name: 'Oliver Brown',
        email: 'oliver@example.com',
      },
      {
        id: 116,
        name: 'Penelope Wilson',
        email: 'penelope@example.com',
      },
    ],
  },
  {
    id: 9,
    name: 'Frontend Web Development Bootcamp',
    instructor: 'Robert Johnson',
    description:
      'Intensive bootcamp covering modern frontend web development technologies such as HTML5, CSS3, JavaScript, and React.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/150',
    duration: '12 weeks',
    schedule: 'Mondays, Wednesdays, and Fridays, 6:00 PM-8:00 PM',
    location: 'Online',
    prerequisites: ['Basic HTML, CSS, and JavaScript knowledge'],
    progress: 70,
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to HTML5',
        content:
          'Understanding the structure and syntax of HTML5 markup language.',
      },
      {
        week: 2,
        topic: 'Styling with CSS3',
        content:
          'Introduction to cascading style sheets (CSS) and its styling capabilities.',
      },
    ],
    students: [
      {
        id: 117,
        name: 'Quinn Roberts',
        email: 'quinn@example.com',
      },
      {
        id: 118,
        name: 'Rachel Evans',
        email: 'rachel@example.com',
      },
    ],
  },
  {
    id: 10,
    name: 'Artificial Intelligence Fundamentals',
    instructor: 'Sophia Taylor',
    description:
      'Comprehensive course covering the fundamentals of artificial intelligence, including machine learning, neural networks, and natural language processing.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://via.placeholder.com/150',
    duration: '14 weeks',
    schedule: 'Saturdays, 10:00 AM-12:00 PM',
    location: 'Online',
    prerequisites: [
      'Basic Python knowledge',
      'Understanding of linear algebra',
    ],
    progress: 10,
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Artificial Intelligence',
        content: 'Overview of artificial intelligence and its subfields.',
      },
      {
        week: 2,
        topic: 'Machine Learning Algorithms',
        content:
          'Understanding different types of machine learning algorithms.',
      },
    ],
    students: [
      {
        id: 119,
        name: 'Samuel Davis',
        email: 'samuel@example.com',
      },
      {
        id: 120,
        name: 'Tina Rodriguez',
        email: 'tina@example.com',
      },
    ],
  },
];

export default sampleCourses;
