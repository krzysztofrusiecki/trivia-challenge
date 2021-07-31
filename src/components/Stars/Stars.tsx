import React from 'react';
import _range from 'lodash/range';
import _map from 'lodash/map';

import { StarsProps, StarVariant } from 'src/interfaces/Stars';

import { StarsWrapper, StyledStarIcon } from './Stars.styles';

const Stars: React.FC<StarsProps> = ({ filledNumber, totalNumber = 10 }) => (
  <StarsWrapper data-testid="stars">
    {_map(_range(totalNumber), (star) => {
      const isFilled = star <= filledNumber - 1;
      const variant = isFilled ? StarVariant.FILLED : StarVariant.UNFILLED;

      return (
        <StyledStarIcon
          key={`${isFilled ? 'filled' : 'unfilled'}-${star}`}
          variant={variant}
          data-testid={`star-${star + 1}`}
        />
      );
    })}
  </StarsWrapper>
);

export default Stars;
