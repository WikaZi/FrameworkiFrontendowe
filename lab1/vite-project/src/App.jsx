//import CarProfile from './components/CarProfile'; 
//import { data as carData } from './data/module-data'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from './layouts/RootLayout';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


const App = () => {
    return (
    <>
        <RootLayout>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </RootLayout>
    </>
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
