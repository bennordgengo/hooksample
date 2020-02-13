import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";
import React from "react";

const RouteComponentPage: React.FC = props => {
  console.log("RouteComponentPage rendering...");
  console.log(props);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>RouteComponentPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        This component shows how often Route components are re-rendered and what props they are
        passed.
      </IonContent>
    </IonPage>
  );
};

export default RouteComponentPage;
