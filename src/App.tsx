import React, { FC } from 'react';

import { SankeyChart } from './components/SankeyChart/SankeyChart';
import { DonutChart } from './components/DonutChart/DonutChart';

export const App: FC = () => {
  return (
    <>
      <SankeyChart />
      <DonutChart />
    </>
  );
};
