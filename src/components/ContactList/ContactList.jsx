import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
// import contacts from '../../db/contactListData.json';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.contactList}>
      {contacts.map(contacts => {
        return (
          <Contact
            key={contacts.id}
            {...contacts}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </div>
  );
};
export default ContactList;
