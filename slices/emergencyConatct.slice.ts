export interface EmeregencyContactState {
  contacts: EmergencyContacts;
}

export const initialEmergencyContactState: EmeregencyContactState = {
  contacts: [],
};

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmergencyContacts } from '@/types/emergencyContact';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '@/utils/store';

const slice = createSlice({
  name: 'emergencyContact',
  initialState: initialEmergencyContactState,
  reducers: {
    setContacts: (state: EmeregencyContactState, { payload }: PayloadAction<EmeregencyContactState['contacts']>) => {
      state.contacts = payload;
    },
    addContact: (state: EmeregencyContactState, { payload }: PayloadAction<EmeregencyContactState['contacts'][0]>) => {
      state.contacts.push(payload);
    },
    deleteContact: (state: EmeregencyContactState, { payload }: PayloadAction<EmeregencyContactState['contacts'][0]['contactId']>) => {
      state.contacts = state.contacts.filter(contact => contact.contactId !== payload);
    },
    reset: () => initialEmergencyContactState,
  },
});

export function useEmergencyContactSlice() {
  const dispatch = useDispatch<Dispatch>();
  const state = useSelector(({ emergencyContact }: State) => emergencyContact);
  return { dispatch, ...state, ...slice.actions };
}

export default slice.reducer;