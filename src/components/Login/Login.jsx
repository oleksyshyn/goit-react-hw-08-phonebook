import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { logIn } from "redux/auth/operations";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        await dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '5rem',
                
            }}
        >
            <Typography variant="h4" component="h2">Login</Typography>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '1rem',
                width: '100%',
                maxWidth: '500px',
                '& .MuiTextField-root': {
                        marginBottom: '1rem',
                    },
                }}
            >
                <TextField
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}
                    gap={2}
                >
                    <Button variant="contained" onClick={handleLogin}>Login</Button>
                    <Button variant="outlined" onClick={() => { navigate('/register') }}>Go to register page</Button>
                </Box>
                
            </Box>
            
        </Box>
    )
}

export default Login;