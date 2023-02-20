import PropTypes from 'prop-types';
import { Name, Pic, Sect, Status } from './FriendListItem.styled';
export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Sect class="item">
      <Status isActive={isOnline} class="status">
        {isOnline}
      </Status>
      <Pic class="avatar" src={avatar} alt="User avatar" width="48" />
      <Name class="name">{name}</Name>
    </Sect>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired,
};
