import React from "react";
import { IonList } from "@ionic/react";

import "./RoundedList.scss";

const RoundedList: React.FC = ({ children }) => (
  <IonList className="rounded-list ion-padding-bottom">{children}</IonList>
);

export default RoundedList;
