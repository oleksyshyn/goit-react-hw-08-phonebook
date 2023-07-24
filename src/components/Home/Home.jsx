import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/index";
import backgroundImage from "../Image/background-image.jpg";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Home = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const handleButton = () => {
        if (isLoggedIn) {
            navigate('/contacts');
        } else {
            navigate('/login');
        }
    }

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#010101',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <Box
                sx={{
                marginTop: '10rem',
                
            }}
            >
                <Button variant="contained" size="large" onClick={handleButton}>Get started</Button>
            </Box>
        </div>
    )
}

export default Home;