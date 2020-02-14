import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hook Sample</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button routerLink="/component">
            <IonLabel>RouteComponentPage</IonLabel>
          </IonItem>
          <IonItem button routerLink="/render">
            <IonLabel>RenderedPage</IonLabel>
          </IonItem>
          <IonItem button routerLink="/state">
            <IonLabel>StatePage</IonLabel>
          </IonItem>
          <IonItem button routerLink="/effect">
            <IonLabel>EffectPage</IonLabel>
          </IonItem>
          <IonItem button routerLink="/ref">
            <IonLabel>RefPage</IonLabel>
          </IonItem>
          <IonItem button routerLink="/reducer">
            <IonLabel>ReducerPage</IonLabel>
          </IonItem>
          <IonItem button routerLink="/callback">
            <IonLabel>CallbackPage</IonLabel>
          </IonItem>
          <IonItem button routerLink="/context">
            <IonLabel>ContextPage</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
