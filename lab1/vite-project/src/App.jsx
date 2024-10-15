import CarProfile from './components/CarProfile'; 
import { data as carData } from './module-data'; 

const App = () => {
    return (
        <div className="app">
            <h1>Car Profiles</h1>
            {/* Przechodzimy przez każdy element w tablicy carData i generujemy komponent CarProfile */}
            {carData.length > 0 ? (
                carData.map((car) => (
                    <CarProfile key={car.id} car={car} /> 
                ))
            ) : (
                <p>No car data available.</p>
            )}
        </div>
    );
};

export default App;
