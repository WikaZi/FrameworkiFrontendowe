import { useState } from 'react';
import FlexContainer from './FlexContainer';
import CarProfile from './CarProfile';
import { data } from '../data/module-data'; 
import PropTypes from 'prop-types';

const Lab3Page = () => {
    const [cars, setCars] = useState(data); 
    const [isEditing, setIsEditing] = useState(false);
    const [editingCar, setEditingCar] = useState(null);

    const handleEdit = (id) => {
        const carToEdit = cars.find(car => car.id === id);
        setEditingCar(carToEdit);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
    };

    const handleRate = (id, newRating) => {
        const updatedCars = cars.map(car => 
            car.id === id ? { ...car, rating: newRating } : car
            
        );
        setCars(updatedCars);
    };

    const handleSave = (updatedCar) => {
        const updatedCars = cars.map(car => 
            car.id === updatedCar.id ? updatedCar : car
        );
        setCars(updatedCars);
        setIsEditing(false);
        setEditingCar(null);
    };



    return (
        <div>
            <h4>Car Profiles</h4>
            {isEditing ? (
                <CarEditForm 
                    car={editingCar} 
                    onSave={handleSave} 
                    onCancel={() => setIsEditing(false)} 
                />
            ) : (
                <FlexContainer 
                    element={CarProfile} 
                    data={cars} 
                    onEdit={handleEdit} 
                    onDelete={handleDelete} 
                    onRate={handleRate} 
                />
            )}
        </div>
    );
};


const CarEditForm = ({ car, onSave, onCancel }) => {
    const [brand, setBrand] = useState(car.brand);
    const [productionDate, setProductionDate] = useState(car.productionDate);
    const [plateNumber, setPlateNumber] = useState(car.plateNumber);
    const [rating, setRating] = useState(car.rating);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedCar = {
            ...car,
            brand,
            productionDate,
            plateNumber,
            rating: Number(rating) 
        };
        onSave(updatedCar);
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit Car</h3>
            <div className="mb-3">
                <label>Brand:</label>
                <input 
                    type="text" 
                    value={brand} 
                    onChange={(e) => setBrand(e.target.value)} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label>Production Date:</label>
                <input 
                    type="date" 
                    value={productionDate} 
                    onChange={(e) => setProductionDate(e.target.value)} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label>Plate Number:</label>
                <input 
                    type="text" 
                    value={plateNumber} 
                    onChange={(e) => setPlateNumber(e.target.value)} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label>Rating:</label>
                <input 
                    type="number" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)} 
                    min="0" 
                    max="10" 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-success">Save</button>
            <button type="button" onClick={onCancel} className="btn btn-secondary ms-2">Cancel</button>
        </form>
    );
};
CarEditForm.propTypes = {
  car: PropTypes.shape({
      id: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      productionDate: PropTypes.string.isRequired,
      plateNumber: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default Lab3Page;
