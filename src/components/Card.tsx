import React from "react";
import Image from "next/image";

type CardProps = {
  id: string;
  name: string;
  avatar_url: string;
  is_favorited: boolean;
  onFavoriteToggle: () => void;
};

export const Card = ({
  name,
  avatar_url,
  is_favorited,
  onFavoriteToggle,
}: CardProps) => {
  return (
    <div className="card-container group">
      <div className="card-image-wrapper">
        <Image
          src={avatar_url}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="card-content-wrapper">
        <div className="card-background-effect"></div>
        <h3 className="card-text">{name}</h3>
        <button className="card-button" onClick={onFavoriteToggle}>
          <Image
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
