import AddContactInput from "../AddContactInput/AddContactInput"
import { useSelector,useDispatch } from "react-redux";
import { changeFilter } from "../../Redux/phonebook/phonebook-actions";
import { getFilter } from "../../Redux/phonebook/phonebook-selectors";

export default function Filtr() {
    const value = useSelector(getFilter)
    const dispatch = useDispatch()
    return (
         <AddContactInput
                type="text"
                name="Find contacts by name"
                value={value}
                hahdleChange={(e)=>dispatch(changeFilter(e.currentTarget.value))}
                title=""
                pattern=""
            />
    )
}
