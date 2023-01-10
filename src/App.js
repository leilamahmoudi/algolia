import React from "react";
import { InstantSearch, SearchBox } from "react-instantsearch/dom";
const App = () => {
  return (
    <InstantSearch
      apiKey="6be0576ff61c053d5f9a3225e2a90f76"
      appId="latency"
      indexName="instant_search"
    >
      <header className="header">
        <SearchBox translation={{ placehoder: "Search For Products" }} />
        <h1>Hellooo</h1>
      </header>
    </InstantSearch>
  );
};

export default App;
