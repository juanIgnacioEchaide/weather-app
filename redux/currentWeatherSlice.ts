import {
  createSlice,
  createAsyncThunk,
  DefaultCurrentWeather,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_TOKEN, BASE_URL} from '../common/constants';
import {WeatherData} from 'common';

interface CurrentWeatherState {
  loading: boolean;
  error: string | null;
  data: WeatherData;
}

const initialState: CurrentWeatherState = {
  loading: false,
  error: null,
  data: DefaultCurrentWeather,
};

export const getDailyCityWeather = createAsyncThunk(
  'api/getDailyCityWeather',
  async (city: string) => {
    const {data} = await axios.get(
      `${BASE_URL}current.json?key=${API_TOKEN}&q=${city}&aqi=no`,
      {
        headers: {
          Authorization: '9220c06593a34b33b04213459232211',
        },
      },
    );
    return data;
  },
);

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDailyCityWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDailyCityWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getDailyCityWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default currentWeatherSlice.reducer;
