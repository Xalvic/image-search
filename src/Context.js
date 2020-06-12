import React, { useState, useEffect, createContext } from "react";
//API key = PEtuMojQ6KSPsxIilZoBcjYQfmygqqfVkTYSQsPgroU
export const ImageContext = createContext();

export const Provider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const data = await fetch(
        "https://api.unsplash.com/photos/random?client_id=PEtuMojQ6KSPsxIilZoBcjYQfmygqqfVkTYSQsPgroU"
      );
      const items = await data.json();
      setItems(items);
    }
    getCharacters();
  }, []);

  return (
    <ImageContext value={[items, setItems]}>{props.children}</ImageContext>
  );
};
