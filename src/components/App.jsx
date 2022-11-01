import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Ann Coperfield', number: '338-82-33' },
    ],
    filter: '',
  };

  handleFormData = data => {
    for (const { name } of this.state.contacts) {
      if (name === data.name) {
        alert(`${name} is already in contacts.`);
        // Notiflix.Confirm.show(
        //   `${item.name} is already in contacts.`,
        //   'Please click "yes" to confirm'
        // );
        return;
      }
    }
    data.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data }],
    }));
  };

  chsngeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredItem = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className="mainContainer">
        <h1 className="header">Phonebook</h1>
        <ContactForm getData={this.handleFormData}></ContactForm>
        <h2 className="header">Contacts</h2>
        <Filter
          value={this.state.filter}
          changeFilter={this.chsngeFilter}
        ></Filter>
        <ContactList
          contacts={filteredItem}
          onDelete={this.deleteItem}
        ></ContactList>
      </div>
    );
  }
}

export default App;
