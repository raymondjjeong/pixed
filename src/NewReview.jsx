const axios = require('axios');
class NewReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(review) {
    this.setState({
      review: review
    })
  }

  handleClick() {

    axios.post('http://127.0.0.1:8080/photographReviews/reviews', {
      username: this.props.username,
      review: this.state.review,
      photographUrl: this.props.url
    }, {
      'Access-Control-Request-Method': 'POST',
      'Content-Type': 'application/json',
    });
  }




  render() {
    return (
      <div>
        <textarea onChange={(event) => this.handleChange(event.target.value)}></textarea>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default NewReview;