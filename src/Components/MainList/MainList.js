import React from 'react';
import './MainList.css';


class MainList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  render() {
    return (
      <div className="Mainlist">
        <input
          value={this.props.mainlistName}
          onChange={this.handleNameChange}
        />

        <a className="Mainlist-save" onClick={this.props.onSave}>A Button</a>
      </div>
    );
  }
}


export default MainList;
