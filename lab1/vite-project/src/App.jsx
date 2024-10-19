//import CarProfile from './components/CarProfile'; 
//import { data as carData } from './data/module-data'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout'; // Upewnij się, że ścieżka jest poprawna
import Home from './pages/Home'; // Upewnij się, że ścieżka jest poprawna
import Lab1 from './pages/Lab1'; // Strona Laboratorium 1
//import Lab2 from './pages/Lab2'; // Strona Laboratorium 2

const App = () => {
    return (
        <Router>
            <RootLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lab1" element={<Lab1 />} /> {/* Trasa do Lab1 */}
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
