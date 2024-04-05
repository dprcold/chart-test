import React, { FC, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsSankey from 'highcharts/modules/sankey';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

import { createSankeyChart } from '../config/chartConfig';
import { DataTuple } from '../../types/types';

import style from './SankeyChart.module.scss';

HighchartsSankey(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsAccessibility(Highcharts);

Highcharts.setOptions({
  exporting: {
    enabled: false,
  },
});

const nodes = [
  { id: 'Медведи', color: 'rgba(151, 151, 151, 0.9)' },
  { id: 'Ежи', color: 'rgba(119, 149, 77, 0.9)' },
  { id: 'Мёд', color: 'rgba(139, 117, 186, 0.9)' },
  { id: 'Малина', color: 'rgba(221, 175, 211, 0.9)' },
  { id: 'Яблоки', color: 'rgba(126, 184, 191, 0.9)' },
];

const data: DataTuple[] = [
  ['Медведи', 'Мёд', 38],
  ['Медведи', 'Малина', 12],
  ['Медведи', 'Яблоки', 15],
  ['Ежи', 'Мёд', 12],
  ['Ежи', 'Малина', 8],
  ['Ежи', 'Яблоки', 15],
];

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
