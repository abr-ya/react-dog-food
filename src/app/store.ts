import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/authSlice';
// import noteReducer from '../features/note/noteSlice';
// import ticketReducer from '../features/ticket/ticketSlice';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    // note: noteReducer,
    // ticket: ticketReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
