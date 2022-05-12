import React from 'react';
import { Article, Img, Section, H3, Ul, Li } from './painting.styles';

const Painting = ({ authorId, created, imageUrl, name }) => {
  return (
    <Article>
      <Img
        src={`https://test-front.framework.team${imageUrl}`}
        loading='lazy'
        decoding='async'
        alt={name}
        height='360'
        width='275'
      />
      <Section>
        <H3>{name}</H3>
        <Ul>
          <Li>
            <b>Actor: </b>
            data
          </Li>
          <Li>
            <b>Created:</b> {created}
          </Li>
          <Li>
            <b>Location: </b>
            data
          </Li>
        </Ul>
      </Section>
    </Article>
  );
};

export default Painting;
