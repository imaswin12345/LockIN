import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  Box,
  Grid,
  Button,
  IconButton,
  Chip,
  Stack,
  Fade,
  Backdrop,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
import viddeo from '../Assets/viddeo.png';

function ProjectCard({
  title = 'VIDDEO (Media Player)',
  description = 'A sleek and responsive media player application.',
  fullDescription = 'VIDDEO is a modern media player web app designed for seamless video playback, offering an intuitive interface and robust functionality for developers and users alike.',
  technologies = ['HTML', 'CSS', 'React'],
  githubUrl = 'https://github.com/imaswin12345/VideoApp',
  liveUrl = 'https://melodic-rugelach-91e78d.netlify.app/',
  image = viddeo,
  category = 'Web Application',
  featured = false,
}) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getTechColor = (tech) => {
    const colors = {
      React: '#61DAFB',
      JavaScript: '#F7DF1E',
      HTML: '#E34F26',
      CSS: '#1572B6',
      'Node.js': '#339933',
      Python: '#3776AB',
      TypeScript: '#3178C6',
      'Vue.js': '#4FC08D',
      MongoDB: '#47A248',
      Express: '#000000',
      Angular: '#DD0031',
      Bootstrap: '#7952B3',
    };
    return colors[tech] || theme.palette.primary.main;
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 320,
          mx: 'auto',
          mb: 3,
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'pointer',
          bgcolor: 'background.paper',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
          },
        }}
        onClick={handleOpen}
        role="button"
        aria-label={`Open ${title} project details`}
      >
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={`${title} preview`}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
        <CardContent sx={{ p: 2 }}>
          {featured && (
            <Chip
              label="Featured"
              size="small"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                bgcolor: '#ff6b35',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.7rem',
              }}
            />
          )}
          <Typography
            variant="h6"
            color="text.primary"
            sx={{ fontWeight: 600, fontSize: '1rem', mb: 1 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: '0.85rem',
              lineHeight: 1.4,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>
          <Stack direction="row" spacing={0.8} sx={{ mt: 1.5 }} flexWrap="wrap" useFlexGap>
            {technologies.slice(0, 3).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  bgcolor: `${getTechColor(tech)}15`,
                  color: getTechColor(tech),
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  height: 20,
                }}
              />
            ))}
            {technologies.length > 3 && (
              <Chip
                label={`+${technologies.length - 3}`}
                size="small"
                sx={{
                  bgcolor: 'action.hover',
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  height: 20,
                }}
              />
            )}
          </Stack>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: { backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.4)' },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 2,
              p: { xs: 2, md: 3 },
              maxWidth: { xs: '90%', md: 700 },
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              mx: 'auto',
              my: 2,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'text.secondary',
                '&:hover': { color: 'text.primary' },
              }}
              aria-label="Close modal"
            >
              <CloseIcon />
            </IconButton>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={image}
                  alt={`${title} project preview`}
                  sx={{
                    width: '100%',
                    height: { xs: 200, md: 240 },
                    objectFit: 'cover',
                    borderRadius: 1,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" color="text.primary" sx={{ fontWeight: 600, mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.9rem' }}>
                  {fullDescription}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                  Technologies
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                  {technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: `${getTechColor(tech)}15`,
                        color: getTechColor(tech),
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    sx={{ fontWeight: 600, textTransform: 'none', borderRadius: 1 }}
                  >
                    View Code
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkIcon />}
                    sx={{
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 1,
                      borderWidth: 2,
                      '&:hover': { borderWidth: 2 },
                    }}
                  >
                    Live Demo
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default ProjectCard;