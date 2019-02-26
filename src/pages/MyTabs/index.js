import React from 'react';
import './style.scss';

class MyTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  render() {
    var items = [
      { title: 'Item A', body: 'Body A' },
      { title: 'Item B', body: 'Body B' },
      { title: 'Item C', body: 'Body C' }
    ];
    return (
      <div className="my-tabs">
        <ul className="navs">
        {
          items.map((item, index) => (
            <li key={index}
              className={index === this.state.index ? 'active' : ''}
              onClick={() => this.setState({ index: index })}
              >
              {item.title}
            </li>
          ))
        }
        </ul>
        <div className="panes">
        {
          items.map((item, index) => (
            <div key={index} className="pane"
              style={{display: index === this.state.index ? 'block' : 'none'}}>
              {item.body}
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default MyTab;