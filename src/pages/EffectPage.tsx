import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";
import React, { useState, useEffect } from "react";

const loadDataFromCD = () => {
  return { firstName: "Michael", lastName: "Jackson" };
};

const LabelWithSlowLoadingData: React.FC = () => {
  console.log("LabelWithSlowLoadingData rendering...");
  const [data, setData] = useState<{}>();

  useEffect(() => {
    console.log("LabelWithSlowLoadingData: useEffect...");
    setData(loadDataFromCD());
  }, []);

  return <p>{JSON.stringify(data)}</p>;
};

const EffectPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>EffectPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <LabelWithSlowLoadingData />
      </IonContent>
    </IonPage>
  );
};

export default EffectPage;
