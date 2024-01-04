'use client';

import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonToggle,
  IonLabel,
} from '@ionic/react';

import Store from '@/store';
import * as selectors from '@/store/selectors';
import { setSettings } from '@/store/actions';
import { useEffect, useState } from 'react';

const Settings = () => {
  const settings = Store.useState(selectors.getSettings);
  const [notificationState, setNotificationState] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_PATH}/api/user-notification`)
      .then(response => response.json())
      .then(data => {
        setNotificationState(data.notifications);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Enable Notifications</IonLabel>
            <IonToggle
              checked={notificationState}
              onIonChange={e => {
                setSettings({
                  ...settings,
                  enableNotifications: e.target.checked,
                });
              }}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
