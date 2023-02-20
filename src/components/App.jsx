import { ProfileCard } from './profile/Profile';
import { StatisticCard } from './statistic/Statistic';
import { FriendList } from './friendList/FriendList';
import { TransactionTable } from './transactoin/TransactionHistory';
import user from '../user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
import { Layout } from './Layout.styled';

export const App = () => {
  return (
    <Layout>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticCard title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionTable items={transactions} />
    </Layout>
  );
};
