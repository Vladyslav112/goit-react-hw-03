import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.container}>
      {contacts.map((item) => (
        <Contact key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}
