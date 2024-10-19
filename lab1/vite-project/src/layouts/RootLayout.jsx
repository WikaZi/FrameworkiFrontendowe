
import NavBarMenu from '../components/NavBarMenu'; 
import Footer from '../components/Footer'; 
import PropTypes from 'prop-types';

const RootLayout = ({ children }) => {
    const menuItems = [
        { id: 1, label: "Home", path: "/" },
        { id: 2, label: "Laboratorium 1", path: "/lab1" },
        { id: 3, label: "Laboratorium 2", path: "/lab2" },
    ];

    return (
        <div>
            <NavBarMenu items={menuItems} />
            <main>{children}</main> 
            <Footer />
        </div>
    );
};
RootLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default RootLayout;
