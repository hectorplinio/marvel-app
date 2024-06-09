import { useFavorites } from "@contexts/FavoritesContext";
import React from "react";

type Character = {
  id: string;
  name: string;
  avatar_url: string;
};

type CardProps = {
  character: Character;
};

export const Card = ({ character }: CardProps) => {
  const { name, avatar_url } = character;
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(character.id);

  return (
    <div className="card-container group">
      <div className="card-image-wrapper">
        <img
          src={avatar_url}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="card-content-wrapper">
        <div className="card-background-effect"></div>
        <h3 className="card-text">{name}</h3>
        <button
          className="card-button"
          onClick={() => toggleFavorite(character.id)}
        >
          <img
            src={isFavorited ? "/selected_heart.png" : "/unselected_heart.png"}
            alt="Favorite"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="card-cut-corner"></div>
    </div>
  );
};
