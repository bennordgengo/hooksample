import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Global CSS */
import "./global.css";

import Home from "./pages/Home";
import RouteComponentPage from "./pages/RouteComponentPage";
import RenderedPage from "./pages/RenderedPage";
import StatePage from "./pages/StatePage";
import EffectPage from "./pages/EffectPage";
import ReducerPage from "./pages/ReducerPage";
import CallbackPage from "./pages/CallbackPage";
import ContextPage from "./pages/ContextPage";
import RefPage from "./pages/RefPage";

const App: React.FC = () => {
  console.log("App rendering...");

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/component" component={RouteComponentPage} />
          <Route exact path="/render" render={() => <RenderedPage />} />
          <Route exact path="/state" render={() => <StatePage />} />
          <Route exact path="/effect" render={() => <EffectPage />} />
          <Route exact path="/ref" render={() => <RefPage />} />
          <Route exact path="/reducer" render={() => <ReducerPage />} />
          <Route exact path="/callback" render={() => <CallbackPage />} />
          <Route exact path="/context" render={() => <ContextPage />} />
          <Route exact path="/" component={Home} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
