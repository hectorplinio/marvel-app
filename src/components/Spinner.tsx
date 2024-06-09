import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader
        color="#f56565"
        size={150}
        role="img"
        aria-label="Loading spinner"
      />
    </div>
  );
};
