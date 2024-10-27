import PropTypes from 'prop-types';
import { useState } from 'react';

const CarProfile = ({ car, onEdit, onDelete, onRate  }) => {
    const [rating, setRating] = useState(car.rating || 0);
    const handleRate = () => {
        onRate(car.id, rating); }; 
    return (
        
        <div className="car-profile">
            <h6>Car Profile</h6>
            <p><strong>ID:</strong> {car.id}</p>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Production Date:</strong> {car.productionDate}</p>
            <p><strong>Plate Number:</strong> {car.plateNumber}</p>
            <p><strong>Rating:</strong> {car.rating}</p>

            <div className="buttons mt-3">
                <button onClick={() => onEdit(car.id)} className="btn btn-primary me-2">Edit</button>
                <button onClick={() => onDelete(car.id)} className="btn btn-danger me-2">Delete</button>
                <div>
                <input 
                        type="number" 
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)} 
                        min="0" 
                        max="10" 
                        className="me-2"
                    />
                <button onClick={handleRate} className="btn btn-success">Rate</button>
                </div>
            </div>
        </div>
    );
};


CarProfile.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired,
        productionDate: PropTypes.string.isRequired,
        plateNumber: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    }).isRequired,
    onEdit: PropTypes.func.isRequired, 
    onDelete: PropTypes.func.isRequired, 
    onRate: PropTypes.func.isRequired
};

export default CarProfile;