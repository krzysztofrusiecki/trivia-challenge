import styled from 'styled-components';

import appTheme from 'src/theme';
import { ReactComponent as LogoImage } from 'src/assets/logo.svg';

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

  @media (max-width: ${appTheme.breakpoints.small}px) {
    width: 319px;
  }
`;

export const MainHeader = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${appTheme.breakpoints.small}px) {
    width: 372px;
  }
`;

export const StyledLogo = styled(LogoImage)`
  width: 100%;
  height: 400px;

  & rect {
    width: 100%;
    height: 400px;
  }

  @media (max-width: ${appTheme.breakpoints.small}px) {
    width: 372px;
    height: 248px;

    & rect {
      width: 372px;
      height: 248px;
    }
  }
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
