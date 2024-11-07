import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../data/AppContext';

const AddCarForm = () => {
    const navigate = useNavigate();
    const { items, dispatch } = useContext(AppContext);
    const [car, setCar] = useState({ brand: '', productionDate: '', plateNumber: '' });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    };

    
    const validateForm = () => {
        const newErrors = {};

        if (car.brand.length < 2 || car.brand.length > 15) {
            newErrors.brand = "";
        }
        if (!car.productionDate) {
            newErrors.productionDate = "Data jest wymagana";
        }
        if (car.plateNumber.length !== 7) {
            newErrors.plateNumber = "Numer rejestracyjny musi mieć 7 znaków";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleAddSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        
        const maxId = items.length > 0 ? Math.max(...items.map(car => car.id)) : 0;
        const newCar = { id: maxId + 1, ...car, rating: 0 }; 

        dispatch({ type: "add", payload: newCar });
        navigate('/lab4');
    };

    return (
        <form onSubmit={handleAddSubmit} className="form-container">
            <h2>Add New Car</h2>
            <div className="mb-3">
                <label htmlFor="brand" className="form-label">Brand:</label>
                <input
                    type="text"
                    maxLength={15}
                    minLength={2}
                    id="brand"
                    name="brand"
                    className="form-control"
                    value={car.brand}
                    onChange={handleInputChange}
                    required
                />
                {errors.brand && <div className="text-danger">{errors.brand}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="productionDate" className="form-label">Production Date:</label>
                <input
                    type="date"
                    id="productionDate"
                    name="productionDate"
                    className="form-control"
                    value={car.productionDate}
                    onChange={handleInputChange}
                    required
                />
                {errors.productionDate && <div className="text-danger">{errors.productionDate}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="plateNumber" className="form-label">Plate Number:</label>
                <input
                    type="text"
                    maxLength={7}
                    minLength={7}
                    id="plateNumber"
                    name="plateNumber"
                    className="form-control"
                    value={car.plateNumber}
                    onChange={handleInputChange}
                    required
                />
                {errors.plateNumber && <div className="text-danger">{errors.plateNumber}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Add Car</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/lab4')}>
                Cancel
            </button>
        </form>
    );
};

export default AddCarForm;
