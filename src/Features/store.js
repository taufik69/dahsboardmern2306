import { configureStore } from "@reduxjs/toolkit";
import { exclusiveApi } from "./Api/exclusiveApi";

export const store = configureStore({
  reducer: {
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exclusiveApi.middleware),
});
