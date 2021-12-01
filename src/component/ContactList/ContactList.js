// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
// import  deleteContact  from "../../Redux/phonebook/phonebook-actions";
import ContactItem from "../ContactItem/ContactItem"
import style from "./ContactList.module.css"
import { deleteContact } from "../../Redux/phonebook/phonebook-actions";
import { getVisible } from "../../Redux/phonebook/phonebook-selectors";

export default function ContactList() {
  const contacts = useSelector(getVisible)
  const dispatch = useDispatch();
  
  return (
      <>
        <ul className={style.list}>
          {contacts.map(contact => {
            return (
                <ContactItem key={contact.id} contact={contact} delet={(id)=>dispatch(deleteContact(id))}/>
            )
          })}
      </ul>
      </>
    )
}
