import { useSelector } from 'react-redux';
import Contact from './ContactsItem';
import css from './ContactsList.module.css';

function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const list = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <ul className={css.list}>
      {list().map(({ name, number, id }, idx) => (
        <Contact
          key={id}
          idx={idx}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
}

export default ContactList;