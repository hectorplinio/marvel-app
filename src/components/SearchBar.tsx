import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Spinner } from "./Spinner";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  value: string;
}

export const SearchBar = ({ onSearch, isLoading, value }: SearchBarProps) => {
  const [query, setQuery] = useState(value);

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
      {isLoading && (
        <div className="absolute right-0 top-0 mt-2 mr-2">
          <Spinner />
        </div>
      )}
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
