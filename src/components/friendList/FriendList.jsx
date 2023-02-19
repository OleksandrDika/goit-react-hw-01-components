import PropTypes from 'prop-types';
import { Item, List } from './FriendList.styled';
import { OneFriend } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <List class="friend-list">
      {items.map(item => (
        <Item key={item.id}>
          <OneFriend item={item} />
        </Item>
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
