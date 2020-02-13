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

const RenderedPage: React.FC = props => {
  console.log("RenderedPage rendering...");
  console.log(props);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>RenderedPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        This page is rendered via the Route->render function, with no props.
      </IonContent>
    </IonPage>
  );
};

export default RenderedPage;
