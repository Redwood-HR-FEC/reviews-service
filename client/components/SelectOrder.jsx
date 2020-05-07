
import React from "react";
import { Wrapper, Select, Option } from "./SelectOrder.styles";

class SelectOrder extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        isOpen: false,
        orderBy: 'top-reviews',
      }

      this.handleToggleClick = this.handleToggleClick.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
  }


  // Toggle Read more / less
  handleToggleClick() {
    console.log('toggled');

    this.setState(prev => ({
      isOpen: !prev.isOpen,
    }));
  }


  // Increment the helpful vote by calling the app Incrementor
  handleOptionChange(event) {
    event.preventDefault();
    this.setState({
      orderBy: event.target.value
    });
    this.props.onChange(event.target.value);
  }


  render() {

    let { isOpen } = this.state;

    let toggleClass = isOpen ? 'is-open' : '' ;

    return (
      <Wrapper>
        <Select
          arai-label="Order the reviews by:"
          className={toggleClass}
          value={this.state.orderBy}
          onChange={this.handleOptionChange}>
          {this.props.options.map((option) => (
            <Option key={option.value} value={option.value}>{option.text}</Option>
            ))}
        </Select>
      </Wrapper>
    );
  }
}

export default SelectOrder;