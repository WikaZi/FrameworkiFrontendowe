import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './layouts/RootLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import Lab4 from './pages/Lab4';

  

  function App() {
    return (
      <BrowserRouter>
        <div>
          <RootLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lab1" element={<Lab1 />} />
              <Route path="/lab2/:id" element={<Lab2 />} />
              <Route path="/lab3" element={<Lab3 />} />
              <Route path="/lab4" element={<Lab4/>} />
            </Routes>
            </RootLayout>
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;
