import React from 'react';
import './style.scss';

class MyTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="tabs">
        <ul className="navs">
          <li>Item A</li>
          <li>Item B</li>
          <li>Item C</li>
        </ul>
        <div className="panes">
          <div className="pane">Body A</div>
          <div className="pane">Body B</div>
          <div className="pane">Body C</div>
        </div>
      </div>
    );
  }
}

export default MyTab;