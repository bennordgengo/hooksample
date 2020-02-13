import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
} from "@ionic/react";
import React, { useReducer } from "react";
import { countReducer } from "../components/CountReducer";

const ReducerPage: React.FC = () => {
  const [count, countDispatch] = useReducer(countReducer, 0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>ReducerPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Current count: {count}</p>
        <IonButton onClick={() => countDispatch({ type: "add", operand: 5 })}>Add 5</IonButton>
        <IonButton onClick={() => countDispatch({ type: "increment" })}>Increment</IonButton>
        <IonButton onClick={() => countDispatch({ type: "set", operand: 42 })}>Set 42</IonButton>
        <IonButton onClick={() => countDispatch({ type: "reset" })}>Reset</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ReducerPage;
