export interface rideHistoryState {
  rides: RideHistory;
}

const initialState: rideHistoryState = {
  rides: [],
};

import { useDispatch, useSelector } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State, Dispatch } from '@/utils/store';
import { RideHistory } from '@/types/ridehistory';

const slice = createSlice({
  name: 'rideHistory',
  initialState,
  reducers: {
    setRides: (state: rideHistoryState, { payload }: PayloadAction<rideHistoryState['rides']>) => {
      state.rides = payload;
    },
    deleteRide: (state: rideHistoryState, { payload }: PayloadAction<rideHistoryState['rides'][0]['rideId']>) => {
      state.rides = state.rides.filter(ride => ride.rideId !== payload);
    },
    addRide: (state: rideHistoryState, { payload }: PayloadAction<rideHistoryState['rides'][0]>) => {
      state.rides.push(payload);
    },
    reset: () => initialState,
  },
});

export function useRideHistorySlice () {
  const dispatch = useDispatch<Dispatch>();
  const state = useSelector(({ rides }: State) => rides);
  return { dispatch, ...state, ...slice.actions };
}

export default slice.reducer;