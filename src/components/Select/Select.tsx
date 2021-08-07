import React from 'react';
import _map from 'lodash/map';
import _find from 'lodash/find';

import { SelectProps } from 'src/interfaces/Select';
import { useComponentVisible } from 'src/utils/hooks';
import { ReactComponent as ArrowDownIcon } from 'src/assets/icons/arrow-down.svg';

import {
  LabelWrapper,
  SelectOptionsWrapper,
  SelectPlaceholder,
  SelectPlaceholderWrapper,
  SelectWrapper,
  StyledArrowDownIcon,
  SelectOption,
} from './Select.styles';

const Select: React.FC<SelectProps> = ({
  value = '',
  label = null,
  options = [],
  onChange,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible();

  const activeOption = _find(options, { id: value });

  return (
    <SelectWrapper data-testid="select-test">
      {label ? (
        <LabelWrapper data-testid="select-label-test">{label}</LabelWrapper>
      ) : null}
      <SelectPlaceholderWrapper ref={ref}>
        <SelectPlaceholder data-testid="select-value-test">
          {activeOption?.label}
        </SelectPlaceholder>
        {isComponentVisible ? (
          <SelectOptionsWrapper data-testid="options-test">
            {_map(options, (option) => (
              <SelectOption
                key={option.id}
                isActive={value === option.id}
                data-testid={`test-option-${option.id}`}
                onClick={() => {
                  onChange(option.id);
                  setIsComponentVisible(false);
                }}
              >
                {option.label}
              </SelectOption>
            ))}
          </SelectOptionsWrapper>
        ) : null}
        <StyledArrowDownIcon
          data-testid="select-arrow-test"
          onClick={() => setIsComponentVisible(!isComponentVisible)}
        >
          <ArrowDownIcon
            style={isComponentVisible ? { transform: 'rotate(180deg)' } : {}}
          />
        </StyledArrowDownIcon>
      </SelectPlaceholderWrapper>
    </SelectWrapper>
  );
};

export default Select;
