
import React from 'react';
import axios from 'axios';

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
      .then(data => {
        this.setState({
          reviews: data.data.reviews
        });
      })
      .catch(err => console.log('Error: GET reviews: ', err));

  }

  render() {
    return (
      <h1>Amazon Reviews</h1>
    );
  }
}

export default App;
