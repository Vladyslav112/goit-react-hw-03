import css from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

export default function Contact({ item, onDelete }) {
  return (
    <li className={css.container}>
      <div className={css.containerData}>
        <div>
          <AiOutlineUser className={css.icon} />
          <span className={css.itemEl}>{item.name}</span>
        </div>
        <div>
          <FiPhone />
          <span className={css.itemEl}>{item.number}</span>
        </div>
      </div>
      <button className={css.button} onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
}
