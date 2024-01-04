'use client';

import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import Store from '@/store';
import * as actions from '@/store/actions';
import * as selectors from '@/store/selectors';

export interface ListItem {
  name: string;
  done?: boolean;
}

export interface List {
  id: string;
  name: string;
  items: ListItem[];
}

interface ListItemsProps {
  list: List;
}

const ListItems: React.FC<ListItemsProps> = ({ list }) => {
  return (
    <IonList>
      {(list?.items || []).map((item, key) => (
        <ListItemEntry list={list} item={item} key={key} />
      ))}
    </IonList>
  );
};

interface ListItemEntryProps {
  list: List;
  item: ListItem;
}

const ListItemEntry: React.FC<ListItemEntryProps> = ({ list, item }) => (
  <IonItem onClick={() => actions.setDone(list, item, !item.done)}>
    <IonLabel>{item.name}</IonLabel>
    <IonCheckbox checked={item.done || false} slot="end" />
  </IonItem>
);

const ListDetail: React.FC = () => {
  const lists = Store.useState(selectors.getLists) as List[];
  const params = useParams<{ listId: string }>();
  const { listId } = params;
  const loadedList = lists.find(l => l.id === listId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/lists" />
          </IonButtons>
          <IonTitle>{loadedList?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{loadedList && <ListItems list={loadedList} />}</IonContent>
    </IonPage>
  );
};

export default ListDetail;
