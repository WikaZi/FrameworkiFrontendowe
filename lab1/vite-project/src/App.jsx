import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout'; 
import Home from './pages/Home'; 
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2'; 

const App = () => {
    return (
        <Router>
            <RootLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lab1" element={<Lab1 />} />
                    <Route path="/lab2" element={<Lab2 />} />
                </Routes>
            </RootLayout>
        </Router>
    );
};

export default App;


























// const App = () => {
//     return (
//         <div className="app">
//             <h1>Car Profiles</h1>
//             {/* Przechodzimy przez każdy element w tablicy carData i generujemy komponent CarProfile */}
//             {carData.length > 0 ? (
//                 carData.map((car) => (
//                     <CarProfile key={car.id} car={car} /> 
//                 ))
//             ) : (
//                 <p>No car data available.</p>
//             )}
//         </div>
//     );
// };

// export default App;
