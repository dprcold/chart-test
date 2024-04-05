import React, { FC, useEffect } from 'react';
import Highcharts from 'highcharts';

import { convertDataFormat } from '../shared/utils';
import { createDonutChart } from '../config/chartConfig';
import { MockData } from '../../types/types';

const mockData: MockData = {
  total: 215,
  data: [
    {
      name: 'Зашифрованно',
      value: 133,
    },
    {
      name: 'Не зашифрованно',
      value: 82,
    },
  ],
};

const additionalData = 74;

const subtitleText = additionalData
  ? `${mockData.data[0].value} (+${additionalData})<br>${mockData.data[1].value}`
  : `${mockData.data[0].value}<br>${mockData.data[1].value}`;

export const DonutChart: FC = () => {
  const chartOptions = createDonutChart({
    type: 'pie',
    total: mockData.total,
    subtitleText: subtitleText,
    data: convertDataFormat(mockData.data, mockData.total),
  });

  useEffect(() => {
    Highcharts.chart('donut-container', chartOptions);
  }, [additionalData]);

  return <div id="donut-container" style={{ height: '300px' }} />;
};
