import React from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonListHeader,
  IonModal,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";

import "./UserModal.scss";
import RoundedList from "../RoundedList/RoundedList.component";

interface UserModalProps {
  isOpen?: boolean;
  router: HTMLIonRouterOutletElement | null;
  onDidDismiss?: () => void;
}

const UserModal: React.FC<UserModalProps> = ({
  isOpen = false,
  router,
  onDidDismiss,
}) => {
  return (
    <IonModal
      isOpen={isOpen}
      swipeToClose
      presentingElement={router || undefined}
      onDidDismiss={onDidDismiss}
    >
      <IonPage className="user-modal">
        <IonHeader translucent className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={onDidDismiss}>Done</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="ion-padding-vertical">
          <IonIcon
            className="user-avatar-icon"
            icon={personCircleOutline}
            color="primary"
          />
          <RoundedList>
            <IonItem detail>
              <IonLabel>Health Details</IonLabel>
            </IonItem>
            <IonItem detail>
              <IonLabel>Medical ID</IonLabel>
            </IonItem>
          </RoundedList>
          <RoundedList>
            <IonListHeader>
              <IonLabel>Features</IonLabel>
            </IonListHeader>
            <IonItem detail>
              <IonLabel>Health Checklist</IonLabel>
            </IonItem>
          </RoundedList>
          <RoundedList>
            <IonListHeader>
              <IonLabel>Privacy</IonLabel>
            </IonListHeader>
            <IonItem detail>
              <IonLabel>Apps</IonLabel>
            </IonItem>
            <IonItem detail>
              <IonLabel>Research Studies</IonLabel>
            </IonItem>
            <IonItem detail>
              <IonLabel>Devices</IonLabel>
            </IonItem>
          </RoundedList>
          <RoundedList>
            <IonItem button detail={false} onClick={() => {}}>
              <IonLabel color="primary">Export All Health Data</IonLabel>
            </IonItem>
          </RoundedList>
        </IonContent>
      </IonPage>
    </IonModal>
  );
};

export default UserModal;
