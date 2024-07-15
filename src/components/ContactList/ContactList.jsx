import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/contacts/selectors";
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contactItem) => (
        <li key={contactItem.id} className={css.listItem}>
          <Contact
            id={contactItem.id}
            name={contactItem.name}
            number={contactItem.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
