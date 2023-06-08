import "./App.css";
import user from "./user/user.json";
import data from "./data/data.json";
import { Profile } from "./user/user.jsx";
import { Statistics } from "./data/data.jsx";

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics data={data} />
    </div>
  );
};

export default App;
