
import NavBarMenu from '../components/NavBarMenu'; 
import Footer from '../components/Footer'; 
import PropTypes from 'prop-types';
import Home from '../pages/Home';
import Lab1 from '../pages/Lab1';
import Lab2 from '../pages/Lab2';

const menuItems = [
    {
      id: 1,
      label: "Strona Główna",
      url: "/",
      urlPattern: "/",
      element: <Home/>,
    },
    {
      id: 2,
      label: "Laboratorium 1",
      url: "/lab1",
      urlPattern: "/lab1",
      element: <Lab1/>,
    },
    {
      id: 3,
      label: "Laboratorium 2",
      url: "/lab2",  
      urlPattern: "/lab2/:id", 
      element: <Lab2/>,
    },
  ];

const RootLayout = ({ children }) => {
   

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
