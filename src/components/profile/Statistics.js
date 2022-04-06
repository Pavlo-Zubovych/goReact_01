import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  // <div>Hi gays</div>

  <section class="statistics">
    {title && <h2 class="title">{title}</h2>}
    <ul class="stat-list"></ul>
    {stats.map(({ id, label, percentage }) => (
      <li key={id} class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
      </li>
    ))}
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
