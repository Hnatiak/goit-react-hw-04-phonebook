import PropTypes from 'prop-types';
// import Contact from '../Contact';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
<>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={css.wrapper}>
            <div className={css.span}>
              <span className={css.icon}>
                <FaUserAlt />
              </span>
              <p>{contact.name}</p>
            </div>
            <div className={css.wrapper}>
              <p className={css.text}>{contact.number}</p>
              <button
                className={css.button}
                type="button"
                name="delete"
                onClick={() => onRemoveContact(contact.id)}
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>





    // <ul>
    //   {contacts.map(contact => (
    //     <li key={contact.id}>
    //       <div className={css.wrapper}>
    //         <span className={css.icon}>
    //           <FaUserAlt />
    //         </span>
    //         <p>{contact.name}</p>
    //       </div>
    //       <div className={css.wrapper}>
    //         <p className={css.text}>{contact.number}</p>
    //           <button
    //             className={css.button}
    //             type="button"
    //             name="delete"
    //             onClick={() => onRemoveContact(contact.id)}              
    //           >
    //             <FaTrash />
    //           </button>
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;