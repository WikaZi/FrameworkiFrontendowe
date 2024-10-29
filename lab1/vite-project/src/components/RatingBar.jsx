
import PropTypes from 'prop-types';
import '../styles/RatingBar.css'; 

const RatingBar = ({ rate }) => {
    const totalStars = 10; 

    return (
        <div className="rating-bar">
            {Array.from({ length: totalStars }, (_, index) => (
                <span key={index} className={index < rate ? 'star filled' : 'star'}>
                    ★
                </span>
            ))}
        </div>
    );
};

RatingBar.propTypes = {
    rate: PropTypes.number.isRequired, 
};

export default RatingBar;
