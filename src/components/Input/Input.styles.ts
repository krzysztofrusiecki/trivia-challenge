import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LabelWrapper = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  height: 78px;
  width: 100%;
  padding-left: 18px;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.palette.white}`};
  background-color: ${({ theme }) => theme.palette.transparent};
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  outline: none;
`;

export const StorybookStyledLabel = styled.div`
  height: 30px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.rose};
`;
