import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_TOKEN, BASE_URL} from '../common/constants';

interface ApiState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: ApiState = {
  loading: false,
  error: null,
  data: null,
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
    console.error('getDailyCityWeather', data);
    return data;
  },
);

export const getForecastWeather = createAsyncThunk(
  'api/getForecastWeather',
  async ({city, days}: {city: string; days: number}, thunkAPI) => {
    try {
      const {data} = await axios.get(
        `${BASE_URL}forecast.json?key=${API_TOKEN}&q=${city}&days=${days}&aqi=yes&alerts=yes`,
        {
          headers: {
            Authorization: '9220c06593a34b33b04213459232211',
          },
        },
      );

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response.data);
    }
  },
);

const apiSlice = createSlice({
  name: 'api',
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

export default apiSlice.reducer;
