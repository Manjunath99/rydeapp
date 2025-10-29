import { useDispatch, useSelector } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State, Dispatch } from '@/utils/store';
import { User } from '@/types';


export interface AuthData {
  phoneNumber: string;
  password: string;
  gender: 'Male'  | string;
}
export interface AppState {
  checked: boolean;
  loggedIn: boolean;
  user?: User;
  onBoardingDone:boolean;
  authData?: AuthData;
  


}

const initialState: AppState = {
  checked: false,
  loggedIn: false,
  user: undefined,
  onBoardingDone:false,
  authData: undefined,

};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state: AppState, { payload }: PayloadAction<boolean>) => {
      state.checked = true;
      state.loggedIn = payload;
    },
    setUser: (state: AppState, { payload }: PayloadAction<User | undefined>) => {
      state.user = payload;
    },
    
    setOnboardingDone :(state:AppState,{payload}:PayloadAction<boolean>)=>{

      state.onBoardingDone=payload
    },
    setAuthData :(state:AppState,{payload}:PayloadAction<AuthData>)=>{

      state.authData=payload
    },
    clearAuthData :(state:AppState)=>{
      state.authData=undefined
    },
    


    reset: () => initialState,
  },
});

export function useAppSlice() {
  const dispatch = useDispatch<Dispatch>();
  const state = useSelector(({ app }: State) => app);
  return { dispatch, ...state, ...slice.actions };
}

export default slice.reducer;
