import { useState } from 'react';
import Form from "./Form/Form";
import Section from "components/Section/Section";
import {ContactList} from "./ContactsList/ContactsList";
import {Filter} from "./Filter/Filter";
import { useGetContactsQuery } from '../redux/ContactsSlice';

export default function App() {
  const { data } = useGetContactsQuery();

  const contacts = data ?? [];
  const [myFilter, setMyFilter] = useState('');

  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

 
  return (
    <>
      <Section title="Phonebook">
        <Form contacts={contacts} />
      </Section>
      <Section title="Contacts">
        <Filter filter={myFilter} setFilter={setMyFilter}/>
        <ContactList contacts={filteredContacts.reverse()} />
      </Section>
    </>
  );
}