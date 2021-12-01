import style from './App.module.css'
import AddContact from "../AddContact/AddContact";
import ContactList from "../ContactList/ContactList";
import Filtr from "../Filter/Filter";
import { useSelector } from 'react-redux';
import { getItems } from '../../Redux/phonebook/phonebook-selectors';

export default function App() {
  const contacts = useSelector(getItems)
  
    return (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <AddContact  />
        <h2>Contacts</h2>
        {contacts.length > 0 ?
        
          <>
            <Filtr />
            <ContactList  />
          </>
         : (<h4>Your phonebook is empty</h4>)
        } 
        
      </div>
    );
}
