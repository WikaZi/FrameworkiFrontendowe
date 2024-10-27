import FlexContainer from "./FlexContainer";
import CarProfile from "./CarProfile";
import { data } from "../data/module-data";
function Lab3Page() {
        return (
          <div>
          <h2>Car Profiles</h2>
          <FlexContainer element={CarProfile} data={data} />
        </div>
          );
        };



export default Lab3Page;