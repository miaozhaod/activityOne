import React from "react";
import "./Filter.css";

export default function Filter({ handleInput }) {
  return (
    <form className="filter">
      <input
        type="text"
        id="text"
        placeholder="e.g. Type bar or cake to filter the data"
        onChange={handleInput}
      />
    </form>
  );
}
