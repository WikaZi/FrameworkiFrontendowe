import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './layouts/RootLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import NotFound from './pages/NotFound';

const App = () => {
  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
      urlPattern: "/",
      element: <Home />,
    },
    {
      id: 2,
      label: "Laboratorium 1",
      url: "/lab1",
      urlPattern: "/lab1",
      element: <Lab1 />,
    },
    {
      id: 3,
      label: "Laboratorium 2",
      url: "/lab2",
      urlPattern: "/lab2",
      element: <Lab2 />,
    },
    {
      id: 4,
      label: "Not Found",
      urlPattern: "*",
      element: <NotFound />,
    },
  ];

  return (
   <BrowserRouter>
    <RootLayout>
      <Routes>
        {menuItems.map((item) => (
          <Route 
            key={item.id} 
            path={item.urlPattern} 
            element={item.element} 
          />
        ))}
      </Routes>
    </RootLayout>
    </BrowserRouter> 
  );
};

export default App;
