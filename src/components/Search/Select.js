import { SelectStyled, SelectWrapper, Label } from './Select.styled';


export const SelectComponent = ({ onChange, options, value }) => {
  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : '';
  };

  return (
    <SelectWrapper>
      <Label htmlFor="select">Search by:</Label>
      <SelectStyled
        id="select"
        value={defaultValue(options, value)}
        onChange={value => onChange(value)}
        options={options}
        classNamePrefix={'Select'}
     />
    </SelectWrapper>
  );
};
