import "./App.css";
import user from "./user/user.json";
import data from "./data/data.json";
import friends from "./friends/friends.json";
import { Profile } from "./user/user.jsx";
import { Statistics } from "./data/data.jsx";
import { FriendList } from "./friends/friends.jsx";

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics data={data} />
      <FriendList friends={friends} />;
    </div>
  );
};

export default App;
