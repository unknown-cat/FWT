import React from 'react';
import Select, { components } from 'react-select';
import { DropDownIcon } from '../../globalStyles';
import { LocationWrapper } from './selectLocation.styles';
import { useGlobalContext } from '../../context';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

const SelectLocation = () => {
  const { selectLocation } = useGlobalContext();

  return (
    <LocationWrapper>
      <Select
        classNamePrefix='custom-select'
        isClearable
        placeholder='Locations'
        options={selectLocation}
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
