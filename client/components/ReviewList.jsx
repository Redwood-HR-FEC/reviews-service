
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
        <li>The first of many</li>
        {this.props.reviews.map(review => (
          <ReviewItem review={review} key={review._id} />
        ))}
      </ul>
    );
  }
}

export default ReviewList;