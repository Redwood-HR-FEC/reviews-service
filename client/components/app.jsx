
import React from 'react';
import axios from 'axios';
import ReviewList from "./ReviewList";

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
      <div>
        <h1>Amazon Reviews</h1>
        {/* <SelectOrder /> */}
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
