import React from 'react';
import style from './Contact.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={style.filter}>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
