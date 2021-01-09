import React, { useState } from "react";
import { IonSearchbar } from "@ionic/react";

const SearchInput: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event: CustomEvent) =>
    setSearchText(event.detail.value);

  return (
    <IonSearchbar
      showCancelButton="focus"
      value={searchText}
      onIonChange={handleSearchTextChange}
    />
  );
};

export default SearchInput;
