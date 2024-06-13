import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dateStart: null,
  dateEnd: null,
} as { dateStart: Date | null; dateEnd: Date | null };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.dateStart = action.payload.dateStart;
      state.dateEnd = action.payload.dateEnd;
    },
  },
});

export const { setDate } = slice.actions;
export default slice.reducer;
