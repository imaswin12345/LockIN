import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../Component/Footer';
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
import theme from '../Theme/Theme';
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
          minHeight: '100vh',
          width: '100%',
          bgcolor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 6, md: 10 },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                {/* Badge */}
                <Chip
                  icon={<AutoAwesome sx={{ fontSize: '16px !important' }} />}
                  label="New Features Available"
                  sx={{
                    mb: 3,
                    borderColor: '#1976d2',
                    border: '1px solid #1976d2',
                    bgcolor: '#ffffff',
                    color: '#1976d2',
                    fontWeight: 500,
                    px: 2,
                  }}
                />

                {/* Main Heading */}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 3,
                    color: '#212121',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Build. Manage.
                  <br />
                  <Box component="span" sx={{ color: '#1976d2' }}>
                    Succeed.
                  </Box>
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant="body1"
                  sx={{
                    mb: 5,
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: '#757575',
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
                    gap: 5,
                    mb: 5,
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
                          color: '#1976d2',
                          fontSize: { xs: '1.5rem', sm: '1.75rem' },
                          mb: 0.5,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#757575',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      >
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
                      borderRadius: 2,
                      bgcolor: '#1976d2',
                      color: '#ffffff',
                      minWidth: { xs: 200, sm: 200 },
                      boxShadow: 'none',
                      textTransform: 'none',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: '#115293',
                        boxShadow: 'none',
                        transform: 'translateY(-1px)',
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
                      borderRadius: 2,
                      minWidth: { xs: 200, sm: 200 },
                      borderColor: '#e0e0e0',
                      color: '#212121',
                      textTransform: 'none',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: '#1976d2',
                        bgcolor: 'transparent',
                        color: '#1976d2',
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
                    borderRadius: 2,
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
          marginRight:12,
          marginLeft:12,
          py: { xs: 6, md: 12 },
          bgcolor: '#fafafa',
          width: '100%',
        }}
      >
        <Container maxWidth="xlg">
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 700,
                marginLeft:-23,
          
                mb: 2,
                color: '#212121',
              }}
            >
              Why Choose LOCK-IN?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: '#757575',
               marginLeft:42,
                lineHeight: 1.7,
              }}
            >
              Powerful features designed to enhance your development workflow
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(25, 118, 210, 0.12)',
                      borderColor: '#1976d2',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        bgcolor: '#1976d2',
                        color: '#ffffff',
                        mb: 3,
                        width: 64,
                        height: 64,
                        mx: 'auto',
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        mb: 2,
                        color: '#212121',
                        fontSize: '1.25rem',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        lineHeight: 1.7,
                        color: '#757575',
                        fontSize: '0.9375rem',
                      }}
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
          py: { xs: 8, md: 12 },
          bgcolor: '#ffffff',
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
                  color: '#212121',
                }}
              >
                Featured Projects
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#757575',
                  fontSize: '1.0625rem',
                }}
              >
                Discover amazing projects from our community
              </Typography>
            </Box>
            <Button
              component={RouterLink}
              to="/projects"
              variant="contained"
              startIcon={<TrendingUp />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                minWidth: { xs: 180, sm: 200 },
                bgcolor: '#1976d2',
                color: '#ffffff',
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: '#115293',
                  boxShadow: 'none',
                  transform: 'translateY(-1px)',
                },
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
          </Box>
        </Container>
      </Box>
         <Footer/>
    </ThemeProvider>
    
  );
}

export default Home;