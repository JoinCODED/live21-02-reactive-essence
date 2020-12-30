import { InputWrapper, InputIcon, Input } from "./styles";

const CurrencyInput = ({ icon, onChange, value }) => {
  const persistanceOnChange = (event) => {
    // Fix counter value in input=number
    const value = event.target.value;
    event.target.setAttribute("value", value);

    onChange(event);
  };

  return (
    <InputWrapper>
      <InputIcon>{icon}</InputIcon>
      <Input
        type="number"
        onChange={persistanceOnChange}
        value={value}
        placeholder={icon}
      />
    </InputWrapper>
  );
};

export default CurrencyInput;
