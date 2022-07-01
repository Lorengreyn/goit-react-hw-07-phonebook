import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import { useDeleteContactMutation } from "../../redux/ContactsSlice";

export function Contact({ contact }){
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li className={css.item}>
        <p>
        {contact.name}: {contact.phone}
      </p>
      <button type="button" className={css.button} onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  options: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

