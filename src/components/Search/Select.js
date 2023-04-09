
import {SelectStyled} from './Select.styled'

export const SelectComponent = ({ onChange, options, value }) => {
  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : '';
  };

  return (
    <div>
      <label for="select">Search by:</label>
      <SelectStyled
        id="select"
        value={defaultValue(options, value)}
        onChange={value => onChange(value)}
        options={options}
      />
    </div>
  );
};


