import PropTypes from 'prop-types';
import { OneFriend } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <ul class="friend-list">
      {items.map(item => (
        <li key={item.id}>
          <OneFriend item={item} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
