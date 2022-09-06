import styled from 'styled-components';

export const Display = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;
    height: 35%;
    border-radius: 0.75rem 0.75rem 0 0;
    background: ${(props) => props.theme.Colors.displayColor};
`;

export const CurrentNum = styled.div`
    padding-top: 10%;
    width: 95%;
  font-size: 2rem;
  color: ${(props) => props.theme.Colors.transparentWhite};
  text-align: right;  
`;

export const ResultNum = styled.div`
    padding-top: 5%;
    width: 95%;
  font-size: 3rem;
  color: ${(props) => props.theme.Colors.lightGrey};
  text-align: right;  
`;
