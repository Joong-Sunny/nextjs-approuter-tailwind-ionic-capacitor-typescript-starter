import { Store as PullStateStore } from 'pullstate';
import { lists, homeItems, notifications } from '@/mock';

interface Settings {
  enableNotifications: boolean;
}

export interface StoreState {
  safeAreaTop: number;
  safeAreaBottom: number;
  menuOpen: boolean;
  notificationsOpen: boolean;
  currentPage: string | null;
  homeItems: typeof homeItems;
  lists: typeof lists;
  notifications: typeof notifications;
  settings: Settings;
}

const Store = new PullStateStore<StoreState>({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  homeItems,
  lists,
  notifications,
  settings: {
    enableNotifications: true,
  },
});

export default Store;
