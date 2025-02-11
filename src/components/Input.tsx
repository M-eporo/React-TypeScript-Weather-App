import styles from "../styles/input.module.css";
type PropsType = {
  inputType: string;
  value: string;
  name: string;
  id: string;
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  inHeader: boolean
};
const Input = (
  { inputType, value, name, id, placeholder, onChange, inHeader }: PropsType
) => {
  return (
    <input
      className={`${styles.input} ${inHeader ? styles.headerInput : ""}`}
      type={inputType}
      value={value}
      onChange={e => onChange(e.target.value)}
      name={ name }
      id={ id }
      placeholder={placeholder}
      required
    />
  );
};

export default Input;