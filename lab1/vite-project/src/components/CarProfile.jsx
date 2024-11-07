import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import RatingBar from './RatingBar';
import EditCarForm from './EditCar';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

const CarProfile = ({ car}) => {
    const navigate = useNavigate();
    const {dispatch} = useContext(AppContext);
    const [rating, setRating] = useState(car.rating || 0);
    const [isEditing, setIsEditing] = useState(false);
    
    const handleRate = () => {
        const newRating = (rating === 10) ? 0 : Math.min(rating + 1, 10);
        setRating(newRating);
        dispatch({ type: "rate", payload: { id: car.id, rating: newRating } });
       
    };
    const handleEdit = () => { 
        navigate(`/lab4/edit/${car.id}`);
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
            <button onClick={handleEdit}  className="btn btn-primary me-2">Edit</button>
            <button onClick={() => dispatch({ type: "delete", payload: { id: car.id } })} className='btn btn-danger me-2'>Delete</button>
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