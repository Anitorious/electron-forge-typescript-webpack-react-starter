import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: auto 0;
  padding: 2rem;
`;

export function App() {
  return (
    <Container>Hello world from React! Now with hot-reload!</Container>
  );
}