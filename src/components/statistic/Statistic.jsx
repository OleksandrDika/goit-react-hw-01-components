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

export const StatisticCard = ({ title, stats }) => {
  return (
    <Stat class="statistics">
      <Conteiner>
        {title && <Title class="title">{title}</Title>}

        <List class="stat-list">
          {stats.map(item => (
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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
