import {createSlice} from '@reduxjs/toolkit';

interface State {
  user: any;
  authToken: any;
}

const initialState: State = {
  user: null,
  authToken: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const {setUser, setAuthToken} = userReducer.actions;

export default userReducer.reducer;
