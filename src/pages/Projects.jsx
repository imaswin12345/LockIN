import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  IconButton, 
  Box, 
  Chip,
  Fade,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ProjectCard from '../Component/ProjectCard';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import theme from '../Theme/Theme';

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Popular technology tags
  const popularTechs = ['React', 'JavaScript', 'Python', 'Node.js', 'TypeScript', 'Vue.js'];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleTagClick = (tech) => {
    setSearchQuery(tech);
  };

  return (
    <>
      <Header />
      <Container
        sx={{
          mt: 12,
          mb: 8,
          minHeight: '100vh',
        }}
      >
        {/* Hero Section */}
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography
              variant="h1"
              sx={{ 
                mb: 2, 
                fontWeight: 700,
                color: theme.palette.primary.main,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
                letterSpacing: '-0.02em'
              }}
            >
              All Projects
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                maxWidth: 600, 
                mx: 'auto', 
                lineHeight: 1.7,
                color: '#757575',
                fontSize: { xs: '1rem', sm: '1.125rem' },
                fontWeight: 400
              }}
            >
              Discover our collection of innovative projects built with cutting-edge technologies
            </Typography>
          </Box>
        </Fade>

        {/* Enhanced Search Section */}
        <Fade in timeout={1000}>
          <Box sx={{ mb: 7 }}>
            {/* Search Bar */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: { xs: '100%', sm: '75%' },
                  maxWidth: 600,
                  bgcolor: '#ffffff',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: isSearchFocused 
                    ? '2px solid #1976d2' 
                    : '2px solid #e0e0e0',
                  boxShadow: isSearchFocused 
                    ? '0 4px 12px rgba(25, 118, 210, 0.1)' 
                    : 'none',
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search projects by technologies, frameworks, or keywords..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#757575' }} />
                      </InputAdornment>
                    ),
                    endAdornment: searchQuery && (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClearSearch}
                          size="small"
                          sx={{ 
                            mr: 1,
                            color: '#757575',
                            '&:hover': {
                              color: '#1976d2',
                              bgcolor: 'transparent'
                            }
                          }}
                        >
                          <ClearIcon fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
                    '& .MuiInputBase-input': {
                      py: 1.75,
                      fontSize: '1rem'
                    }
                  }}
                />
              </Box>
            </Box>

            {/* Popular Technologies Tags */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                  justifyContent: 'center',
                  maxWidth: 600,
                  alignItems: 'center'
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ 
                    color: '#757575',
                    fontWeight: 500,
                    fontSize: '0.9375rem'
                  }}
                >
                  Popular:
                </Typography>
                {popularTechs.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                    size="medium"
                    clickable
                    onClick={() => handleTagClick(tech)}
                    sx={{
                      borderColor: '#e0e0e0',
                      color: '#212121',
                      fontWeight: 500,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: '#1976d2',
                        color: '#ffffff',
                        borderColor: '#1976d2',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Fade>

        {/* Projects Grid */}
        <Fade in timeout={1200}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <ProjectCard />
            </Grid>
            {/* Add more ProjectCard components as needed */}
            {/* <Grid item xs={12} sm={6} md={4}>
              <ProjectCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProjectCard />
            </Grid> */}
          </Grid>
        </Fade>

        {/* Empty State (show when no projects match search) */}
        {searchQuery && (
          <Fade in timeout={300}>
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
              }}
            >
              <Typography
                variant="h5"
                sx={{ 
                  mb: 2,
                  color: '#212121',
                  fontWeight: 600,
                  fontSize: '1.5rem'
                }}
              >
                No projects found for "{searchQuery}"
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  mb: 3,
                  color: '#757575',
                  fontSize: '1rem'
                }}
              >
                Try searching for different technologies or browse all projects
              </Typography>
              <Chip
                label="Clear Search"
                onClick={handleClearSearch}
                sx={{ 
                  cursor: 'pointer',
                  bgcolor: '#1976d2',
                  color: '#ffffff',
                  fontWeight: 600,
                  px: 2,
                  py: 2.5,
                  fontSize: '0.9375rem',
                  '&:hover': {
                    bgcolor: '#115293'
                  }
                }}
              />
            </Box>
          </Fade>
        )}
      </Container>

      <Footer/>
    </>
  );
}

export default Projects;