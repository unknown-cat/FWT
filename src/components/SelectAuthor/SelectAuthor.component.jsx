import React from 'react';
import Select, { components } from 'react-select';
import { DropDownIcon } from '../../globalStyles';
import { AuthorWrapper } from './selectAuthor.styles';
import { useGlobalContext } from '../../context';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

const SelectAuthor = () => {
  const { selectAuthor } = useGlobalContext();

  return (
    <AuthorWrapper>
      <Select
        classNamePrefix='custom-select'
        isClearable
        placeholder='Actors'
        options={selectAuthor}
        components={{ DropdownIndicator }}
        styles={{
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
          }),
        }}
      ></Select>
    </AuthorWrapper>
  );
};

export default SelectAuthor;
