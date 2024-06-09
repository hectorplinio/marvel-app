import React, { createContext, useContext, useState, ReactNode } from "react";

type FavoritesContextType = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  showFavorites: boolean;
  toggleShowFavorites: () => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favoriteId) => favoriteId !== id)
        : [...prevFavorites, id],
    );
  };

  const toggleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, showFavorites, toggleShowFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
