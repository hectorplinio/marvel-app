import React from "react";
import Link from "next/link";

export const Header = () => {
  const favoriteCount = 0;

  return (
    <header className="bg-black p-4 flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <img src="/Marvel logo.png" alt="Marvel Logo" className="h-8" />
      </Link>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li className="flex items-center">
            <img
              src={
                favoriteCount > 0
                  ? "/selected heart.png"
                  : "/unselected heart.png"
              }
              alt="Heart Icon"
              className="h-8"
            />
            <span className="text-white ml-2">{favoriteCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
