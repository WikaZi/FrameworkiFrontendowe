import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import AppReducer from '../data/AppReducer';
import { useReducer } from 'react';

const FlexContainer = ({ element: Element, data}) => {
    const [cars, dispatch] = useReducer(AppReducer, data);
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-start">
    {cars.map((item) => (
      <div key={item.id} className="flex-item p-3">
        <Element car={item} onEdit={() => dispatch({ type: "edit", payload: { id: item.id } })} />
                    <button className="btn btn-danger me-2" onClick={() => dispatch({ type: "delete", payload: { id: item.id } })}>Delete</button>
                    <button className='btn btn-success' onClick={() => dispatch({ type: "rate", payload: { id: item.id, rating: (item.rating + 1) % 11 } })}>Rate</button>
      </div>
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
