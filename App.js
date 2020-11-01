import React from "react";
import SearchBar from "./App/components/SearchBar";
import Screen from "./App/components/Screen";

import FeaturedNews from "./App/components/FeaturedNews";
import SmallCard from "./App/components/SmallCard";

export default function App() {
  return (
    <Screen>
      <SearchBar />
      <FeaturedNews />
      <SmallCard />
    </Screen>
  );
}
