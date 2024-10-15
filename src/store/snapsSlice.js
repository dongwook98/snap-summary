import { createSlice } from '@reduxjs/toolkit';

const snapsSlice = createSlice({
  name: 'snaps',
  initialState: [],
  reducers: {
    addSnap: (state, action) => {
      state.push(action.payload);
    },
    deleteSnap: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
    updateSnap: (state, action) => {
      const { id, title, content, summary } = action.payload;
      const snap = state.find((snap) => snap.id === id);
      if (snap) {
        snap.title = title;
        snap.content = content;
        snap.summary = summary;
      }
    },
  },
});

export const { addSnap, deleteSnap, updateSnap } = snapsSlice.actions;
export default snapsSlice.reducer;
