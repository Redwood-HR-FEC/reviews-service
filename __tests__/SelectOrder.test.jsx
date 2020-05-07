
import React from 'react';
import { shallow } from 'enzyme';
import SelectOrder from '../client/components/SelectOrder';

describe('SelectOrder.jsx Unit Tests', () => {

  let options = [
    { value: 'top-reviews', text: 'Top Reviews'},
    { value: 'most-recent', text: 'Most Recent'},
  ];

  // Ya Basic
  test('Should render a SelectOrder component on the screen', () => {
    const wrapper = shallow(
      <SelectOrder options={options} onChange={() => {}} />
    );
    expect(wrapper).toExist();
  });

  test('Has an <option>', () => {
    const wrapper = mount(
      <SelectOrder options={options} onChange={() => {}} />
    );
    const value = wrapper.find('option').first().text();
    expect(value).toEqual('Top Reviews');
  });

  // test('Accepts rev props', () => {
  //   const wrapper = mount(
  //     <SelectOrder rev={review} handleHelpfulInc={() => {}} />
  //   );
  //   expect(wrapper.props().rev).toEqual(review);
  // })

  // test('Should call handleHelpfulIncClick when Helpful button is clicked', () => {
  //   const mockHelpful = jest.fn();
  //   const wrapper = mount(
  //     <SelectOrder rev={review} handleHelpfulInc={() => mockHelpful()} />
  //   );
  //   const helpfulButton = wrapper.find('button').last();
  //   helpfulButton.simulate('click');
  //   expect(mockHelpful).toHaveBeenCalled();
  // });

});