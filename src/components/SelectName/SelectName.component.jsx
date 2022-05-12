import React from 'react';
import { Input } from './selectName.styles';
import { Wrapper } from '../../globalStyles';

const SelectName = () => {
  return (
    <Wrapper>
      <label htmlFor='name'></label>
      <Input
        id='name'
        type='text'
        name='name'
        placeholder='Name'
        autoComplete='off'
      />
    </Wrapper>
  );
};

export default SelectName;
