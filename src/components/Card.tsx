import React from "react";

type Character = {
  id: string;
  name: string;
  avatar_url: string;
  is_favorited: boolean;
};

type CardProps = {
  character: Character;
  onFavoriteToggle: () => void;
};

export const Card = ({ character, onFavoriteToggle }: CardProps) => {
  const { name, avatar_url, is_favorited } = character;

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
        <button className="card-button" onClick={onFavoriteToggle}>
          <img
            src={is_favorited ? "/selected_heart.png" : "/unselected_heart.png"}
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
