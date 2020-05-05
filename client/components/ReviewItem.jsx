
import React from "react";
import {
  ReviewListItem,
  Profile,
  Header, HeaderSummary, HeaderRating, HeaderTitle, HeaderSubtitle, HeaderDetails, HeaderOptions, HeaderVerified,
  Body, BodyWrapper, ReadMore,
  Footer, FooterButton, FooterText, FooterLink, Spacer } from "./ReviewItem.styles";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        isOpen: false,
      }

      this.handleClick = this.handleClick.bind(this);
  }


  // Toggle Read more / less
  handleClick() {
    console.log('toggled');

    this.setState(prev => ({
      isOpen: !prev.isOpen,
    }));
  }


  render() {

    let { rev } = this.props;
    let { isOpen } = this.state;

    let toggleClass = isOpen ? 'is-open' : '' ;

    // Read more / less template
    let revBody;
    if (rev.body.length > 600) {
      revBody = (
        <BodyWrapper className={toggleClass} >
          <p>{rev.body}</p>
          <ReadMore onClick={this.handleClick}><span></span>Read {isOpen ? 'less' : 'more'}</ReadMore>
        </BodyWrapper>
      );
    } else {
      revBody = <p>{rev.body}</p>;
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
                aria-label="{rev.star_rating} out of 5 stars">
              </HeaderRating>
              <HeaderTitle href="#">
                <h3>{rev.title}</h3>
              </HeaderTitle>
            </HeaderSummary>
            <HeaderSubtitle>Reviewed in {rev.country} on {rev.date}</HeaderSubtitle>
            <HeaderDetails>
              <HeaderOptions>
                {rev.product_options.map((options, idx) => (
                  <li key={idx}>{options}<Spacer></Spacer></li>
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