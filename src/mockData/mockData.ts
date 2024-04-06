import { DataTuple, MockData, Node } from '../types/types';

export const nodes: Node[] = [
  { id: 'Медведи', color: 'rgba(151, 151, 151, 0.9)' },
  { id: 'Ежи', color: 'rgba(119, 149, 77, 0.9)' },
  { id: 'Мёд', color: 'rgba(139, 117, 186, 0.9)' },
  { id: 'Малина', color: 'rgba(221, 175, 211, 0.9)' },
  { id: 'Яблоки', color: 'rgba(126, 184, 191, 0.9)' },
];

export const data: DataTuple[] = [
  ['Медведи', 'Мёд', 38],
  ['Медведи', 'Малина', 12],
  ['Медведи', 'Яблоки', 15],
  ['Ежи', 'Мёд', 12],
  ['Ежи', 'Малина', 8],
  ['Ежи', 'Яблоки', 15],
];

export const mockData: MockData = {
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

export const additionalData = 74;
