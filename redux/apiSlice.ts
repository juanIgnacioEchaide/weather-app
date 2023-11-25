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

export const getDailyCityForecast = createAsyncThunk(
  'api/getDailyCityForecast',
  async (city: string) => {
    const {data} = await axios.get(
      `${BASE_URL}current.json?key=${API_TOKEN}&q=${city}&aqi=no`,
      {
        headers: {
          Authorization: '9220c06593a34b33b04213459232211',
        },
      },
    );
    console.error('getDailyCityForecast', data);
    return data;
  },
);

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDailyCityForecast.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDailyCityForecast.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getDailyCityForecast.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default apiSlice.reducer;
