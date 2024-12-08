import { createSlice } from '@reduxjs/toolkit';
import { decodeMessage, encodeMessage } from '../thunks/messageThunks.ts';
import { RootState } from '../../app/store.ts';

interface IMessageState {
  encoded: string;
  decoded: string;
  loading: boolean;
}

const initialState: IMessageState = {
  encoded: '',
  decoded: '',
  loading: false,
}

export const selectEncoded = (state: RootState) => state.message.encoded;
export const selectDecoded = (state: RootState) => state.message.decoded;
export const selectEncodedLoading = (state: RootState) => state.message.loading;

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(encodeMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(encodeMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.encoded = action.payload;
      })
      .addCase(encodeMessage.rejected, (state) => {
        state.loading = false;
      })
      .addCase(decodeMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(decodeMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.decoded = action.payload;
      })
      .addCase(decodeMessage.rejected, (state) => {
        state.loading = false;
      })
  }
});

export const messageReducer = messageSlice.reducer;