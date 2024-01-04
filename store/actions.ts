import Store from '.';
import { List, ListItem } from '@/components/ListDetail';

export const setMenuOpen = (open: boolean) => {
  Store.update(s => {
    s.menuOpen = open;
  });
};

export const setNotificationsOpen = (open: boolean) => {
  Store.update(s => {
    s.notificationsOpen = open;
  });
};

export const setSettings = (settings: { enableNotifications: boolean }) => {
  Store.update(s => {
    s.settings = settings;
  });
};

export const setDone = (list: List, item: ListItem, done: boolean) => {
  Store.update((s, o) => {
    const listIndex = o.lists.findIndex(l => l === list);
    const itemIndex = o.lists[listIndex].items!.findIndex(i => i === item);
    s.lists[listIndex].items![itemIndex].done = done;
  });
};
