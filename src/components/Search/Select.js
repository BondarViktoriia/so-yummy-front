import { SelectStyled, SelectWrapper } from './Select.styled';

export const SelectComponent = ({ onChange, options, value }) => {
  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : '';
  };

  return (
    <SelectWrapper>
      <label htmlFor="select">Search by:</label>
      <SelectStyled
        id="select"
        value={defaultValue(options, value)}
        onChange={value => onChange(value)}
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: state.isFocused ? 0 : state.border,
            boxShadow: state.isFocused ? 0 : 0,
            // backgroundColor: state.isFocused ? 'lightGrey' : 'white',
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused ? 'lightGrey' : 'white',
          }),
        }}
      />
    </SelectWrapper>
  );
};
