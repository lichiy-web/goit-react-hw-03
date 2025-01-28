import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './ContactList/ContactList';
import contactData from '../db/contactListData.json';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import Notification from './Notification/Notification';
import toast from 'react-hot-toast';

function App() {
  // localStorage.removeItem('contactList');
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contactList')) ?? contactData
  );
  const [searchQuery, setSearchQuery] = useState('');
  const matchedContacs = contacts.filter(({ name }) =>
    name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
  );
  const handleSearchQuery = e => {
    setSearchQuery(e.target.value);
  };

  const handleAddContact = newContact => {
    newContact.number = newContact.number.match(/\d/gi).join('');

    const isExisted = contacts.some(
      ({ number }) => number.match(/\d/gi).join('') === newContact.number
    );
    console.log('isExisted = ' + isExisted);
    if (isExisted) {
      toast.error('The contact containing this number already exists!', {
        duration: 4000,
      });
      return;
    }
    setContacts(prev => [...prev, newContact]);
    toast.success('The new contact has successfully added!', {
      duration: 4000,
    });
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
    toast.success('The contact has successfully deleted!', {
      duration: 4000,
    });
  };

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="main-container">
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      {contacts.length > 0 && (
        <SearchBox searchQuery={searchQuery} onSearch={handleSearchQuery} />
      )}
      {contacts.length ? (
        <ContactList
          contacts={matchedContacs}
          onDeleteContact={handleDeleteContact}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
