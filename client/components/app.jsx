
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from "./ReviewList";
import { GlobalStyle, Wrapper, Msg } from "./app.style";

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

    // Get the ID from the url
    let Id = window.location.pathname.slice(1, -1);
    // Id = Number(Id); // Un-pad if needed

    // Fetch with the ID
    axios.get(`/api/v1/products/${Id}/reviews`)
      .then(response => {
        this.setState({
          reviews: response.data.reviews
        });
      })
      .catch(err => {
        console.log('Error: GET reviews: ', err);
        this.setState({
          userMsg: '500: There was an error, please try a different ID.'
        });
      });

  }


  handleHelpfulInc(review_id) {
    console.log(review_id);
  }

  render() {
    const { userMsg } = this.state;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          <h1>Amazon Reviews</h1>
          {userMsg ? <Msg>{userMsg}</Msg> : ''}
          {/* <SelectOrder /> */}
          <ReviewList reviews={this.state.reviews} handleHelpfulInc={this.handleHelpfulInc} />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
