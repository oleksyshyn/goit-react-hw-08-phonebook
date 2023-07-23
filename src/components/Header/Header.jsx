import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import Navigation from 'components/Navigation/Navigation'; 
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}
 
export default Header;