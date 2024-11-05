import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../data/AppContext';

const FlexContainer = ({ element: Element}) => {
    const {items, dispatch} = useContext(AppContext);
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-start">
    {items.map(car => (
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
    element: PropTypes.elementType.isRequired
}

export default FlexContainer;
