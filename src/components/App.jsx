import "./App.css";
import user from "./user/user.json";
import stats from "./data/data.json";
import { Profile } from "./user/user.jsx";

import { Statistics } from "./data/stats.jsx";

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics data={stats} />
    </div>
  );
};

export default App;
