import { useSelector, useDispatch } from 'react-redux';

import { getFilterValue, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/actions';

import css from '../ContactList/ContactList.module.css';
 
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(filter.replace(/-|\s/g, ''))
  );

  const handleDelete = idToDelete => {
    dispatch(deleteContact(idToDelete));
  };

  return filteredContacts.length > 0 ? (
    <ul className={css.contacts__list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.contacts__item} key={id}>
            {name}: {number}
            <button type="submit" onClick={() => handleDelete(id)}  className={css.contacts__btn}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No contacts.</p>
  );
};

export default ContactList;
