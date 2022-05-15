import React from 'react';
import Select, { components } from 'react-select';
import { DropDownIcon } from '../../globalStyles';
import { LocationWrapper } from './selectLocation.styles';
import { useGlobalContext } from '../../context';
import { handleChange } from '../../utils/utils';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

const SelectLocation = () => {
  const { selectLocation, setLocationId, setPage } = useGlobalContext();

  return (
    <LocationWrapper>
      <Select
        classNamePrefix='custom-select'
        onChange={(e) => {
          handleChange(e, setLocationId, '&locationId=');
          setPage(0);
        }}
        styles={{
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
          }),
        }}
        isClearable
        options={selectLocation}
        components={{ DropdownIndicator }}
        placeholder='Locations'
      ></Select>
    </LocationWrapper>
  );
};

export default SelectLocation;
