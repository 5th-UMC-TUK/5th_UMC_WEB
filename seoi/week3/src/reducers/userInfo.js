import { createSlice } from '@reduxjs/toolkit';

export const userInfo = createSlice({
  name: 'userInfo',
  initialState: {
    value: '',
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { set } = userInfo.actions;

export default userInfo.reducer;
