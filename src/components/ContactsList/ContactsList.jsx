import {Contact} from './ContactsItem';
import css from './ContactsList.module.css';

export function ContactList({ contacts }) {
    return (
  <>
    <h2>Contact List</h2>
            {contacts.length ?
    <ul className={css.list}>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
      </ul>
          : <p>No any contacts</p>}
        </>
  );
}

