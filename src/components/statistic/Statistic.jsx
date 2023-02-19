import PropTypes from 'prop-types';
import {
  Conteiner,
  Item,
  Label,
  List,
  Perc,
  Stat,
  Title,
} from './Statistic.styled';

export const StatisticCard = ({ items }) => {
  return (
    <Stat class="statistics">
      <Conteiner>
        <Title class="title">UPLOAD STATS</Title>

        <List class="stat-list">
          {items.map(item => (
            <Item class="item" key={item.id}>
              <Label class="label">{item.label}</Label>
              <Perc class="percentage">{item.percentage}%</Perc>
            </Item>
          ))}
        </List>
      </Conteiner>
    </Stat>
  );
};

StatisticCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
