import React from 'react';
import {
  SelectAuthor,
  SelectCreatedDate,
  SelectLocation,
  SelectName,
} from '../../components';
import { Section } from './searchForm.styles';

const SearchForm = () => {
  return (
    <Section>
      <form>
        <SelectName />
        <SelectAuthor />
        <SelectLocation />
        <SelectCreatedDate />
      </form>
    </Section>
  );
};

export default SearchForm;
