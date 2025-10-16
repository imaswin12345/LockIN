import React from 'react';
import { Link } from 'react-router-dom';
import Log from '../Assets/Login11.png';
import Box from '../Assets/Box.png';

// MUI Imports
import { 
    Container, 
    Paper, 
    Box as MuiBox, 
    Typography, 
    TextField, 
    Button, 
    Link as MuiLink,
    Avatar,
    InputAdornment,
    Divider
} from '@mui/material';

// MUI Icon Imports
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

/**
 * @param {object} props
 * @param {boolean} props.register - Flag to switch between register and login form.
 */
function Auth({ register }) {
    const isRegisterForm = Boolean(register);

    return (
        <MuiBox 
            sx={{ 
                width: '100%', 
                minHeight: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                backgroundColor: '#fafafa',
                py: 4
            }}
        >
            <Container maxWidth="xs">
                
                {/* Back to Home Link */}
                <MuiLink 
                    component={Link} 
                    to={'/'} 
                    sx={{ 
                        textDecoration: 'none', 
                        color: '#1976d2', 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 3, 
                        fontWeight: 500,
                        fontSize: '0.9375rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                            color: '#115293'
                        }
                    }}
                >
                    <ArrowBackIcon fontSize="small" sx={{ mr: 0.5 }} /> 
                    Back to Home
                </MuiLink>

                {/* Main Card/Paper */}
                <Paper 
                    elevation={0}
                    sx={{ 
                        p: { xs: 4, sm: 5 },
                        borderRadius: 2, 
                        backgroundColor: '#ffffff',
                        border: '1px solid #e0e0e0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {/* Profile Avatar */}
                    <Avatar 
                        alt="User Avatar" 
                        src={Log}
                        sx={{ 
                            width: 80, 
                            height: 80, 
                            mb: 3,
                            border: '3px solid #1976d2',
                            boxShadow: 'none'
                        }} 
                    />

                    {/* Logo and App Name */}
                    <MuiBox sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <MuiBox
                            component="img"
                            src={Box}
                            alt="Logo"
                            sx={{ 
                                width: '32px',
                                height: 'auto', 
                                mr: 1.5
                            }}
                        />
                        <Typography 
                            variant="h5"
                            component="h1" 
                            fontWeight="700"
                            sx={{ color: '#212121', letterSpacing: '-0.01em' }}
                        >
                            LOCK-IN
                        </Typography>
                    </MuiBox>

                    {/* Form Header */}
                    <Typography 
                        variant="h6"
                        fontWeight="600"
                        sx={{ 
                            mt: 1, 
                            mb: 4, 
                            color: '#757575', 
                            textAlign: 'center',
                            fontSize: '1rem',
                            textTransform: 'none'
                        }}
                    >
                        {isRegisterForm ? 'Create Your Account' : 'Sign in to Your Account'}
                    </Typography>

                    {/* Form Fields Container */}
                    <MuiBox component="form" noValidate sx={{ width: '100%' }}>
                        
                        {/* Username Field (Register Only) */}
                        {isRegisterForm && (
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Username"
                                name="username"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonOutlineIcon sx={{ color: '#757575', fontSize: '1.25rem' }} />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ 
                                    mb: 2.5,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        '& fieldset': {
                                            borderColor: '#e0e0e0',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#1976d2',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#1976d2',
                                            borderWidth: '2px',
                                        },
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#1976d2',
                                    }
                                }}
                            />
                        )}
                        
                        {/* Email Field */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon sx={{ color: '#757575', fontSize: '1.25rem' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ 
                                mb: 2.5,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#1976d2',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1976d2',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#1976d2',
                                }
                            }}
                        />
                        
                        {/* Password Field */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon sx={{ color: '#757575', fontSize: '1.25rem' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ 
                                mb: 3,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#1976d2',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1976d2',
                                        borderWidth: '2px',
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#1976d2',
                                }
                            }}
                        />

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ 
                                mt: 1, 
                                mb: 2, 
                                py: 1.5,
                                backgroundColor: '#1976d2', 
                                color: '#ffffff',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#115293',
                                    boxShadow: 'none'
                                },
                                borderRadius: 2,
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '1rem',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {isRegisterForm ? 'Create Account' : 'Sign In'}
                        </Button>

                        {/* Divider */}
                        <Divider sx={{ my: 3, borderColor: '#e0e0e0' }} />

                        {/* Toggle Link */}
                        <MuiBox sx={{ textAlign: 'center' }}>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: '#757575',
                                    fontSize: '0.9375rem'
                                }}
                            >
                                {isRegisterForm ? 'Already have an account? ' : "Don't have an account? "}
                                <MuiLink 
                                    component={Link} 
                                    to={isRegisterForm ? '/login' : '/register'} 
                                    sx={{ 
                                        color: '#1976d2', 
                                        textDecoration: 'none', 
                                        fontWeight: 600,
                                        transition: 'color 0.2s ease',
                                        '&:hover': { 
                                            color: '#115293',
                                            textDecoration: 'underline' 
                                        }
                                    }}
                                >
                                    {isRegisterForm ? 'Sign in' : 'Create account'}
                                </MuiLink>
                            </Typography>
                        </MuiBox>
                    </MuiBox>
                </Paper>

                {/* Footer Text */}
                <Typography 
                    variant="caption" 
                    sx={{ 
                        display: 'block',
                        textAlign: 'center',
                        mt: 3,
                        color: '#757575'
                    }}
                >
                    Protected by enterprise-grade security
                </Typography>
            </Container>
        </MuiBox>
    );
}

export default Auth;