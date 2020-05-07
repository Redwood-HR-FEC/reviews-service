
import React from "react";
import ReviewItem from "./ReviewItem";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <ul>
        {this.props.reviews.map(review => (
          <ReviewItem rev={review} key={review._id} handleHelpfulInc={this.props.handleHelpfulInc} className="jest-rev" />
        ))}
      </ul>
    );
  }
}

export default ReviewList;