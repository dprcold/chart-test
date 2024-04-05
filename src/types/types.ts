export interface Node {
  id: string;
  color: string;
  column?: number;
}

export type DataTuple = [string, string, number];

export interface CreateChartOptionsArgs {
  chartType: 'sankey';
  title: string;
  text: string;
  data: DataTuple[];
  nodes: Node[];
}

export interface DonutChartData {
  name: string;
  y: number;
}

export interface DonutChartOptions {
  type: 'pie' | 'donut';
  total: string | number;
  subtitleText: string;
  data: DonutChartData[];
}

export interface DataItem {
  name: string;
  value: number;
}

export interface MockData {
  total: number;
  data: DataItem[];
}
