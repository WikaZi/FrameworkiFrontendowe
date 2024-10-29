//import { useState } from 'react';
import FlexContainer from './FlexContainer';
import CarProfile from './CarProfile';
import { data } from '../data/module-data'; 
import PropTypes from 'prop-types';

const Lab3Page = () => {
  return (
      <div>
          <h1>Lista Samochodów</h1>
          <FlexContainer element={CarProfile} data={data} />
      </div>
  );
};
Lab3Page.propTypes = {
  car: PropTypes.shape({
      id: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      productionDate: PropTypes.string.isRequired,
      plateNumber: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default Lab3Page;
