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
        <button>Delete</button>
        {showUpdate && <ReviewUpdate setId={setId} username={username} review={review}/>}
      </div>
    );
  }
}

export default Review;