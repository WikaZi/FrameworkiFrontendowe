import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppContext from '../data/AppContext';
import PropTypes from 'prop-types';

const EditCarForm = () => {
    const { id } = useParams();
    const { items, dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const car = items.find(car => car.id === parseInt(id));

    const handleEditSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedCar = {
            id: car.id,
            brand: formData.get('brand'),
            productionDate: formData.get('productionDate'),
            plateNumber: formData.get('plateNumber'),
            rating: car.rating
        };
        dispatch({ type: "edit", payload: { id: car.id, updatedData: updatedCar } });
        navigate('/lab4');
    };

    if (!car) {
        return <div>Car not found!</div>;
    }

    return (
        <form onSubmit={handleEditSubmit} className="form-container">
            <h2>Edit Car</h2>
            <input type="hidden" name="id" value={car.id} />
            <div className="mb-3">
                <label htmlFor="brand" className="form-label">Brand:</label>
                <input
                    type="text" maxLength={15} minLength={2}
                    id="brand"
                    name="brand"
                    className="form-control"
                    defaultValue={car.brand}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="productionDate" className="form-label">Production Date:</label>
                <input
                    type="date"
                    id="productionDate"
                    name="productionDate"
                    className="form-control"
                    defaultValue={car.productionDate}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="plateNumber" className="form-label">Plate Number:</label>
                <input
                    type="text" maxLength={7} minLength={7}
                    id="plateNumber"
                    name="plateNumber"
                    className="form-control"
                    defaultValue={car.plateNumber}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/lab4')}>
                Cancel
            </button>
        </form>
    );
};

EditCarForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default EditCarForm;