'use client';

import React from 'react';
import Store from '@/store';
import * as selectors from '@/store/selectors';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';

interface List {
  id: string;
  name: string;
}

interface ListEntryProps {
  list: List;
}

const ListEntry: React.FC<ListEntryProps> = ({ list }) => (
  <IonItem routerLink={`/tabs/lists/${list.id}`} className="list-entry">
    <IonLabel>{list.name}</IonLabel>
  </IonItem>
);

interface AllListsProps {
  onSelect?: (list: List) => void;
}

const AllLists: React.FC<AllListsProps> = ({ onSelect }) => {
  const lists = Store.useState(selectors.getLists) as List[];

  return (
    <>
      {lists.map((list, i) => (
        <ListEntry list={list} key={i} />
      ))}
    </>
  );
};

const Lists: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Lists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lists</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <AllLists />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Lists;
