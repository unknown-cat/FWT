import React from 'react';
import {
  SelectAuthor,
  SelectCreatedDate,
  SelectLocation,
  SelectName,
} from '../../components';
import { Section, FormList } from './searchForm.styles';

const SearchForm = () => {
  return (
    <Section>
      <FormList>
        <SelectName />
        <SelectAuthor />
        <SelectLocation />
        <SelectCreatedDate />
      </FormList>
    </Section>
  );
};

export default SearchForm;
