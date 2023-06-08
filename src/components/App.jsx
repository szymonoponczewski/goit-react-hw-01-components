import "./App.css";
import user from "./user/user.json";
import { Profile } from "./user/user.jsx";

export const App = () => {
  return (
    <div>
      <Profile {...user} />
    </div>
  );
};

export default App;
