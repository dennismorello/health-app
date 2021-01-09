import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { getHealthCategory } from "../../utils/health-category.util";

interface HealthCategoryProps
  extends RouteComponentProps<{ category: string }> {}

const HealthCategory: React.FC<HealthCategoryProps> = ({ history, match }) => {
  const healthCategory = getHealthCategory(match.params.category);

  useEffect(() => {
    if (!healthCategory) {
      history.replace("/browse");
    }
  }, [healthCategory, history]);

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/browse" />
          </IonButtons>
          <IonTitle>{healthCategory?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar>
            <IonTitle size="large">{healthCategory?.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default HealthCategory;
