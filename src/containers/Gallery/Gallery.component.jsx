import React from 'react';
import { Painting } from '../../components';
import { Section } from './gallery.styles';
import { useGlobalContext } from '../../context';

const Gallery = () => {
  const { isLoading, pictures } = useGlobalContext();

  if (isLoading) {
    return (
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <h2 style={{ color: 'silver', fontSize: '3rem' }}>Loading...</h2>
      </section>
    );
  }

  return (
    <Section>
      {pictures?.map((painting) => (
        <Painting key={painting.id} {...painting} />
      ))}
    </Section>
  );
};

export default Gallery;
