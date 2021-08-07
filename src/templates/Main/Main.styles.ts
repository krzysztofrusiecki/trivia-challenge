import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & form {
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 446px;
`;

export const MainHeader = styled.div`
  width: 707px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(14)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLabel = styled.div`
  height: 30px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.rose};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const IconContainer = styled.div`
  width: 30px;
  height: auto;
  margin-right: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
