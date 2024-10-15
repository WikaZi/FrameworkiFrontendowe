
import PropTypes from 'prop-types';

const CarProfile = ({ car }) => {
    return (
        <div className="car-profile">
            <h2>Car Profile</h2>
            <p><strong>ID:</strong> {car.id}</p>
            <p><strong>Brand:</strong> {car.brand}</p>
            <p><strong>Production Date:</strong> {car.productionDate}</p>
            <p><strong>Plate Number:</strong> {car.plateNumber}</p>
        </div>
    );
};


CarProfile.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired,
        productionDate: PropTypes.string.isRequired,
        plateNumber: PropTypes.string.isRequired,
    }).isRequired,
};

export default CarProfile;
