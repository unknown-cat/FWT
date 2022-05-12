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

const SelectCreatedDate = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <DropDownContainer>
        <DropDownHeading onClick={() => setIsOpen(!isOpen)}>
          <p className='title'>Created</p>
          {!isOpen ? <DropDownIconUp /> : <DropDownIconDown />}
        </DropDownHeading>
        {isOpen ? (
          <DropDownInputContainer>
            <label htmlFor='from'></label>
            <Input
              type='number'
              placeholder='from'
              autoComplete='off'
              name='from'
            />
            <div className='line'></div>
            <label htmlFor='before'></label>
            <Input
              type='number'
              name='before'
              placeholder='before'
              autoComplete='off'
            />
          </DropDownInputContainer>
        ) : null}
      </DropDownContainer>
    </Wrapper>
  );
};

export default SelectCreatedDate;
