import React, { useState } from 'react';
import style from './Contact.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={style.button}>
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
