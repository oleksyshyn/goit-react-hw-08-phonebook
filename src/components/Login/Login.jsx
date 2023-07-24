import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { logIn } from "redux/auth/operations";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Please fill all fields');
            return;
        }
        try {
            await dispatch(logIn({ email, password }));

            setEmail('');
            setPassword('');
        } catch (error) {
            setError('Invalid email or password');
        }
        
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

            {error && (
                <Alert severity="error">{error}</Alert>
            )}

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
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    label="Email"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    label="Password"
                    value={password}
                    required
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
                    <Button variant="contained" type="submit" onClick={handleLogin}>Login</Button>
                    <Button variant="outlined" onClick={() => { navigate('/register') }}>Go to register page</Button>
                </Box>
                
            </Box>
            
        </Box>
    )
}

export default Login;