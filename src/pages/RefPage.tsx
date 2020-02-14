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
import React, { useState, useEffect, useRef } from "react";

const AudioControl: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = "/assets/sample.mp3";
    }
  }, [audioRef]);

  return <audio ref={audioRef} controls muted />;
};

const RefPage: React.FC = () => {
  const [show, setShow] = useState(false);

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
        <IonButton onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} video player</IonButton>
        {show ? <AudioControl /> : null}
      </IonContent>
    </IonPage>
  );
};

export default RefPage;
