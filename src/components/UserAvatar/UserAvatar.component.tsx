import React from "react";
import { IonAvatar } from "@ionic/react";

const UserAvatar: React.FC = () => {
  return (
    <IonAvatar>
      <img
        alt="User"
        src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
      />
    </IonAvatar>
  );
};

export default UserAvatar;
