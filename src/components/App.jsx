import { ProfileCard } from './Profile';
import { StatisticCard } from './statistic/Statistic';
import { FriendList } from './friendList/FriendList';
import { TransactionTable } from './transactoin/TransactionHistory';
import user from '../user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <h1>HELLO</h1>
    <div style={{ display: 'flex', gap: 16 }}>
      <ProfileCard item={user} />
      <StatisticCard items={data} />
      <FriendList items={friends} />
      <TransactionTable items={transactions} />
    </div>
  );
};
