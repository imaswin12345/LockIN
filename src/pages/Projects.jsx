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
          mb: 5,
          minHeight: '100vh',
        }}
      >
        {/* Hero Section */}
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h1"
              color="text.primary"
              sx={{ 
                mb: 2, 
                fontWeight: 600,
                background: 'linear-gradient(45deg, #1976d2, #d81b60)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              All Projects
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
            >
              Discover our collection of innovative projects built with cutting-edge technologies
            </Typography>
          </Box>
        </Fade>

        {/* Enhanced Search Section */}
        <Fade in timeout={1000}>
          <Box sx={{ mb: 6 }}>
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
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: isSearchFocused 
                    ? '0px 8px 24px rgba(25, 118, 210, 0.15)' 
                    : '0px 2px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: isSearchFocused 
                    ? '2px solid rgba(25, 118, 210, 0.3)' 
                    : '2px solid transparent',
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
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: searchQuery && (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClearSearch}
                          size="small"
                          sx={{ mr: 1 }}
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 3,
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
                  gap: 1,
                  justifyContent: 'center',
                  maxWidth: 600,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ 
                    alignSelf: 'center', 
                    mr: 1,
                    minWidth: 'fit-content'
                  }}
                >
                  Popular:
                </Typography>
                {popularTechs.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                    size="small"
                    clickable
                    onClick={() => handleTagClick(tech)}
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-1px)',
                        boxShadow: '0px 2px 8px rgba(25, 118, 210, 0.3)',
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
          <Grid container spacing={4} justifyContent="center">
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
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                No projects found for "{searchQuery}"
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Try searching for different technologies or browse all projects
              </Typography>
              <Chip
                label="Clear Search"
                color="primary"
                onClick={handleClearSearch}
                sx={{ cursor: 'pointer' }}
              />
            </Box>
          </Fade>
        )}
      </Container>
    </>
  );
}

export default Projects;