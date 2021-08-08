import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.blue};
`;
