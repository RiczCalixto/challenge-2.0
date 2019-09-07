import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    border-radius: 50%;
    height: 100%;
    width: 100%;

    @media (min-width: 768px) {
      border-radius: 20%;
      max-width: 126px;
      max-height: 150px;
      width: 100%;
    }
  }

  div {
    max-width: 126px;
    height: 150px;
    margin: 50px 50px 50px 50px;
    flex-direction: column;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
