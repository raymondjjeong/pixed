import axios from "axios";

class ReviewUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: this.props.review,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(newReview) {
    this.setState({
      review: newReview
    })
  }

  handleClick() {
    axios.post('http://127.0.0.1:8080/photographReviews/reviews', {
      review: this.state.review,
      username: this.props.username
    })
      .then(() => {
        this.props.setId();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { review } = this.props;

    return (
      <div>
        <textarea defaultValue={review} onChange={(event) => this.handleChange(event.target.value)}>
        </textarea>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default ReviewUpdate;