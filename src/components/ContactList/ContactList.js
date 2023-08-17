import { useSelector } from 'react-redux';
import { selectContactsFilter, selectContactsList } from 'redux/selectors';
import { ContactsListItem } from '../ContactListItem/ContactList.Item';

// import { createSelector } from "@reduxjs/toolkit";

import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

//   export const selectVisibleContacts = createSelector(
// [ selectContacts, selectFilter],
//  (contacts, filter) => {
//    return contacts.filter(contact => contact.name.toLowerCase()
//     .includes(filter.toLowerCase()))
//  }
// )

  console.log(visibleContacts);

  return (
    <ContactsList>
      {visibleContacts.map(({ name, phone, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={phone} />
      ))}
    </ContactsList>
  );
};

