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
      searchQuery: '',
      reviews: [],
      searchResults: [],
      reviewListId: 1,
      searchListId: -1,
      showReviewList: false,
      showSearch: false,
      showSearchList: false
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.setReviewListId = this.setReviewListId.bind(this);

  }

  handleUsernameChange(username) {
    this.setState({
      username: username
    });
  }

  handleSearchChange(query) {
    this.setState({
      searchQuery: query
    });
  }

  handleUsernameSubmit() {
    const { username } = this.state;

    this.setState({
      showSearch: true
    });
    console.log('Submitted');
    axios.post('http://127.0.0.1:8080/photographReviews/reviews', {
      username: username
    }, {
      headers: {
        'Access-Control-Request-Method': 'POST',
        'Content-Type': 'application/json',
      }
    })
      .then((results) => {
        axios.get('http://127.0.0.1:8080/photographReviews/reviews', {
          params: {
            username: username
          }
        })
          .then((results) => {
            console.log('This line ran (2)', results);

            if (results.data[0].review !== undefined) {
              this.setState({
                reviews: results.data
              });
            }

            this.revealReviewList();
          })
          .catch((error) => {
            console.log(error);
          });
        this.revealSearch();

      })
      .catch((error) => {
        console.log('This line ran', error);
      });
  }

  handleSearchSubmit() {
    const { searchQuery } = this.state;
    
    axios({
      method: 'get',
      url: 'https://api.pexels.com/v1/search',
      params: {
        query: searchQuery,
        per_page: 5
      },
      headers: {
        'Authorization': PEXELS_API_KEY,
        'Access-Control-Request-Headers': 'Authorization'
      }
    })
      .then((results) => {
        const { photos } = results.data;

        this.setState({
          searchResults: photos
        });

        this.revealSearchList();
        this.setSearchListId();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  revealReviewList() {
    if (this.state.showReviewList === false) {
      this.setState({
        showReviewList: true,
      });
    }

    this.setReviewListId();
    console.log(this.state.reviewListId);
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

  setReviewListId() {
    this.setState({
      reviewListId: this.state.reviewListId + 1,
    })
  }

  setSearchListId() {
    this.setState({
      searchListId: this.state.searchListId - 1,
    })
  }

  render() {
    const { showReviewList, showSearch, showSearchList, username, searchResults, reviews, reviewListId, searchListId } = this.state;

    return (
      <div>
        <div className="username-entry">
          <UsernameEntry setReviewListId={this.setReviewListId} handleChange={this.handleUsernameChange} handleSubmit={this.handleUsernameSubmit}/>
        </div>
        <div key={reviewListId} className="review-list">
          {showReviewList && <ReviewList setId={this.setReviewListId} username={username} reviews={reviews}/>}
        </div>
        <div className="search">
          {showSearch && <Search  handleSearchChange={this.handleSearchChange} handleSubmit={this.handleSearchSubmit}/>}
        </div>
        <div key={searchListId} className="search-list">
          {showSearchList && <SearchList searchResults={searchResults} username={username}/>}
        </div>
      </div>
    );
  }
}

export default App;