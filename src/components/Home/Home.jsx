import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/index";

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
        <div>
            <button onClick={handleButton}>Get started</button>
        </div>
    )
}

export default Home;