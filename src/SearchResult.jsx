import NewReview from './NewReview.jsx';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNewReview: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      showNewReview: true
    })
  }

  render() {
    const { showNewReview } = this.state;
    const { original } = this.props.searchResult.src;
    console.log(this.props.username);
    return (
      <div>
        <img style={{ width: '50%'}} src={original} onClick={() => this.handleClick()}/>
        {showNewReview && <NewReview url={original} username={this.props.username}/>}
      </div>
    )
  }
}

export default SearchResult;