import axios from 'axios';
import ReviewUpdate from './ReviewUpdate.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUpdate: false,
    }

    this.hideOrRevealReview = this.hideOrRevealReview.bind(this);
  }

  hideOrRevealReview() {
    this.setState({
      showUpdate: !this.state.showUpdate
    })
  }

  handleClick() {
    const { photograph, review } = this.props.review;
    
    axios.delete('http://127.0.0.1:8080/photographReviews/reviews', {
      data: {
        photographUrl: photograph
      }
    });

    this.props.setId();
  }

  render() {
    const { photograph, review } = this.props.review;
    const { showUpdate } = this.state;
    const { username, setId } = this.props;

    return (
      <div>
        <img style={{ width: '50%' }} src={photograph}></img>
        <br/>
        <b>Review: </b>{review}
        <br/>
        <button onClick={this.hideOrRevealReview}>Edit</button>
        <button onClick={() => this.handleClick()}>Delete</button>
        {showUpdate && <ReviewUpdate setId={setId} username={username} review={review}/>}
      </div>
    );
  }
}

export default Review;