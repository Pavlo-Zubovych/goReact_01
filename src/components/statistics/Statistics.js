import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function onRandomColor() {
    return '#' + Math.floor(Math.random() * 16777216).toString(16);
}

const Statistics = ({ title, stats }) => (
    // <div>Hi gays</div>
    // <section>
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
            {stats.map(({ id, label, percentage }) => (
                <li
                    key={id}
                    className={styles.item}
                    style={{ backgroundColor: onRandomColor() }}
                >
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};

export default Statistics;
