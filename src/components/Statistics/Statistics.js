import PropTypes from 'prop-types';
import StatisticObject from './StatisticObject';
import s from './Statistics.module.css';

export default function Statistics({title, stats}) {
    return <section className = {s.statistics}>
  {title && <h2 className = {s.title}>{title.toUpperCase()}</h2>}

  <ul className = {s['stat-list']}>
    {stats.map(stat =>
      <StatisticObject 
        key = {stat.id}
        label = {stat.label}
        percentage = {stat.percentage}
      />
      )}
  </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }))
}