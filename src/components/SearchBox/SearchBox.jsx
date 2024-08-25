import css from "./SearchBox.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.container}>
      <label htmlFor="searchbox" className={css.label}>
        <FaSearch size="12" /> Find contacts by name
      </label>
      <input
        type="text"
        name="searchBox"
        id="searchbox"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
