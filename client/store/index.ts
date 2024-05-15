import { Context, MakeStore, createWrapper } from "next-redux-wrapper";
import { AnyAction, Store, applyMiddleware, createStore } from "redux";
import { RootState, reducer } from "./reducers";
import { ThunkAction, ThunkDispatch, thunk } from "redux-thunk";

// create a makeStore function
const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>