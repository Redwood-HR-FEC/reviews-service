
import React from "react";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    let { rev } = this.props;
    let revBody;
    if (rev.body.length > 500) {
      revBody = (
        <div className="read-more__wrapper">
          <p>BIG: {rev.body}</p>
          <button className="read-more__btn">Read more</button>
        </div>
      );
    } else {
      revBody = <p>little:{rev.body}</p>;
    }

    return (
      <li className="rev">
        <article>
          <header className="rev__header">
            <div className="rev__profile">
              <img src={rev.profile.avatar} alt="" />
              <h4>{rev.profile.name}</h4>
            </div>
            <span className="rev__rating">{rev.star_rating}</span>
            <h3 className="rev__title">{rev.title}</h3>
            <p className="rev__details">Reviewed in {rev.country} on {rev.date}</p>
            <ul className="rev__options">
              {rev.product_options.map(options => (
                <li>{options}</li>
              ))}
            </ul>
            <p className="rev__verified"><strong>{rev.avp_badge ? 'Verified Purchase' : ''}</strong></p>
          </header>
          <div className="rev__body">
            {revBody}
          </div>
          <footer className="rev__footer">
            <button>Helpful</button>
            <a href="#">Comment</a>
            <a href="#">Report abuse</a>
          </footer>
        </article>
      </li>
    );
  }
}

export default ReviewItem;