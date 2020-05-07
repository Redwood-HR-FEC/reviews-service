
import React from "react";
import { Select, Option } from "./SelectOrder.styles";

class SelectOrder extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        isOpen: false,
        options: [],
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
    // this.setState({
    //   helpVoted: true,
    // });
    // this.props.handleHelpfulInc(this.props.rev._id);
  }


  render() {

    let { isOpen } = this.state;

    let toggleClass = isOpen ? 'is-open' : '' ;

    return (
      <Select
        className={toggleClass}
        onChange={this.handleOptionChange}>
        <Option>
          {/* {rev.product_options.map((options, idx) => (
            <li key={idx}>{options}<Spacer></Spacer></li>
          ))} */}
          1
        </Option>
        <Option>2</Option>
      </Select>
    );
  }
}

export default SelectOrder;