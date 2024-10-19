
import NavBarMenu from '../components/NavBarMenu'; 
import Footer from '../components/Footer'; 
import PropTypes from 'prop-types';

const RootLayout = ({ children }) => {
   

    return (
        <div>
            <NavBarMenu />
            <main>{children}</main> 
            <Footer />
        </div>
    );
};
RootLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default RootLayout;
