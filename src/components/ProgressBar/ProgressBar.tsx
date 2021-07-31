import React from 'react';

import { ProgressBarProps } from 'src/interfaces/ProgressBar';
import { FilledProgressBar, WholeProgressBar } from './ProgressBar.styles';

const ProgressBar: React.FC<ProgressBarProps> = ({
  filledNumber,
  totalNumber = 10,
}) => {
  const filledWidth =
    filledNumber > totalNumber ? 100 : (filledNumber / totalNumber) * 100;

  return (
    <WholeProgressBar data-testid="progress-bar">
      {filledWidth ? (
        <FilledProgressBar
          width={`${filledWidth}%`}
          data-testid="filled-progress-bar"
        />
      ) : null}
    </WholeProgressBar>
  );
};

export default ProgressBar;
