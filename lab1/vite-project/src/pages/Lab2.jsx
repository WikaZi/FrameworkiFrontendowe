import CarProfile from '../components/CarProfile'; 
import {data as carData} from '../data/module-data';
import { useParams } from 'react-router-dom';


function Lab2() {
    

  const { id } = useParams();

  
  if (!id) {
    return <p>Brak identyfikatora samochodu.</p>;
  }

  const carId = parseInt(id, 10);

  const car = carData.find((car) => car.id === carId);


  if (!car) {
    return <p>Nie znaleziono samochodu o tym identyfikatorze.</p>;
  }


  return (
    
    <CarProfile car={car}/>
  );
}

export default Lab2;
