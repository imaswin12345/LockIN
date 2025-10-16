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
  liveUrl = 'https://video-app1.vercel.app/',
  image = viddeo,
  category = 'Web Application',
  featured = false,
}) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          maxWidth: 350,
          mx: 'auto',
          mb: 3,
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          bgcolor: '#ffffff',
          border: '1px solid #e0e0e0',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(25, 118, 210, 0.12)',
            borderColor: '#1976d2',
          },
        }}
        onClick={handleOpen}
        role="button"
        aria-label={`Open ${title} project details`}
      >
        {featured && (
          <Chip
            label="Featured"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              bgcolor: '#1976d2',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.75rem',
              zIndex: 1,
              boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)',
            }}
          />
        )}
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={`${title} preview`}
          sx={{
            objectFit: 'cover',
            bgcolor: '#fafafa',
          }}
        />
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{ 
              fontWeight: 600, 
              fontSize: '1.125rem', 
              mb: 1.5,
              color: '#212121',
              lineHeight: 1.3
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: '#757575',
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {technologies.slice(0, 3).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  bgcolor: '#f5f5f5',
                  color: '#212121',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  border: '1px solid #e0e0e0',
                  height: 24,
                }}
              />
            ))}
            {technologies.length > 3 && (
              <Chip
                label={`+${technologies.length - 3}`}
                size="small"
                sx={{
                  bgcolor: '#f5f5f5',
                  color: '#757575',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  border: '1px solid #e0e0e0',
                  height: 24,
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
          sx: { 
            backdropFilter: 'blur(8px)', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)' 
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: '#ffffff',
              borderRadius: 2,
              p: { xs: 3, md: 4 },
              maxWidth: { xs: '90%', md: 750 },
              width: '100%',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              border: '1px solid #e0e0e0',
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                color: '#757575',
                bgcolor: '#f5f5f5',
                '&:hover': { 
                  color: '#212121',
                  bgcolor: '#e0e0e0'
                },
              }}
              aria-label="Close modal"
            >
              <CloseIcon />
            </IconButton>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={image}
                  alt={`${title} project preview`}
                  sx={{
                    width: '100%',
                    height: { xs: 220, md: 280 },
                    objectFit: 'cover',
                    borderRadius: 2,
                    border: '1px solid #e0e0e0',
                    bgcolor: '#fafafa',
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 2,
                    color: '#212121',
                    fontSize: '1.5rem',
                    lineHeight: 1.3
                  }}
                >
                  {title}
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3, 
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#757575'
                  }}
                >
                  {fullDescription}
                </Typography>

                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1.5,
                    color: '#212121',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  Technologies
                </Typography>

                <Stack 
                  direction="row" 
                  spacing={1} 
                  flexWrap="wrap" 
                  useFlexGap 
                  sx={{ mb: 3 }}
                >
                  {technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: '#f5f5f5',
                        color: '#212121',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        border: '1px solid #e0e0e0',
                        height: 28,
                      }}
                    />
                  ))}
                </Stack>

                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={1.5}
                  sx={{ mt: 3 }}
                >
                  <Button
                    variant="contained"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                    sx={{ 
                      fontWeight: 600, 
                      textTransform: 'none', 
                      borderRadius: 2,
                      bgcolor: '#1976d2',
                      color: '#ffffff',
                      boxShadow: 'none',
                      py: 1.25,
                      px: 3,
                      fontSize: '0.9375rem',
                      '&:hover': {
                        bgcolor: '#115293',
                        boxShadow: 'none'
                      }
                    }}
                  >
                    View Code
                  </Button>
                  <Button
                    variant="outlined"
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkIcon />}
                    sx={{
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 2,
                      borderColor: '#e0e0e0',
                      color: '#212121',
                      py: 1.25,
                      px: 3,
                      fontSize: '0.9375rem',
                      '&:hover': { 
                        borderColor: '#1976d2',
                        color: '#1976d2',
                        bgcolor: 'transparent'
                      },
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