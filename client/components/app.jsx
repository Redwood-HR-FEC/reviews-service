
import React from 'react';
import axios from 'axios';
import ReviewList from "./ReviewList";
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Amazon Ember";
  src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_rg-cc7ebaa05a2cd3b02c0929ac0475a44ab30b7efa._V2_.woff2");
}

@font-face {
  font-family: "Amazon Ember";
  font-weight: 700;
  src: url("https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIFont-amazonember_bd-46b91bda68161c14e554a779643ef4957431987b._V2_.woff2");
}
`

const Wrapper = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: #111;
  font-family: "Amazon Ember",Arial,sans-serif;
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    let dummyId = '017';
    axios.get(`/api/v1/products/${dummyId}/reviews`)
      .then(response => {
        this.setState({
          reviews: response.data.reviews
        });
      })
      .catch(err => console.log('Error: GET reviews: ', err));

  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          <h1>Amazon Reviews</h1>
          {/* <SelectOrder /> */}
          <ReviewList reviews={this.state.reviews} />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
