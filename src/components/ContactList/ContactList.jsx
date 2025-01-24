import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
// import contacts from '../../db/contactListData.json';

const ContactList = ({ contacts }) => {
  return (
    <div className={css.contactList}>
      {contacts.map(contacts => {
        return <Contact key={contacts.id} {...contacts} />;
      })}
    </div>
  );
};
export default ContactList;
