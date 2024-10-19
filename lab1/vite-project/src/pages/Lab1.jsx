import CarProfile from '../components/CarProfile'; 
import {data as carData} from '../data/module-data';
import '../styles/Lab1.css';

const Lab1 = () => {
    return (
        <div>
             <div className="app">
            
            {carData.length > 0 ? (
                carData.map((car) => (
                    <CarProfile key={car.id} car={car} /> 
                ))
            ) : (
                <p>No car data available.</p>
            )}
        </div>
        </div>
    );
};

export default Lab1;
