import Review from './Review.jsx';

const ReviewList = (props) => {
  return (
    <div>
      Your Reviews:
      {props.reviews.map((review) => <Review setId={props.setId}  username={props.username} review={review}/>)}
    </div>
  );
}

export default ReviewList;