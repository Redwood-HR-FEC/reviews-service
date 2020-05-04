
import React from "react";
import {
  ReviewListItem,
  Profile,
  Header, HeaderSummary, HeaderRating, HeaderTitle, HeaderSubtitle, HeaderDetails, HeaderOptions, HeaderVerified,
  Body,
  Footer, FooterButton, FooterText, FooterLink, Spacer } from "./ReviewItem.styles";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    let { rev } = this.props;

    // Read more / less template
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
      <ReviewListItem>
        <article>
          <Header>
            <Profile>
              <img src={rev.profile.avatar} alt="" />
              <h4>{rev.profile.name}</h4>
            </Profile>
            <HeaderSummary>
              <HeaderRating
                className={'star-'+rev.star_rating}
                aria-label="{rev.star_rating} out of 5 stars"></HeaderRating>
              <HeaderTitle href="#">
                <h3>{rev.title}</h3>
              </HeaderTitle>
            </HeaderSummary>
            <HeaderSubtitle>Reviewed in {rev.country} on {rev.date}</HeaderSubtitle>
            <HeaderDetails>
              <HeaderOptions>
                {rev.product_options.map(options => (
                  <li>{options}<Spacer></Spacer></li>
                ))}
              </HeaderOptions>
              <HeaderVerified>{rev.avp_badge ? 'Verified Purchase' : ''}</HeaderVerified>
            </HeaderDetails>
          </Header>
          <Body>
            {revBody}
          </Body>
          <Footer>
            <FooterText>{rev.helpful_vote} people found this helpful</FooterText>
            <FooterButton>Helpful</FooterButton>
            <Spacer></Spacer>
            <FooterLink href="#">Comment</FooterLink>
            <Spacer></Spacer>
            <FooterLink href="#">Report abuse</FooterLink>
          </Footer>
        </article>
      </ReviewListItem>
    );
  }
}

export default ReviewItem;