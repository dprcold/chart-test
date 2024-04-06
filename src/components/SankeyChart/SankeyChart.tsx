import React, { FC, useEffect } from 'react';
import Highcharts from 'highcharts';

import { createSankeyChart } from '../config/chartConfig';
import { data, nodes } from '../../mockData/mockData';

import style from './SankeyChart.module.scss';

Highcharts.setOptions({
  exporting: {
    enabled: false,
  },
});

const chartOptions = createSankeyChart({
  chartType: 'sankey',
  title: '',
  text: '',
  data: data,
  nodes: nodes,
});

export const SankeyChart: FC = () => {
  useEffect(() => {
    Highcharts.chart('sankey-container', chartOptions);
  }, []);

  return (
    <figure className={style.highchartsFigure}>
      <div id="sankey-container" style={{ height: '300px' }} />
    </figure>
  );
};
