import PropTypes from 'prop-types';
import { Item, List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List class="friend-list">
      {friends.map(item => (
        <Item key={item.id}>
          <FriendListItem
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
