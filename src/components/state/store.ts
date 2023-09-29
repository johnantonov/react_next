import { configureStore } from "@reduxjs/toolkit";
import waitlistReducer, { logger } from './waitlistSlice';


const store = configureStore({
  reducer: {
    waitlist: waitlistReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
  devTools: process.env.NODE_ENV !== 'production'

})


export default store