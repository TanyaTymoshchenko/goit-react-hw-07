import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { CiUser } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import css from "./Contact.module.css";

export default function Contact({ contactData: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css["contact-item"]}>
      <div className={css["contact-info-wrapper"]}>
        <div className={css["item-icon-box"]}>
          <CiUser className={css["contact-person-icon"]} />
          <p className={css["name-text"]}>{name}</p>
        </div>
        <div className={css["item-icon-box"]}>
          <CiPhone className={css["contact-phone-icon"]} />
          <p className={css["number-text"]}>{number}</p>
        </div>
      </div>
      <button className={css["delete-button"]} onClick={handleDeleteContact}>
        Delete contact
      </button>
    </li>
  );
}