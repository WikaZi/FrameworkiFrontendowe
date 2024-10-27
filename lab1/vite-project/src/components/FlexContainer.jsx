import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const FlexContainer = ({ element: Element, data }) => {
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-start">
    {data.map((item) => (
      <div key={item.id} className="flex-item p-3">
        <Element car={item} /> 
      </div>
    ))}
  </div>
  );
};

FlexContainer.propTypes = {
    element: PropTypes.elementType.isRequired, 
    data: PropTypes.arrayOf(PropTypes.object).isRequired, 
  };

export default FlexContainer;
