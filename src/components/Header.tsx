import React from "react";
import Link from "next/link";
import { useFavorites } from "@contexts/FavoritesContext";

export const Header = () => {
  const { favorites, showFavorites, toggleShowFavorites } = useFavorites();

  return (
    <header className="bg-black h-24 flex justify-between items-center md:h-21 md:px-12">
      <Link
        href="/"
        className="flex items-center"
        onClick={showFavorites ? toggleShowFavorites : () => {}}
      >
        <div className="relative md:h-8 md:w-32">
          <img
            src="/Marvel_logo.png"
            alt="Marvel Logo"
            className="object-contain -m-2"
          />
        </div>
      </Link>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center focus:outline-none"
              onClick={toggleShowFavorites}
            >
              <div className="relative h-8 w-8">
                <img
                  src={
                    favorites.length > 0
                      ? "/selected_heart.png"
                      : "/unselected_heart.png"
                  }
                  alt="Heart Icon"
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-white ml-2">{favorites.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
