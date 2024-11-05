import CarProfile from "../components/CarProfile";
import FlexContainer from "../components/FlexContainer";
import data from "../data/module-data";

const Lab4 = () => {
    return (
        <div>
            <h1>Lista Samochodów</h1>
            <FlexContainer element={CarProfile} data={data} />
        </div>
    );
  };

export default Lab4;