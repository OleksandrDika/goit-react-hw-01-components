import PropTypes from 'prop-types';
import {
  Box,
  Box2,
  Descr,
  Item,
  Label,
  List,
  Loc,
  Name,
  Pic,
  Quantity,
  Tag,
} from './Profile.styled';

export const ProfileCard = ({
  item: { username, tag, location, avatar, stats },
}) => {
  return (
    <Box class="profile">
      <Box2>
        <Descr class="description">
          <Pic src={avatar} alt={tag} class="avatar" />
          <Name class="name">{username}</Name>
          <Tag class="tag">{tag}</Tag>
          <Loc class="location">{location}</Loc>
        </Descr>

        <List class="stats">
          <Item>
            <Label class="label">Followers</Label>
            <Quantity class="quantity">{stats.followers}</Quantity>
          </Item>
          <Item>
            <Label class="label">Views</Label>
            <Quantity class="quantity">{stats.views}</Quantity>
          </Item>
          <Item>
            <Label class="label">Likes</Label>
            <Quantity class="quantity">{stats.likes}</Quantity>
          </Item>
        </List>
      </Box2>
    </Box>
  );
};

ProfileCard.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
