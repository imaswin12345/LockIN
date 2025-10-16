// Profile.jsx (Clean + Integrated for Dashboard)
import React from 'react';
import { Typography, Box, Button, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import User from '../Component/Assets1/user.png';

function Profile() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        py: 2,
        px: 3,
      }}
    >
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          border: '3px solid',
          borderColor: 'primary.main',
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Profile Image */}
          <Box 
          component="label"
            sx={{
              width: 120,
              height: 120,
              mx: 'auto',
              mb: 3,
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor:'pointer'
            }}
          >
            <input type="file" id="profile" style={{ display: 'none' }} />
            <img
              src={User}
              alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>

          {/* Name */}
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              mb: 0.5,
              fontSize: '0.75rem',
            }}
          >
            Name:
          </Typography>
          <input
            placeholder="Name"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginBottom: '16px',
            }}
          />

          {/* GitHub */}
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              mb: 0.5,
              fontSize: '0.75rem',
            }}
          >
            GitHub:
          </Typography>
          <input
            placeholder="GitHub"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginBottom: '16px',
            }}
          />

          {/* LinkedIn */}
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              mb: 0.5,
              fontSize: '0.75rem',
            }}
          >
            LinkedIn:
          </Typography>
          <input
            placeholder="LinkedIn"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginBottom: '24px',
            }}
          />

          {/* Save Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              py: 1,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            SAVE
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;
