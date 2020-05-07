
import React from 'react';
import { shallow } from 'enzyme';
import ReviewItem from '../client/components/ReviewItem';

describe('ReviewItem.jsx Unit Tests', () => {

  let review = {
    "profile": {
      "name": "Ms. Lesly Schoen",
      "avatar": "https://ghrsea09-fec-review-service.s3-us-west-2.amazonaws.com/avatar-41.jpg"
    },
    "_id": "5eb2578c1c26fb160a166589",
    "title": "maxime eligendi tempore",
    "star_rating": 1,
    "date": "2019-05-14T10:27:31.493Z",
    "body": "molestias beatae eos consequuntur omnis blanditiis et praesentium voluptas est ullam deserunt nobis voluptatibus id amet sed assumenda quis dolores velit dolor rerum omnis neque sunt dignissimos nobis pariatur provident et iure earum dolores rerum consectetur temporibus aliquam natus quasi et perferendis architecto sed nihil et est veniam quaerat similique nostrum natus vel quia accusamus aspernatur fuga officiis dolorem voluptas veritatis soluta aut rerum rerum cupiditate et sit dolorem quam veniam numquam temporibus harum nihil cum dolorem voluptas illo aut quaerat et ducimus voluptates rerum aliquam cumque sed reiciendis accusamus delectus similique nesciunt eius qui et expedita asperiores repellat sequi repudiandae et cupiditate facilis maxime omnis aut ut sed hic fuga similique est rem alias omnis voluptates amet quisquam enim quia doloremque voluptas et labore dolor omnis sequi recusandae omnis et quis blanditiis numquam est iure aut et porro aut nam vero perspiciatis omnis provident sint rerum et doloribus dolores omnis et ut numquam magnam culpa sapiente veniam atque laboriosam sint eius et quod voluptatem eos molestiae rerum laboriosam repellendus sint provident eveniet in accusantium aspernatur eaque commodi quia sed qui sed dolorum sit aut et minus quos sed minima recusandae aperiam ut vitae",
    "country": "Mauritania",
    "helpful_vote": 133,
    "avp_badge": true,
    "__v": 0,
    "product_id": "006",
    "product_options": [
      "Color: tan"
    ]
  };

  // Ya Basic
  test('Should render a ReviewItem component on the screen', () => {
    const wrapper = shallow(
      <ReviewItem rev={review} handleHelpfulInc={() => {}} />
    );
    expect(wrapper).toExist();
  });

  test('Has a username (h4)', () => {
    const wrapper = mount(
      <ReviewItem rev={review} handleHelpfulInc={() => {}} />
    );
    const value = wrapper.find('h4').text();
    expect(value).toEqual('Ms. Lesly Schoen');
  });

  test('Accepts rev props', () => {
    const wrapper = mount(
      <ReviewItem rev={review} handleHelpfulInc={() => {}} />
    );
    expect(wrapper.props().rev).toEqual(review);
  })

  test('Should call handleHelpfulIncClick when Helpful button is clicked', () => {
    const mockHelpful = jest.fn();
    const wrapper = mount(
      <ReviewItem rev={review} handleHelpfulInc={() => mockHelpful()} />
    );
    const helpfulButton = wrapper.find('button').last();
    helpfulButton.simulate('click');
    expect(mockHelpful).toHaveBeenCalled();
  });

});