import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const postsInitialState = {
  posts: [],
};
export const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    addPost: {
      reducer(state, { payload }) {
        state.posts.push(payload);
      },
      prepare({
        photoName,
        locationName,
        photoUri,
        commentsNumber = 0,
        location,
      }) {
        return {
          payload: {
            id: uuid.v4(),
            name: photoName,
            imageUrl: photoUri,
            location: locationName,
            commentsNumber,
            coords: location,
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
