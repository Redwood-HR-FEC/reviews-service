
import React from "react";
import ReviewItem from "./ReviewItem";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    console.log(this.props.reviews);

    return (
      <ul>
        {this.props.reviews.map(review => (
          <ReviewItem rev={review} key={review._id} />
        ))}
      </ul>
    );
  }
}

export default ReviewList;