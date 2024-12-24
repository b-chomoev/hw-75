import { createSlice } from '@reduxjs/toolkit';
import { decodeMessage, encodeMessage } from '../thunks/chiperThunks.ts';
import { RootState } from '../../../app/store.ts';

interface IMessageState {
  encode: string;
  decode: string;
}

const initialState: IMessageState = {
  encode: '',
  decode: '',
};

export const selectEncoded = (state: RootState) => state.message.encode;
export const selectDecoded = (state: RootState) => state.message.decode;

export const cipherSlice = createSlice({
  name: 'cip',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(encodeMessage.fulfilled, (state, {payload: message}) => {
        state.decode = message;
        state.encode = '';
      })
      .addCase(decodeMessage.fulfilled, (state, {payload: message}) => {
        state.encode = message;
        state.decode = '';
      })
  }
});

export const messageReducer = cipherSlice.reducer;