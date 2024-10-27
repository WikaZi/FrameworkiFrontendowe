import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const FlexContainer = ({ element: Element, data, onEdit, onDelete, onRate }) => {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-start">
    {data.map((item) => (
      <div key={item.id} className="flex-item p-3">
        <Element 
        car={item} 
        onEdit={onEdit} 
        onDelete={onDelete} 
        onRate={onRate} 
        /> 
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
    onRate: PropTypes.func.isRequired
}

export default FlexContainer;
