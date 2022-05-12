import React from 'react';
import Select, { components } from 'react-select';
import { DropDownIcon } from '../../globalStyles';
import { AuthorWrapper } from './selectAuthor.styles';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

const SelectAuthor = () => {
  return (
    <AuthorWrapper>
      <Select
        classNamePrefix='custom-select'
        isClearable
        placeholder='Actors'
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
