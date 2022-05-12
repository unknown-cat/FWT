import React from 'react';
import {
  SelectAuthor,
  SelectCreatedDate,
  SelectLocation,
  SelectName,
} from '../../components';

const SearchForm = () => {
  return (
    <div>
      <form>
        <SelectName />
        <SelectAuthor />
        <SelectLocation />
        <SelectCreatedDate />
      </form>
    </div>
  );
};

export default SearchForm;
