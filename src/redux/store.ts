import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { chatsApi } from "./services/chats";
// import chatsConversationsReducer from "./features/chatsConversationsSlice";
import { usersApi } from "./services/user.service";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer
    // [chatsApi.reducerPath]: chatsApi.reducer,
    // botConversation: BotConversationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(chatsApi.middleware, modelsApi.middleware),
    getDefaultMiddleware().concat(usersApi.middleware),

});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
