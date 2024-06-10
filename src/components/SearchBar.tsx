import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [query, onSearch]);

  return (
    <div className="relative w-full mb-4 ml-2">
      <FiSearch className="absolute top-3 left-2 text-black-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SEARCH A CHARACTER..."
        className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
      />
    </div>
  );
};
