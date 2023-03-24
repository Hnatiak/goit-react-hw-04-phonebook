// import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import Message from './Message';
// import contacts from '../../contacts.json';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');

//     if (savedContacts !== null) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//       return;
//     }

//     this.setState({ contacts: contacts });
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const newContact = { id: nanoid(), name, number };

//     contacts.some(contact => contact.name === name)
//       ? Report.warning(
//           `${name}`,
//           'This user is already in the contact list.',
//           'OK'
//         )
//       : this.setState(({ contacts }) => ({
//           contacts: [newContact, ...contacts],
//         }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   filtredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const addContact = this.addContact;
//     const changeFilter = this.changeFilter;
//     const filtredContacts = this.filtredContacts();
//     const deleteContact = this.deleteContact;
//     const length = this.state.contacts.length;

//     return (
//       <div className={css.container}>
//         <h1 className={css.title}>
//           Phone<span className={css.title__color}>book</span>
//         </h1>
//         <ContactForm onSubmit={addContact} />

//         <h2 className={css.subtitle}>Contacts</h2>
//         <Filter filter={filter} changeFilter={changeFilter} />
//         {length > 0 ? (
//           <ContactList
//             contacts={filtredContacts}
//             onDeleteContact={deleteContact}
//           />
//         ) : (
//           <Message text="Contact list is empty." />
//         )}
//       </div>
//     );
//   }
// }

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = number => {
    const searchRepeat = contacts
      .map(user => user.name.toLowerCase())
      .includes(number.name.toLowerCase());

    if (searchRepeat) {
      alert(`${number.name} is already in contacts`);
    } else {
      const contact = {
        ...number,
        id: nanoid(),
      };
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const removeContact = contactId => {
    setContacts(prevState => [
      ...prevState.filter(contact => contact.id !== contactId),
    ]);
  };

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phone<span className={css.title__color}>book</span></h1>
        <ContactForm addContact={addContact} />

        <h2 className={css.subtitle}>Contacts</h2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        <ContactList
          contacts={getFilteredContacts()}
          onRemoveContact={removeContact}
        />
      </div>
    </>
  );
};