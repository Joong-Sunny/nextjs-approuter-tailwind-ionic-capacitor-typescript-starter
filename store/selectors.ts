import { createSelector } from 'reselect';
import { StoreState } from './index'; // 가정한 타입 경로

const getState = (state: StoreState) => state;

export const getHomeItems = createSelector(getState, state => state.homeItems);
export const getLists = createSelector(getState, state => state.lists);
export const getNotifications = createSelector(getState, state => state.notifications);
export const getSettings = createSelector(getState, state => state.settings);
