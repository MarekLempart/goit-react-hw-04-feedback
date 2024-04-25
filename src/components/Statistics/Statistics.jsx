import PropTypes from 'prop-types';
import { Category, Numbers } from './Statistics.styled';

export const Statistics = ({
  options,
  statistic,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {options.map((name, i) => {
        return (
          <Category key={i + 1} categoryName={name}>
            {name}: <Numbers>{statistic[name]}</Numbers>
          </Category>
        );
      })}
      <p>
        Total:<Numbers>{total}</Numbers>
      </p>
      <Category>
        Positive feedback: <Numbers>{positivePercentage()}</Numbers>%
      </Category>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
