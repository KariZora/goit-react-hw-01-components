import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export default function StatisticObject({label, percentage}) {
    return <li className = {s.item}>
    <span className = {s.label}>{label}</span>
    <span className = {s.percentage}>{percentage}%</span>
    </li>
}

StatisticObject.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}
