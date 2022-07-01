import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/ContactsSlice';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [createContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const contacts = data;

  const nameChange = e => {
    setName(e.currentTarget.value);
  };

  const numberChange = e => {
    setPhone(e.currentTarget.value);
  };
  const reset = () => {
    setName('');
    setPhone('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      phone,
    };
    createContact(newContact);
    setName('');
    setPhone('');
    
    
  };

  return (
             <div>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        className={css.input}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={nameChange} />
                </label>
                <label className={css.label}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        className={css.input}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
                        required
                        value={phone}
                        onChange={numberChange}
                    />
                </label>
                <button type="submit" className={css.button}>
                    Add contact
                </button>
      </form>
    </div>
        );
    }


