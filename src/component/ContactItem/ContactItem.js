import PropTypes from "prop-types";
import style from "./ContactItem.module.css";
import { useGetDeleteContactMutation } from "../../Redux/phonebook/phonebook-slice";
import Spinner from '../Spinner/Spinner';
import { toast } from "react-toastify";

export default function ContactItem({ contact }) {
    const [delet, { isLoading, isError, error }] = useGetDeleteContactMutation();
    
    if (isError) {
        toast.error(`error ${error.status} (${error.data})`)
    }
    return (
        <li className={style.item}>
            <p>{contact.name}:</p>
            <p>{contact.phone}</p>
            <button
                className={style.button}
                onClick={()=>delet(contact.id)}
                // onClick={deletes}
            >{isLoading ? <Spinner height={8} width={40}/> : 'delete'}</button>
        </li>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}