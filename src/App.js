import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import stats from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div>
      <Profile
      name = {user.name}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      followers = {user.stats.followers}
      views = {user.stats.views}
      likes = {user.stats.likes}     
      />
      <Statistics
      title = "Upload stats"
      stats = {stats}
      />
      <FriendList friends = {friends}/>
      <TransactionHistory items = {transactions}/>
    </div>
  );
}

export default App;