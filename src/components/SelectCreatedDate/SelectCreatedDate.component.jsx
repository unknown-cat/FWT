import React, { useState } from 'react';
import {
  DropDownContainer,
  DropDownHeading,
  DropDownIconUp,
  DropDownIconDown,
  DropDownInputContainer,
  Input,
} from './selectCreatedDate.styles';
import { Wrapper } from '../../globalStyles';
import { useGlobalContext } from '../../context';
import { handleChange } from '../../utils/utils';

const SelectCreatedDate = () => {
  const { setCreatedBefore, setCreatedFrom, setPage } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <DropDownContainer>
        <DropDownHeading onClick={() => setIsOpen(!isOpen)}>
          <p className='title'>Created</p>
          {!isOpen ? <DropDownIconUp /> : <DropDownIconDown />}
        </DropDownHeading>
        <DropDownInputContainer className={isOpen ? 'open' : 'close'}>
          <label htmlFor='from'></label>
          <Input
            onChange={(e) => {
              handleChange(e.target, setCreatedBefore, '&created_gte=');
              setPage(0);
            }}
            type='number'
            name='from'
            autoComplete='off'
            placeholder='from'
          />
          <div className='line'></div>
          <label htmlFor='before'></label>
          <Input
            onChange={(e) => {
              handleChange(e.target, setCreatedFrom, '&created_lte=');
              setPage(0);
            }}
            type='number'
            name='before'
            autoComplete='off'
            placeholder='before'
          />
        </DropDownInputContainer>
      </DropDownContainer>
    </Wrapper>
  );
};

export default SelectCreatedDate;
