import { DataItem } from '../../types/types';

export const convertDataFormat = (data: DataItem[]) => {
  const totalPercentage = data.reduce((sum, item) => sum + item.value, 0);
  return data.map((item) => ({
    name: item.name,
    y: Math.round((item.value / totalPercentage) * 100),
  }));
};
