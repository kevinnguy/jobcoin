import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundColor: 'white',
  backgroundGradientFrom: 'white',
  backgroundGradientTo: 'white',
  decimalPlaces: 2,
  color: () => 'black',
  labelColor: () => 'black',
  propsForDots: {
    r: '0',
  },
};

export const Chart = ({ data }: { data: number[] }) => {
  if (data.length < 2) {
    return null;
  }

  return (
    <LineChart
      data={{
        labels: [],
        datasets: [
          {
            data,
            color: () => 'black',
            strokeWidth: 4,
          },
        ],
      }}
      width={screenWidth}
      height={256}
      withVerticalLabels={false}
      chartConfig={chartConfig}
      bezier
    />
  );
};
