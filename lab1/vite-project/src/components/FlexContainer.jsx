import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import AppReducer from '../data/AppReducer';
import { useReducer } from 'react';

const FlexContainer = ({ element: Element, data}) => {
    const [cars, dispatch] = useReducer(AppReducer, data);
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-start">
    {cars.map(car => (
                <Element 
                key={car.id} 
                car={car} 
                onRate={(id, rating) => dispatch({ type: "rate", payload: { id, rating } })} 
                onEdit={(id, updatedData) => dispatch({ type: "edit", payload: {id, updatedData } })}
                onDelete={(id,) => dispatch({ type: "delete", payload: { id } })}
                />
            ))}
  </div>
  );
};

FlexContainer.propTypes = {
    element: PropTypes.elementType.isRequired, 
    data: PropTypes.arrayOf(PropTypes.object).isRequired, 
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onRate: PropTypes.func.isRequired,
}

export default FlexContainer;
