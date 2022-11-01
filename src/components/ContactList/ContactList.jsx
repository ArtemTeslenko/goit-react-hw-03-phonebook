import PropTypes from 'prop-types';
import React from 'react';
import {
  ContactItem,
  ContactItemWrapper,
  DeleteBtn,
  List,
} from './ContactList.styled';

export default function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(item => {
        const { id, name, number } = item;
        return (
          <ContactItem key={id}>
            <ContactItemWrapper>
              {name}: {number}
              <DeleteBtn type="button" onClick={() => onDelete(id)}>
                Delete
              </DeleteBtn>
            </ContactItemWrapper>
          </ContactItem>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
