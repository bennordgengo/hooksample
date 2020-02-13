import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { createContext } from "react";
import ThemeContextUser from "../components/ThemeContextUser";

export interface Theme {
  text: string;
  color: string;
}

const themeDefault: Theme = {
  text: "Title",
  color: "#000",
};

export const themeContext = createContext(themeDefault);

const ContextPage: React.FC = () => {
  return (
    <themeContext.Provider value={{ text: "Context Demo", color: "#0a0" }}>
      <themeContext.Consumer>
        {theme => (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle style={{ color: theme.color }}>{theme.text}</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <themeContext.Provider value={{ text: "Using another theme", color: "#00f" }}>
                  <themeContext.Consumer>
                    {localTheme => (
                      <IonItem>
                        <IonLabel style={{ color: localTheme.color }}>{localTheme.text}</IonLabel>
                      </IonItem>
                    )}
                  </themeContext.Consumer>
                </themeContext.Provider>
                <themeContext.Provider value={{ text: "Yet another theme", color: "#f00" }}>
                  <ThemeContextUser />
                </themeContext.Provider>
              </IonList>
            </IonContent>
          </IonPage>
        )}
      </themeContext.Consumer>
    </themeContext.Provider>
  );
};

export default ContextPage;
