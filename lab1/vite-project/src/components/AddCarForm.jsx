import  { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../data/AppContext';


const AddCarForm = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AppContext);
    const [car, setCar] = useState({ brand: '', productionDate: '', plateNumber: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCar({ ...car, [name]: value });
    };

    const handleAddSubmit = (event) => {
        event.preventDefault();
        const newCar = { id: Date.now(), ...car, rating: 0 }; 
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
                    id="brand"
                    name="brand"
                    className="form-control"
                    value={car.brand}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="productionDate" className="form-label">Production Date:</label>
                <input
                    type="text"
                    id="productionDate"
                    name="productionDate"
                    className="form-control"
                    value={car.productionDate}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="plateNumber" className="form-label">Plate Number:</label>
                <input
                    type="text"
                    id="plateNumber"
                    name="plateNumber"
                    className="form-control"
                    value={car.plateNumber}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Car</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/lab4')}>
                Cancel
            </button>
        </form>
    );
};

export default AddCarForm;
