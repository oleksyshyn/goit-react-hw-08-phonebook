import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import { logIn } from "redux/auth/operations";

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
        <div>
            <div>Login</div>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => {navigate('/register')}}>Go to register page</button>
        </div>
    )
}

export default Login;