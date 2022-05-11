import SearchResult from './SearchResult.jsx';

const SearchList = (props) => {
  return (
    <div className="search-list">
      Search Results:
      {props.searchResults.map((searchResult) => <SearchResult searchResult={searchResult} username={props.username}/>)}
    </div>
  );
}

export default SearchList;