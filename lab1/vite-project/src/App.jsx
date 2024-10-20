import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './layouts/RootLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
//import NotFound from './pages/NotFound';
//import menuItems from './data/menuItems';
//import NavBarMenu from './components/NavBarMenu';



  

  function App() {
    return (
      <BrowserRouter>
        <div>
          <RootLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lab1" element={<Lab1 />} />
              <Route path="/lab2/:id" element={<Lab2 />} />
            </Routes>
            </RootLayout>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;
