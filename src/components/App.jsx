
import Form from "./Form/Form";
import Section from "components/Section/Section";
import ContactList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";


export default function App() {
 
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}