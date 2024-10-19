import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';

const NavBarMenu = ({ items }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
NavBarMenu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export default NavBarMenu;