import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '7rem',
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                sx={{
                    marginBottom: '2rem',
                }}
            >
                Error 404 - Page Not Found
            </Typography>
            
            <Button
                variant="outlined"
                onClick={() => { navigate('/') }}
            >
                Go back to the homepage
            </Button>
    
        </Box>
    );
};

export default NotFound;