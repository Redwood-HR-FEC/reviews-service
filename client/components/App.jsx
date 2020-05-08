
import React from 'react';
import axios from 'axios';
import Select from "react-select";

import { selectStyles } from "./AppSelect.style";
import { GlobalStyle, Wrapper, Msg } from "./App.style";
import ReviewList from "./ReviewList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      userMsg: '',
      options: [],
      selectedOption: null,
    };

    this.handleHelpfulInc = this.handleHelpfulInc.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
  }


  componentDidMount() {

    // Seed the options
    this.setState({
      options: [
        { value: 'helpful_vote', label: 'Top Reviews'},
        { value: 'date', label: 'Most Recent'},
      ],
      selectedOption : 'helpful_vote',
    }, () => {

      // Hydration is important
      this.getAllReviews(this.state.selectedOption);
    });

  }


  getAllReviews(orderBy) {

    // Get the ID from the url
    let id = window.location.pathname.slice(1, -1);
    // id = Number(Id); // Un-pad if needed

    // Fetch with the ID
    axios.get(`/api/v1/products/${id}/reviews?order=${orderBy}`)
      .then(response => {
        this.setState({
          reviews: response.data.reviews
        });
      })
      .catch(err => {
        console.log('Error: GET reviews: ', err);
        this.setState({ userMsg: '500: There was an error, please try a different ID.'});
      });

  }


  handleOrderChange(selectedOption) {
    this.setState({
      selectedOption: selectedOption.value,
    });
    this.getAllReviews(selectedOption.value);
  }


  handleHelpfulInc(review_id) {

    // Patch the review by ID
    axios.patch(`/api/v1/reviews/${review_id}/helpful`)
      .then(resp => {
        // console.log(resp.data);
        this.setState(prev => ({
          reviews: prev.reviews.map(rev => {
            return rev._id === resp.data._id ? { ...rev, helpful_vote: resp.data.helpful_vote } : rev
          })
        }));
      })
      .catch(err => {
        console.log('Error: PATCH review '+ review_id +' : ', err);
      });
  }



  render() {
    const { userMsg } = this.state;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          {userMsg ? <Msg>{userMsg}</Msg> : ''}
          <Select
            arai-label="Order the reviews by:"
            styles={selectStyles}
            isSearchable={false}
            options={this.state.options}
            defaultValue={{ value: 'helpful_vote', label: 'Top Reviews'}}
            onChange={this.handleOrderChange} />
          <ReviewList
            reviews={this.state.reviews}
            handleHelpfulInc={this.handleHelpfulInc} />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
