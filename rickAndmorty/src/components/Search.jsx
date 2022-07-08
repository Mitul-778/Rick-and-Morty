import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export const Search = ({ setQuery, search }) => {
  return (
    <div id="search">
      <IconButton
        aria-label="Search database"
        size="lg"
        border="none"
        backgroundColor="white"
        icon={<SearchIcon color="gray" />}
      />
      <input
        onChange={(e) => {
          setQuery(e.target.value);
          search();
        }}
        type="text"
        id="searchbox"
        placeholder="Search for a contact..."
      />
    </div>
  );
};
