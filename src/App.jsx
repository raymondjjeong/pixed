import React from 'react';
import UsernameEntry from './UsernameEntry.jsx';
import ReviewList from './ReviewList.jsx';
import Search from './Search.jsx';
import SearchList from './SearchList.jsx';
import PEXELS_API_KEY from '../API/key.js';

const axios = require('axios');


class App extends React.Component {
  constructor() {
    super();

    

    this.state = {
      username: '',
      query: '',
      reviews: [],
      searchResults: [],
      showReviewList: false,
      showSearch: false,
      showSearchList: false
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

  }

  handleUsernameChange(username) {
    this.setState({
      username: username
    });
  }

  handleSearchChange(query) {
    this.setState({
      query: query
    });
  }

  handleUsernameSubmit() {

    this.setState({
      showSearch: true
    });
    console.log('Submitted');
    axios.post('/photographReviews', {
      username: username
    })
      .then((results) => {
        this.setState({
          reviews: results
        });
        this.revealReviewList();
        this.revealSearch();

      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSearchSubmit() {
    const { query } = this.state;

    axios.get('https://api.pexels.com/v1/search', {
      params: {
        query: query,
        per_page: 5
      }
    }, {
      headers: {
        Authorization: PEXELS_API_KEY
      }
    })
      .then((results) => {
        const { photos } = results;

        this.setState({
          searchResults: photos
        });

        this.revealSearchList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  revealReviewList() {
    this.setState({
      showReviewList: true
    });
  }

  revealSearch() {
    this.setState({
      showSearch: true
    })
  }

  revealSearchList() {
    this.setState({
      showSearchList: true
    })
  }

  render() {
    const { showReviewList, showSearch, showSearchList } = this.state;

    return (
      <div>
        <div className="username-entry">
          <UsernameEntry handleSubmit={this.handleUsernameSubmit}/>
        </div>
        {/* <div className="review-list">
          Your Reviews:
          {showReviewList && <ReviewList />}
        </div> */}
        <div className="search">
          {showSearch && <Search />}
        </div>
        {/* <div className="search-list">
          Search Results:
          {showSearchList && <SearchList />}
        </div> */}
      </div>
    );
  }
}

export default App;