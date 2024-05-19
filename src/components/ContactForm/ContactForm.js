import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addNewContact } from 'redux/actions';

import css from '../ContactForm/ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContact = e => {
    e.preventDefault();
    let nameOntheList = false;
    const form = e.target;
    const name = e.target.name.value;
    const number = e.target.number.value;
    const toLowerCase = name.toLowerCase();

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    contacts.forEach(({ name }) => {
      if (name.toLowerCase() === toLowerCase) {
        alert(`${name} is already in contacts`);
        nameOntheList = true;
        form.reset();
      }
    });

    if (nameOntheList) return;

    dispatch(addNewContact(newContact));
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={addContact}>
      <label className={css.form__label} htmlFor="name">
        Name
        <input
          autoComplete="off"
          type="text"
          name="name"
          className={css.form__input}
          pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
        />
      </label>
      <label className={css.form__label} htmlFor="number">
        Number
        <input
          autoComplete="off"
          type="tel"
          name="number"
          className={css.form__input}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          required
        />
      </label>
      <button type="submit" className={css.form__btn}>Add contact</button>
    </form>
  );
};
export default ContactForm;
