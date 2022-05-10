import UsernameEntry from './UsernameEntry.jsx';
import ReviewList from './ReviewList.jsx';
import Search from './Search.jsx';
import SearchList from './SearchList.jsx';

const axios = require('axios');


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showReviewList: false,
      showSearch: false,
      showSearchList: false
    };
  }

  handleUsernameChange(username) {
    axios.post('/photographReviews', {
      username: username
    })
      .then(() => {
        this.setState({
          showSearch: true
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleSearchChange(query) {
    
  }

  handleUsernameSubmit() {

  }

  handleSearchSubmit() {

  }

  hideOrRevealReviewList() {
    
  }

  hideOrRevealSearch() {

  }

  hideOrRevealSearchList() {

  }

  render() {
    return (
      <div>
        <div className="username-entry">
          <UsernameEntry />
        </div>
        <div className="review-list">
          <ReviewList />
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="search-list">
          <SearchList />
        </div>
      </div>
    );
  }
}