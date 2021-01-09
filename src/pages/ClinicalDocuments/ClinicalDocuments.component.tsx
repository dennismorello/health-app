import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const ClinicalDocuments: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/browse" />
          </IonButtons>
          <IonTitle>Clinical Documents</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar>
            <IonTitle size="large">Clinical Documents</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItem detail>
            <IonLabel>Show All Records</IonLabel>
          </IonItem>
          <IonItem detail>
            <IonLabel>Data Sources &amp; Access</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ClinicalDocuments;
