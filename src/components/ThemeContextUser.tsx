import React, { useContext } from "react";
import { IonItem, IonLabel } from "@ionic/react";
import { themeContext } from "../pages/ContextPage";

const ThemeContextUser: React.FC = () => {
  const theme = useContext(themeContext);

  return (
    <IonItem>
      <IonLabel style={{ color: theme.color }}>{theme.text}</IonLabel>
    </IonItem>
  );
};

export default ThemeContextUser;
