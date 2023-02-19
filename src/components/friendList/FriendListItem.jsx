import PropTypes from 'prop-types';
import { Name, Pic, Sect, Status } from './FriendListItem.styled';
export const OneFriend = ({ item: { isOnline, avatar, name } }) => {
  return (
    <Sect class="item">
      <Status isActive={isOnline === true} class="status">
        {isOnline}
      </Status>
      <Pic class="avatar" src={avatar} alt="User avatar" width="48" />
      <Name class="name">{name}</Name>
    </Sect>
  );
};

OneFriend.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    // id: PropTypes.number.isRequired,
  }).isRequired,
};
