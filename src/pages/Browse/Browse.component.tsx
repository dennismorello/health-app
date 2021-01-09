import React from "react";
import { RouteComponentProps } from "react-router";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { medkit, personCircleOutline } from "ionicons/icons";

import HealthCategoriesList from "../../components/HealthCategoriesList/HealthCategoriesList.component";
import SearchInput from "../../components/SearchInput/SearchInput.component";
import UserModal from "../../components/UserModal/UserModal.component";
import useDisclosure from "../../hooks/useDisclosure";
import RoundedList from "../../components/RoundedList/RoundedList.component";

interface OverviewProps extends RouteComponentProps {
  router: HTMLIonRouterOutletElement | null;
}

const Overview: React.FC<OverviewProps> = ({ router }) => {
  const {
    isOpen: isUserModalOpen,
    onOpen: openUserModal,
    onClose: closeUserModal,
  } = useDisclosure();

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Browse</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense" className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton onClick={openUserModal}>
                <IonIcon slot="icon-only" icon={personCircleOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle size="large">Browse</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <SearchInput />
          </IonToolbar>
        </IonHeader>

        <HealthCategoriesList />

        <RoundedList>
          <IonItem routerLink="/browse/documents">
            <IonIcon icon={medkit} slot="start" />
            <IonLabel>Clinical Documents</IonLabel>
          </IonItem>
        </RoundedList>

        <UserModal
          isOpen={isUserModalOpen}
          router={router}
          onDidDismiss={closeUserModal}
        />
      </IonContent>
    </IonPage>
  );
};

export default Overview;
