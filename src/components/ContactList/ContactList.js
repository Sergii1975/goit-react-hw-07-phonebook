import { useSelector} from 'react-redux';
import { ContactsListItem } from '../ContactListItem/ContactList.Item';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
 
  console.log(contacts);
 
  return (
    <ContactsList>
      {contacts.map(({ name, phone, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={phone} />
      ))}
    </ContactsList>
  );
};

