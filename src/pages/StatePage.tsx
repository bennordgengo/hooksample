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
import React, { useState } from "react";

interface CustomButtonProps {
  onClick: () => any;
}

const CustomButton: React.FC<CustomButtonProps> = props => {
  console.log("CustomButton rendering...");
  console.log(props);
  return <IonButton onClick={props.onClick}>{props.children}</IonButton>;
};

const Panel: React.FC = props => {
  console.log("Panel rendering...");
  console.log(props);

  const [text, setText] = useState<string>("My initial string");

  return (
    <>
      <p>{text}</p>
      <CustomButton onClick={() => setText("Hello")}>Change text to Hello</CustomButton>
      <CustomButton onClick={() => setText("Good bye")}>Change text to Good bye</CustomButton>
    </>
  );
};

const StatePage: React.FC = () => {
  console.log("StatePage rendering...");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>StatePage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Panel />
      </IonContent>
    </IonPage>
  );
};

export default StatePage;
