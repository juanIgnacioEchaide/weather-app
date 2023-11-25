import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import {TodayForecastTemplate} from '../../../components/template';

describe('TodayForecastTemplate component', () => {
  it('renders DailyContainer, PairContainers, and HourlyCarousel', () => {
    const {getAllByTestId} = render(<TodayForecastTemplate />);

    const pairContainers = getAllByTestId('pair-container');

    expect(pairContainers.length).toBe(2); // Assuming there are two pair containers
  });
});
