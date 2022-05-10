const SearchList = (props) => {

  return (
    <ul>
      {props.searchResults.map((searchResult) => <SearchResult searchResult={searchResult} />)}
    </ul>
  );
}