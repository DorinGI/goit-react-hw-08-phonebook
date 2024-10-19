import React from 'react';
import style from './Contact.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li key={id} className={style.contactItem}>
    <span className={style.contactName}>{name}</span>
    <span className={style.contactNumber}>{number}</span>
    <button className={style.deleteButton} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
