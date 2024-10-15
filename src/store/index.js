import { configureStore } from '@reduxjs/toolkit';
import snapsReducer from './snapsSlice';

const store = configureStore({
  reducer: {
    snaps: snapsReducer,
  },
});

export default store;
