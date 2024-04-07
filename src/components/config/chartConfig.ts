import Highcharts from 'highcharts';
import HighchartsSankey from 'highcharts/modules/sankey';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsPatternFill from 'highcharts/modules/pattern-fill';

import { CreateChartOptionsArgs, DonutChartOptions } from '../../types/types';

import { darkGrayColor, greenColor, grayColor, lightGrayColor, whiteColor } from './colors';

HighchartsSankey(Highcharts);
HighchartsExporting(Highcharts);
HighchartsPatternFill(Highcharts);

const H = Highcharts;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
//влезаем в прототип так как linkColorMode: 'gradient' плохо работает на ховер графика
H.seriesTypes.sankey.prototype.pointAttribs = function (point: any, state: any) {
  let opacity = this.options.linkOpacity,
    color = point.color;

  if (state) {
    opacity = this.options.states[state].linkOpacity || opacity;
    color = this.options.states[state].color || point.color;
  }

  return {
    fill: point.isNode
      ? color
      : {
          linearGradient: {
            x1: 0,
            x2: 1,
            y1: 0,
            y2: 0,
          },
          stops: [
            [0, H.color(color).setOpacity(opacity).get()],
            [1, H.color(point.toNode.color).setOpacity(opacity).get()],
          ],
        },
  };
};

export const createSankeyChart = ({
  chartType,
  title,
  text,
  data,
  nodes,
}: CreateChartOptionsArgs): Highcharts.Options => {
  return {
    chart: {
      type: chartType,
      backgroundColor: darkGrayColor,
    },
    title: {
      text: title || '',
    },
    subtitle: {
      text: text || '',
    },
    credits: {
      enabled: false,
    },
    accessibility: {
      point: {
        valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.',
      },
    },
    tooltip: {
      pointFormat: '{point.fromNode.name} \u2192 {point.toNode.name}: {point.weight:.2f} quads',
      enabled: false,
    },
    plotOptions: {
      sankey: {
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '20px',
            color: whiteColor,
            textOutline: 'none',
            fontWeight: 'lighter',
          },
          padding: 10,
        },
        nodeWidth: 25,
        nodePadding: 5,
      },
    },
    series: [
      {
        keys: ['from', 'to', 'weight'],
        nodes: nodes,
        data: data,
        type: 'sankey',
        dataLabels: {
          nodeFormatter: function () {
            const point: any = this.point;
            return point.name + '<br><div style="text-align: right; font-size: 20px;">' + point.sum + '%</div>';
          },
        },
      },
    ],
  };
};

export const createDonutChart = ({ type, total, subtitleText, data }: DonutChartOptions): Highcharts.Options => {
  return {
    chart: {
      type: type,
      plotShadow: false,
      backgroundColor: darkGrayColor,
    },
    title: {
      text: total.toString(),
      align: 'center',
      verticalAlign: 'middle',
      y: 0,
      style: {
        color: whiteColor,
        fontSize: '42px',
      },
    },
    subtitle: {
      text: subtitleText,
      align: 'center',
      verticalAlign: 'middle',
      y: 20,
      style: {
        color: lightGrayColor,
        fontSize: '16px',
        textIndent: '-2px',
      },
      useHTML: true,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      enabled: false,
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        borderRadius: 0,
        borderWidth: 0,
        allowPointSelect: true,
        cursor: 'pointer',
        innerSize: '80%',
        dataLabels: {
          enabled: true,
          distance: 20,
          format: '{point.percentage:.1f} %',
          style: {
            fontSize: '20px',
            color: whiteColor,
            textOutline: 'none',
          },
          connectorColor: whiteColor,
          connectorWidth: 3,
          connectorPadding: 10,
        },
        showInLegend: true,
        startAngle: 158.3,
        colors: [greenColor, grayColor],
      },
    },
    series: [
      {
        allowPointSelect: false,
        type: 'pie',
        name: 'total',
        data: data,
      },
    ],
    legend: {
      itemStyle: {
        color: whiteColor,
        fontSize: '16px',
      },
    },
  };
};
