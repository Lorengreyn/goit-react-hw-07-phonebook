import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/ContactsSlice'

function Contact({ name, number, idx, id }) {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <p>
        {idx + 1} - {name}: {number}
      </p>
      <button type="button" className={css.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
}
Contact.propTypes = {
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    idx: PropTypes.number.isRequired,
  }),
};

export default Contact;