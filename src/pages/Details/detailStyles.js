import styled from 'styled-components';

export const Container = styled.div`
  div,
  h2 {
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    border-radius: 20%;
    padding: 60px;
    max-height: 400px;
  }
  ul {
    font-size: 20px;
  }
  li {
    list-style: none;
    padding: 10px;
  }
  a {
    font-size: 20px;
    color: white;
  }
`;
