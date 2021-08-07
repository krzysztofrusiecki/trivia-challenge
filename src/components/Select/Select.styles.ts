import styled from 'styled-components';

interface SelectOptionProps {
  isActive: boolean;
}

export const SelectWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(4.5)};
`;

export const LabelWrapper = styled.div`
  width: 100%;
`;

export const SelectPlaceholderWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SelectPlaceholder = styled.div`
  height: 78px;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(2.75)};
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.palette.white}`};
  background-color: ${({ theme }) => theme.palette.transparent};
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const SelectOptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.palette.white}`};
  z-index: 1;
  overflow: hidden;
`;

export const SelectOption = styled.div<SelectOptionProps>`
  width: 100%;
  height: 70px;
  padding-left: ${({ theme }) => theme.spacing(2.75)};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  transition: background-color 0.2s linear;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.blueHover : theme.palette.transparent};

  &:hover {
    background-color: ${({ theme }) => theme.palette.blueHover};
  }
`;

export const StyledArrowDownIcon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40px;
  right: ${({ theme }) => theme.spacing(2.75)};
  cursor: pointer;
  border-radius: 10px;
  transform: translateY(-50%);
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.palette.blueHover};
  }
`;

export const StorybookStyledLabel = styled.div`
  height: 30px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.rose};
`;
