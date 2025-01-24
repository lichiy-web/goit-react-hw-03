import { useState, useEffect, useRef, useId } from 'react';
import './App.css';
import ContactList from './ContactList/ContactList';
import contactData from '../db/contactListData.json';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

const initialValues = {
  search: '',
};

function App() {
  const [contacts, setContacts] = useState(contactData);
  const [searchQuery, setSearchQuery] = useState('');
  const matchedContacs = contacts.filter(({ name }) => {
    console.log(name);
    return name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase());
  });
  const handleSearchQuery = e => {
    setSearchQuery(e.target.value);
  };

  const handleAddContact = newContact => {
    // console.log('handleAddContact=> newContact: ', newContact);
    // console.log('handleAddContact=> contacts: ', contacts);
    setContacts(prev => [...prev, newContact]);
  };

  return (
    <div className="main-container">
      <h1 className="phoneBookTitle">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox searchQuery={searchQuery} onSearch={handleSearchQuery} />
      <ContactList contacts={matchedContacs} />
    </div>
  );
}

export default App;
