import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonItem,
} from "@ionic/react";
import React, { useState, useEffect } from "react";

interface LabelProps {
  loadData: () => any;
}

const Label: React.FC<LabelProps> = ({ loadData }) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(loadData);
  }, [loadData]);

  return <p>{JSON.stringify(data)}</p>;
};

const CallbackPage: React.FC = () => {
  console.log("CallbackPage rendering...");

  const [drive, setDrive] = useState<string>("d:");

  // useCallback here!
  const loadDataFromCD = () => {
    console.warn(`loading data from CD drive ${drive}`);
    return {
      firstName: "Michael",
      lastName: "Jackson",
      songs: ["Thriller", "Bad", "Smooth Criminal"],
    };
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>CallbackPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Label loadData={loadDataFromCD} />
        <IonItem>
          <IonLabel>CD drive</IonLabel>
          <IonSelect value={drive} onIonChange={event => setDrive(event.detail.value)}>
            <IonSelectOption>a:</IonSelectOption>
            <IonSelectOption>b:</IonSelectOption>
            <IonSelectOption>c:</IonSelectOption>
            <IonSelectOption>d:</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default CallbackPage;
