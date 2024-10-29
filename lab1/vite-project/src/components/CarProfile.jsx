import PropTypes from 'prop-types';
import { useState } from 'react';
import RatingBar from './RatingBar';
import EditCarForm from './EditCarForm';

const CarProfile = ({ car, onEdit, onDelete, onRate  }) => {
    const [rating, setRating] = useState(car.rating || 0);
    const [isEditing, setIsEditing] = useState(false);
    
    const handleRate = () => {
        if (rating === 10) {
            setRating(0); 
        } else {
            setRating((prevRating) => Math.min(prevRating + 1, 10)); 
        }
        onRate(car.id, rating);
    };
    const handleEdit = (updatedCar) => { 
        onEdit(car.id, updatedCar);
        setIsEditing(false);
    };
    const handleDelete = () => {
        onDelete(car.id);
    };
    if (isEditing) {
        return (
            <EditCarForm
                car={car}
                onSave={handleEdit}
                onCancel={() => setIsEditing(false)}
            />
        );
    }

    return (
        
        <div className="car-profile">
            <h6>Car Profile</h6>
            <p><strong>ID:</strong> {car.id}</p>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Production Date:</strong> {car.productionDate}</p>
            <p><strong>Plate Number:</strong> {car.plateNumber}</p>
            <p><strong>Rating:</strong> {car.rating}</p>
            <RatingBar rate={rating} /> 
            <button onClick={handleRate} className="btn btn-success">Rate</button>
            <buton onClick={() => setIsEditing(true)} className="btn btn-primary me-2">Edit</buton>
            <button onClick={handleDelete} className='btn btn-danger me-2'>Delete</button>
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