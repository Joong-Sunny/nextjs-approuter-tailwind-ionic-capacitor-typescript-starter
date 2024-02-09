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
import { getNotificationInformation } from '@/app/tabs/actions';

const Settings = () => {
  const settings = Store.useState(selectors.getSettings);
  const [notificationState, setNotificationState] = useState(false);

  const fetchNotificationState = async () => {
    try {
      return await getNotificationInformation();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchNotificationState()
      .then(data => {
        setNotificationState(data!!);
      })
      .catch(e => {
        console.error(e);
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
