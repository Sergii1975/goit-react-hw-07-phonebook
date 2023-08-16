import { useSelector } from 'react-redux';
import { selectContactsFilter, selectContactsList } from 'redux/selectors';
import { ContactsListItem } from '../ContactListItem/ContactList.Item';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  console.log(visibleContacts);

  return (
    <ContactsList>
      {visibleContacts.map(({ name, phone, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={phone} />
      ))}
    </ContactsList>
  );
};

