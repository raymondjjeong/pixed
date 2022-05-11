const UsernameEntry = (props) => {
  return (
    <div>
      Enter Username:
    <input type="text" onChange={(event) => props.handleChange(event.target.value)}>
    </input>
    <button type="button" onClick={props.handleSubmit}>Submit</button>
    </div>

  );
}

export default UsernameEntry;