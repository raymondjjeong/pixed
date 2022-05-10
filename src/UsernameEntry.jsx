const UsernameEntry = (props) => {
  return (
    <div>
      Enter Username:
    <input type="text">
    </input>
    <button type="button" onClick={props.handleSubmit}>Submit</button>
    </div>

  );
}

export default UsernameEntry;