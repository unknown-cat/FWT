import React from 'react';
import { Input } from './selectName.styles';
import { Wrapper } from '../../globalStyles';
import { useGlobalContext } from '../../context';

const SelectName = () => {
  const { setName } = useGlobalContext();

  return (
    <Wrapper>
      <label htmlFor='name'></label>
      <Input
        id='name'
        type='text'
        name='name'
        placeholder='Name'
        autoComplete='off'
        onChange={(e) => setName(e.target.value)}
      />
    </Wrapper>
  );
};

export default SelectName;
