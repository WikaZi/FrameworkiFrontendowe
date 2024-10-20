import { useParams } from 'react-router-dom';

const Lab2 = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Laboratorium 2</h1>
      <p>Wybrany samochód: {id}</p>
    </div>
  );
};

export default Lab2;
