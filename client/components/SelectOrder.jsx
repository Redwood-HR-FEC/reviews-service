
import React from "react";
import { Select, Option } from "./SelectOrder.styles";

class SelectOrder extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        isOpen: false,
        options: [
          { value: 'top-reviews', text: 'Top Reviews'},
          { value: 'most-recent', text: 'Most Recent'},
        ],
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
    // this.props.handleOrderChange(event.target.value);
  }


  render() {

    let { isOpen } = this.state;

    let toggleClass = isOpen ? 'is-open' : '' ;

    return (
      <div>
        {this.state.orderBy}
        <Select
          className={toggleClass}
          value={this.state.orderBy}
          onChange={this.handleOptionChange}>
          {this.state.options.map((option, idx) => (
            <Option key={option.value} value={option.value}>{option.text}</Option>
            ))}
        </Select>
      </div>
    );
  }
}

export default SelectOrder;