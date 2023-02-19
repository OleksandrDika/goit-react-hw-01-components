import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { OneFriend } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <List class="friend-list">
      {items.map(item => (
        <li key={item.id}>
          <OneFriend item={item} />
        </li>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
