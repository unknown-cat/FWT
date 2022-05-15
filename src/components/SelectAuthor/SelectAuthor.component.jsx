import React from 'react';
import Select, { components } from 'react-select';
import { DropDownIcon } from '../../globalStyles';
import { AuthorWrapper } from './selectAuthor.styles';
import { useGlobalContext } from '../../context';
import { handleChange } from '../../utils/utils';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  );
};

const SelectAuthor = () => {
  const { selectAuthor, setAuthorId, setPage } = useGlobalContext();

  return (
    <AuthorWrapper>
      <Select
        classNamePrefix='custom-select'
        onChange={(e) => {
          handleChange(e, setAuthorId, '&authorId=')
          setPage(0);
        }}
        styles={{
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
          }),
        }}
        isClearable
        options={selectAuthor}
        components={{ DropdownIndicator }}
        placeholder='Actors'
      ></Select>
    </AuthorWrapper>
  );
};

export default SelectAuthor;
