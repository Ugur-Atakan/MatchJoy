import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  Tokens,
  UserInterface,
  LoginCredentials,
  RegisterCredentials,
} from '../../../types';
import baseAPI from '../../http/baseAPI';

interface UserState {
  isLoggedIn: boolean;
  userData: UserInterface;
  isLoading: boolean;
  tokens: Tokens;
}

const initialState: UserState = {
  isLoggedIn: false,
  isLoading: false,
  userData: {
    id: '',
    email: '',
    phone: '',
    fullName: '',
    username: '',
    birthDate: '',
    profile_image: '',
    provider: 0,
    notifications: {
      sound: false,
      vibration: false,
      sms: false,
    },
    isEmailVerified: false,
    fcm_id: '',
    role: '',
    invitationCode: '',
    point: 0,
  },
  tokens: {
    access: {
      token: '',
      expires: '',
    },
    refresh: {
      token: '',
      expires: '',
    },
  },
};

export const loginUser = createAsyncThunk(
  'user/login',
  async (userData: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await baseAPI.post('auth/sign-in', userData);

      if (!response) {
        throw new Error('Login failed');
      }
      const user = response.data.user;
      return user;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData: RegisterCredentials, { rejectWithValue }) => {
    try {
      const response = await baseAPI.post('auth/sign-up', userData);

      if (!response) {
        throw new Error('Register failed');
      }
      const data = response.data.user;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInterface>) => {
      state.userData = action.payload;
    },
    logOut: state => {
      state.userData = initialState.userData;
      state.isLoggedIn = false;
    },
    fakeLogin: (state, action: PayloadAction<UserInterface>) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    // Login
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload.user;
      state.tokens = action.payload.tokens;
      state.isLoading = false;
    });
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, state => {
      state.isLoading = false;
    });
    // Register
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload.user;
      state.tokens = action.payload.tokens;
      state.isLoading = false;
    });
    builder.addCase(registerUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.rejected, state => {
      state.isLoading = false;
    });
  },
});
export const { login, logOut, fakeLogin } = userReducer.actions;
export default userReducer.reducer;
