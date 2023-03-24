import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';
import { useState } from 'react';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const data = { name, number };

  const onHandleSubmit = e => {
    e.preventDefault();
    addContact(data);
    setName('');
    setNumber('');
  };

  const onHandleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return 0;
    }
  };

  return (
    <form onSubmit={onHandleSubmit} className={css.form}>
      <label className={css.label}>
      <span className={css.title}>Name</span>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onHandleChange}
        />
      </label>
      <label className={css.label}>
        <span className={css.title}>Number</span>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onHandleChange}
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;