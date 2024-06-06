import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const favoriteCount = 0;

  return (
    <header className="bg-black h-20 p-4 flex justify-between items-center md:h-21 md:px-12">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-24 md:h-8 md:w-32">
          <Image
            src="/Marvel_logo.png"
            alt="Marvel Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      </Link>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li className="flex items-center">
            <div className="relative h-8 w-8">
              <Image
                src={
                  favoriteCount > 0
                    ? "/selected_heart.png"
                    : "/unselected_heart.png"
                }
                alt="Heart Icon"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <span className="text-white ml-2">{favoriteCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
