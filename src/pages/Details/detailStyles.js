import styled from 'styled-components';

export const Container = styled.div`
  height: 20%;
  padding: 0.5%;
  text-align: center;

  li {
    list-style: none;
    display: inline-block;
    justify-content: space-between;
  }

  img {
    border-radius: 20%;
    max-width: 230;
    max-height: 230px;
    width: auto;
    height: auto;
  }
`;
