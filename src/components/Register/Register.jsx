import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { register } from "redux/auth/operations"; 

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
        <div>
            <div>Register</div>
            <input
                type="name"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
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
            <button onClick={handleRegister} >Register</button>
            <button onClick={() => {navigate('/login')}}>Go to login page</button>
        </div>
    )
}

export default Register;