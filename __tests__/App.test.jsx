
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/Appp';

describe('App.jsx Unit Tests', () => {

  jest.mock('axios', () => {
    let reviews = [
      {
        "profile": {
          "name": "Emmie Schimmel",
          "avatar": "https://ghrsea09-fec-review-service.s3-us-west-2.amazonaws.com/avatar-34.jpg"
        },
        "_id": "5eb2578c1c26fb160a166588",
        "title": "dolorum omnis unde quia voluptas adipisci",
        "star_rating": 3,
        "date": "2019-10-05T11:22:19.018Z",
        "body": "beatae consequatur qui commodi voluptas voluptate mollitia eum suscipit voluptatem impedit soluta aut quaerat pariatur laboriosam laborum sint veniam quibusdam molestias est aliquid debitis quisquam dolorem exercitationem quasi nihil minus et eaque officiis dolores rerum sapiente pariatur ut itaque eum pariatur neque aut ullam distinctio ut doloremque eum explicabo iusto illum excepturi quo quia qui provident eveniet neque corrupti molestiae nam accusamus dignissimos",
        "country": "Guinea",
        "helpful_vote": 421,
        "avp_badge": true,
        "__v": 0,
        "product_id": "006",
        "product_options": [
          "Color: tan"
        ]
      },
      {
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
      },
    ]

    return {
      get: jest.fn( () => Promise.resolve(reviews) ),
    }
  });

  // Ya Basic
  test('Should render the App component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  // Ya Pilfereded
  test('Should invoke getAllReviews on componentDidMount', () => {

    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().getAllReviews = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();

  });

});