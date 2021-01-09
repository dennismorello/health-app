import React from "react";
import { IonIcon, IonItem, IonLabel, IonListHeader } from "@ionic/react";

import "./HealthCategoriesList.scss";

import RoundedList from "../RoundedList/RoundedList.component";

import healthCategories from "../../data/health-categories.data.json";

import { getHealthCategoryIcon } from "../../utils/health-category.util";

const HealthCategoriesList: React.FC = () => {
  return (
    <RoundedList>
      <IonListHeader>
        <IonLabel>Health Categories</IonLabel>
      </IonListHeader>

      {healthCategories.map((category) => (
        <IonItem
          key={category.slug}
          routerLink={`/browse/${category.slug}`}
          className="health-category-list-item"
        >
          <IonIcon
            icon={getHealthCategoryIcon(category)}
            slot="start"
            className={category.slug}
          />
          <IonLabel>{category.title}</IonLabel>
        </IonItem>
      ))}
    </RoundedList>
  );
};

export default HealthCategoriesList;
