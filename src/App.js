import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import css from './components/ContactForm/ContactForm.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title_1}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title_2}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
