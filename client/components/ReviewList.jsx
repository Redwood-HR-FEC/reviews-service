
import React from "react";
import ReviewItem from "./ReviewItem";
import { List } from "./ReviewList.styles";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <List>
        {this.props.reviews.map(review => (
          <ReviewItem rev={review} key={review._id} handleHelpfulInc={this.props.handleHelpfulInc} />
        ))}
      </List>
    );
  }
}

export default ReviewList;