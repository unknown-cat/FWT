import React from 'react';
import { Article, Img, Section, H3, Ul, Li } from './painting.styles';
import { useGlobalContext } from '../../context';

const Painting = ({ authorId, created, imageUrl, name }) => {
  const { selectAuthor, selectLocation } = useGlobalContext();

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
            {selectAuthor.map((author) =>
              author.value === authorId ? author.label : null
            )}
          </Li>
          <Li>
            <b>Created:</b> {created}
          </Li>
          <Li>
            <b>Location: </b>
            {selectLocation.map((location) =>
              location.value === authorId ? location.label : null
            )}
          </Li>
        </Ul>
      </Section>
    </Article>
  );
};

export default Painting;
