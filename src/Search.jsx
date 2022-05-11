const Search = (props) => {
  return (
    <div className="search">
      Search:
    <input type="text" onChange={(event) => props.handleSearchChange(event.target.value)}>
    </input>
    <button onClick={props.handleSubmit}>Submit</button>
    </div>
  );
}

export default Search;