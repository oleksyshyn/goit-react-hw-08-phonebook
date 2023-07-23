import { NavLink } from 'react-router-dom';
import { useAuth } from "hooks/index";

const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </div>
    )  
}

export default Navigation;
