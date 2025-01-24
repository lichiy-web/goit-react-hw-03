import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './ContactList/ContactList';
import contactData from '../db/contactListData.json';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import Notification from './Notification/Notification';

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
    // console.log('handleAddContact=> newContact: ', newContact);
    // console.log('handleAddContact=> contacts: ', contacts);
    setContacts(prev => [...prev, newContact]);
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="main-container">
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox searchQuery={searchQuery} onSearch={handleSearchQuery} />
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
