import React from 'react';

import { SankeyChart } from './components/SankeyChart/SankeyChart';
import { DonutChart } from './components/DonutChart/DonutChart';

export const App = () => {
  return (
    <>
      <SankeyChart />
      <DonutChart />
    </>
  );
};
