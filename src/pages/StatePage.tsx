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

const StatePage: React.FC = () => {
  console.log("StatePage rendering...");

  const [text, setText] = useState<string>("My initial string");

  // DON'T setText in the body of the function directly
  //
  // That just causes the React.FC to need to be rendered again immediately with the new value
  // setText("some new string"):
  //
  // This includes setting state based on other state in the function
  // const [longText, setLongText] = useState<string>("");
  // setLongText(text + "suffix");

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
        <p>{text}</p>
        <CustomButton onClick={() => setText("Hello")}>Change text to Hello</CustomButton>
        <CustomButton onClick={() => setText("Good bye")}>Change text to Good bye</CustomButton>
      </IonContent>
    </IonPage>
  );
};

export default StatePage;
