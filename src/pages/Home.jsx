import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  PlayArrow,
  Dashboard,
  Security,
  Speed,
  TrendingUp,
  AutoAwesome,
} from '@mui/icons-material';
import theme from '../Theme/Theme'; // Assuming correct path
import dev2 from '../Assets/DEVD.png';
import logo from '../Assets/Box.png';
import ProjectCard from '../Component/ProjectCard';

function Home() {
  const features = [
    {
      icon: <Dashboard />,
      title: 'Smart Dashboard',
      description: 'Intuitive project overview with real-time analytics',
    },
    {
      icon: <Security />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security for your valuable projects',
    },
    {
      icon: <Speed />,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experience',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh', // Full viewport height
          width: '100%', // Full width
          background: `
            radial-gradient(ellipse at top, ${theme.palette.primary.main}15 0%, transparent 50%),
            radial-gradient(ellipse at bottom, ${theme.palette.secondary.main}10 0%, transparent 50%),
            ${theme.palette.background.default}
          `,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Center content vertically and horizontally
          py: { xs: 4, md: 8 }, // Responsive padding
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Floating Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
            filter: 'blur(20px)',
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-20px) rotate(180deg)' },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            right: '10%',
            width: '150px',
            height: '150px',
            borderRadius: '30%',
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}15, ${theme.palette.primary.main}15)`,
            filter: 'blur(25px)',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                {/* Badge */}
                <Chip
                  icon={<AutoAwesome sx={{ fontSize: '16px !important' }} />}
                  label="✨ New Features Available"
                  variant="outlined"
                  sx={{
                    mb: 3,
                    borderColor: theme.palette.primary.main,
                    bgcolor: `${theme.palette.primary.main}08`,
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    px: 2,
                  }}
                />

                {/* Main Heading */}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Build. Manage.
                  <br />
                  {/* <Box component="span" sx={{ position: 'relative' }}>
                    Lock-In
                    <Box
                      component="img"
                      src={logo}
                      alt="LOCK-IN logo"
                      sx={{
                        width: { xs: 24, sm: 28, md: 32 },
                        height: 'auto',
                        ml: 1,
                        verticalAlign: 'middle',
                        filter: `brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)`,
                      }}
                    />
                  </Box> */}
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    fontWeight: 400,
                    lineHeight: 1.6,
                    maxWidth: 500,
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  The ultimate project management platform designed for developers
                  to streamline their workflow and boost productivity.
                </Typography>

                {/* Stats */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 4,
                    mb: 4,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    flexWrap: 'wrap',
                  }}
                >
                  {[
                    { value: '10K+', label: 'Projects' },
                    { value: '5K+', label: 'Developers' },
                    { value: '99.9%', label: 'Uptime' },
                  ].map((stat, index) => (
                    <Box key={index} sx={{ textAlign: 'center', minWidth: 80 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          fontSize: { xs: '1.5rem', sm: '1.75rem' },
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* CTA Buttons */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: theme.shape.borderRadius,
                      bgcolor: theme.palette.primary.main,
                      minWidth: { xs: 160, sm: 180 },
                      boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        bgcolor: theme.palette.primary.dark,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 16px 40px ${theme.palette.primary.main}50`,
                      },
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: theme.shape.borderRadius,
                      borderWidth: 2,
                      minWidth: { xs: 160, sm: 180 },
                      borderColor: theme.palette.text.primary,
                      color: theme.palette.text.primary,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderWidth: 2,
                        bgcolor: theme.palette.text.primary,
                        color: theme.palette.background.default,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Watch Demo
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Box
                  component="img"
                  src={dev2}
                  alt="Developer workspace"
                  sx={{
                    width: '100%',
                    maxWidth: { xs: 300, sm: 400, md: 500 },
                    height: 'auto',
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: `0 25px 50px ${theme.palette.primary.main}15`,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: theme.palette.background.paper,
          width: '100%',
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Why Choose LOCK-IN?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.125rem' },
              }}
            >
              Powerful features designed to enhance your development workflow
            </Typography>
          </Box>

<Grid container spacing={2}>
  {features.map((feature, index) => (
    <Grid item xs={12} md={4} key={index}>
      <Card
        sx={{
          p: 3,
          height: '100%',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: `0 20px 40px ${theme.palette.primary.main}15`,
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <CardContent sx={{ p: 0, textAlign: 'center' }}>
          <Avatar
            sx={{
              bgcolor: `${theme.palette.primary.main}15`,
              color: theme.palette.primary.main,
              mb: 3,
              width: 60,
              height: 60,
              mx: 'auto',
            }}
          >
            {feature.icon}
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            {feature.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.6 }}
          >
            {feature.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
          width: '100%',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 6,
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 0 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Featured Projects
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Discover amazing projects from our community
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/projects"
              variant="contained"
              startIcon={<TrendingUp />}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: theme.shape.borderRadius,
                fontWeight: 600,
                minWidth: { xs: 160, sm: 180 },
              }}
            >
              View All Projects
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(auto-fit, minmax(300px, 1fr))',
                md: 'repeat(auto-fit, minmax(350px, 1fr))',
              },
              gap: 3,
              width: '100%',
            }}
          >
            <ProjectCard />
            {/* Add more ProjectCard components dynamically */}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Home;