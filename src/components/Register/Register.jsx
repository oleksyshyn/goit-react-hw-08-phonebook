import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { register } from "redux/auth/operations"; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (event) => {
        event.preventDefault();

        if (!name || !email || !password) {
            setError('Please fill all fields');
            return;
        }
        try {
            await dispatch(register({ name, email, password }));
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setError('An error occurred. Please try again later.');
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
            <Typography variant="h4" component="h2">Register</Typography>

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
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    label="Name"
                    required
                    onChange={(event) => setName(event.target.value)}
                />
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
                    value={password}
                    label="Password"
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
                    <Button type="submit" variant="contained" onClick={handleRegister} >Register</Button>
                    <Button variant="outlined" onClick={() => { navigate('/login') }}>Go to login page</Button>
                </Box>
                
            </Box>
            
        </Box>
    )
}

export default Register;