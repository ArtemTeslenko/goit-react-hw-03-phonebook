import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
