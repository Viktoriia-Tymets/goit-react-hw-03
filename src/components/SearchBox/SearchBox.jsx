import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
