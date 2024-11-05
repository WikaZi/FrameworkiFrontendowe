import { useState } from 'react';
import PropTypes from 'prop-types';

const EditCarForm = ({ car, onSave, onCancel }) => {
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
            rating,
        };
        onSave(updatedCar); // Wywołanie funkcji onSave z zaktualizowanym samochodem
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Brand</label>
                <input
                    type="text"
                    className="form-control"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Production Date</label>
                <input
                    type="date"
                    className="form-control"
                    value={productionDate}
                    onChange={(e) => setProductionDate(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Plate Number</label>
                <input
                    type="text"
                    className="form-control"
                    value={plateNumber}
                    onChange={(e) => setPlateNumber(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Rating (0-10)</label>
                <input
                    type="number"
                    className="form-control"
                    value={rating}
                    onChange={(e) => setRating(Math.max(0, Math.min(10, e.target.value)))}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>Cancel</button>
        </form>
    );
};

EditCarForm.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired,
        productionDate: PropTypes.string.isRequired,
        plateNumber: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default EditCarForm;
