import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {StepCounterData} from '../../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StepCounterSlice {
  isCounting: boolean;
  stepData: StepCounterData;
}

interface StepDataTime {
  date: string;
  stepData: StepCounterData;
}

const initialState: StepCounterSlice = {
  isCounting: false,
  stepData: {
    dailyGoal: '',
    steps: 0,
    stepsString: '',
    calories: '',
    startDate: '',
    endDate: '',
    distance: '',
  },
};

export const saveStepData = createAsyncThunk(
  'stepCounter/saveStepData',
  async (data: StepDataTime, {rejectWithValue}) => {
    try {
      await AsyncStorage.setItem('stepData', JSON.stringify(data));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const loadStepData = createAsyncThunk(
  'stepCounter/loadStepData',
  async (_, {rejectWithValue}) => {
    try {
      const stepData = await AsyncStorage.getItem('stepData');
      if (stepData) {
        return JSON.parse(stepData);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const stepCounterReducer = createSlice({
  name: 'stepCounter',
  initialState,
  reducers: {
    setStepData: (state, action: PayloadAction<StepCounterData>) => {
      state.stepData = action.payload;
    },
  },
  extraReducers: builder => {
    // Login
    builder.addCase(saveStepData.fulfilled, (state, action) => {
      // TODO: Add action logic
      console.log('State ', state.stepData);
      console.debug('Payload', action.payload);
    });
    builder.addCase(saveStepData.rejected, (state, action) => {
      // TODO: Add action logic
      console.log('Error saving step data', action.error);
    });

    builder.addCase(loadStepData.fulfilled, (state, action) => {
      state.stepData = action.payload;
      console.log('State ', state.stepData);
      console.debug('Payload', action.payload);
    });
    builder.addCase(loadStepData.rejected, (state, action) => {
      console.log('Error loading step data', action.error);
    });
  },
});
export const {setStepData} = stepCounterReducer.actions;
export default stepCounterReducer.reducer;
