import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { register } from "redux/auth/operations"; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister =  () => {
        dispatch(register({ name, email, password }));
        console.log(name, email, password);
        setName('');
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
            <Typography variant="h4" component="h2">Register</Typography>
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
                    type="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    type="email"
                    placeholder="Enter your email"
                    alue={email}
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
                    <Button variant="contained" onClick={handleRegister} >Register</Button>
                    <Button variant="outlined" onClick={() => { navigate('/login') }}>Go to login page</Button>
                </Box>
                
            </Box>
            
        </Box>
    )
}

export default Register;