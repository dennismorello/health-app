import React, { useRef } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { heart, grid } from "ionicons/icons";

import Browse from "./pages/Browse/Browse.component";
import ClinicalDocuments from "./pages/ClinicalDocuments/ClinicalDocuments.component";
import HealthCategory from "./pages/HealthCategory/HealthCategory.component";
import Overview from "./pages/Overview/Overview.component";

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
import "./theme/variables.scss";

const App: React.FC = () => {
  const routerRef = useRef<HTMLIonRouterOutletElement | null>(null);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet ref={routerRef}>
            <Route exact path="/overview" component={Overview} />
            <Route
              exact
              path="/browse"
              render={(props) => (
                <Browse {...props} router={routerRef.current} />
              )}
            />
            <Route
              exact
              path="/browse/:category"
              render={(props) =>
                props.match.params.category === "documents" ? (
                  <ClinicalDocuments />
                ) : (
                  <HealthCategory {...props} />
                )
              }
            />
            <Redirect exact from="/" to="/overview" />
          </IonRouterOutlet>

          <IonTabBar slot="bottom" translucent>
            <IonTabButton tab="overview" href="/overview">
              <IonIcon icon={heart} />
              <IonLabel>Overview</IonLabel>
            </IonTabButton>
            <IonTabButton tab="browse" href="/browse">
              <IonIcon icon={grid} />
              <IonLabel>Browse</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
