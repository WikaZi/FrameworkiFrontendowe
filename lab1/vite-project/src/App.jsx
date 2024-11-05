import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';
import RootLayout from './layouts/RootLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import Lab4 from './pages/Lab4';
import AppReducer from './data/AppReducer';
import data from './data/module-data';
import AppContext from './data/AppContext';
import AddCarForm from './components/AddCarForm';
import EditCarForm from './components/EditCarForm';
  

  function App() {
    const [state, appDispatch] = useReducer(AppReducer, data);

    return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <BrowserRouter>
        <div>
          <RootLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lab1" element={<Lab1 />} />
              <Route path="/lab2/:id" element={<Lab2 />} />
              <Route path="/lab3" element={<Lab3 />} />
              <Route path="/lab4" element={<Lab4/>} />
              <Route path="/lab4/add" element={<AddCarForm/>} />
              <Route path="/lab4/edit/:id" element={<EditCarForm/>} />
            </Routes>
            </RootLayout>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
    );
  }
  
  export default App;
