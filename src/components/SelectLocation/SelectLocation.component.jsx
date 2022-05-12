import React from 'react';
import Select, { components } from 'react-select';
import { DropDownIcon } from '../../globalStyles';
import { LocationWrapper } from './selectLocation.styles';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

const SelectLocation = () => {

  return (
    <LocationWrapper>
      <Select
        classNamePrefix='custom-select'
        isClearable
        placeholder='Locations'
        components={{ DropdownIndicator }}
        styles={{
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
          }),
        }}
      ></Select>
    </LocationWrapper>
  );
};

export default SelectLocation;
