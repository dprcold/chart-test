import { DataItem } from '../../types/types';

export const convertDataFormat = (data: DataItem[], total: number) => {
  return data.reduce<{ name: string; y: number }[]>((convertedData, item) => {
    const convertedItem = {
      name: item.name,
      y: Math.round((item.value / 100) * total),
    };
    convertedData.push(convertedItem);
    return convertedData;
  }, []);
};
