
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from "./ReviewList";
import { GlobalStyle, Wrapper, Msg } from "./App.style";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      userMsg: '',
    };

    this.handleHelpfulInc = this.handleHelpfulInc.bind(this);
  }


  componentDidMount() {
    this.getAllReviews();
  }


  getAllReviews() {

    // Get the ID from the url
    let id = window.location.pathname.slice(1, -1);
    // id = Number(Id); // Un-pad if needed

    // Fetch with the ID
    axios.get(`/api/v1/products/${id}/reviews`)
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
          {/* <SelectOrder /> */}
          <ReviewList reviews={this.state.reviews} handleHelpfulInc={this.handleHelpfulInc} />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
