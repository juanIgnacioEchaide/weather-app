import {AxiosResponse} from 'axios';
import {client} from './api';
import {API_TOKEN} from '../common';

export const getDailyCityForecast = async (
  city: string,
): Promise<AxiosResponse<{}>> => {
  const {data} = await client.get(
    `forecast.json?key=${API_TOKEN}&q=${city}&days=1&aqi=no&alerts=no`,
  );

  return data;
};
